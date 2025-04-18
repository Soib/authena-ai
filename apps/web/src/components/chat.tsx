"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Camera } from "~/components/camera";
import { ChatInterface } from "~/components/chat-interface";
import { useFaceApi, type FaceDescriptor } from "~/hooks/use-face-api";
import { useScrapDocumentData } from "~/hooks/use-scarp-document-data";
import { cn } from "~/lib/utils";
import { calculateLegitimacy } from "~/lib/calculateLegitimacy";
import type { DocumentFieldOutput } from "@azure-rest/ai-document-intelligence";
import Confetti from "react-confetti";
import { LEGIT_FALLBACK } from "~/lib/constants";
export type VerificationStep =
	| "intro"
	| "id-front"
	| "id-back"
	| "face"
	| "verifying"
	| "result";
export type PreviewData = {
	insights: string[];
	confidence: number;
	risk: number;
	category: string;
	lookupResult?: {
    name: string | null;
    headline: string | null;
    location: string | null;
    experience: Array<{
      jobTitle: string | null;
      company: string | null;
      jobDates: string | null;
      location?: string | null;
    }>;
    education: Array<{
      universityName: string | null;
      degree: string | null;
      studyPeriod: string | null;
    }>;
    languages: string[];
    profileImageUrl: string | null;
  };
};

export const Chat = () => {
	const [successfulVerification, setSuccessfulVerification] = useState(false);
	const [previewData, setPreviewData] = useState<PreviewData>({
		insights: ["User is starting the verification process."],
		confidence: 0,
		risk: 0,
		category: "General Discussion",
	});
	const [step, setStep] = useState<VerificationStep>("intro");
	const [messages, setMessages] = useState<
		Array<{ role: "user" | "assistant" | "system"; content: string }>
	>([
		{
			role: "assistant",
			content:
				"Hello! I need to verify your identity. I'll guide you through taking photos of your ID card and your face.",
		},
	]);
	const [idCardImage, setIdCardImage] = useState<string | null>(null);
	const [idCardBackImage, setIdCardBackImage] = useState<string | null>(null);
	const [faceImage, setFaceImage] = useState<string | null>(null);
	const [idCardDescriptor, setIdCardDescriptor] =
		useState<FaceDescriptor | null>(null);
	const [faceDescriptor, setFaceDescriptor] = useState<FaceDescriptor | null>(
		null,
	);
	const [verificationResult, setVerificationResult] = useState<{
		matched: boolean;
		score: number;
	} | null>(null);

	const [documentResults, setDocumentResults] = useState<{
		idFront?: { data?: Record<string, DocumentFieldOutput>; score?: number };
		idBack?: { data?: Record<string, DocumentFieldOutput>; score?: number };
	}>({
		idFront: undefined,
		idBack: undefined,
	});

	const { addDocument, isProcessing } = useScrapDocumentData(setStep);
	const { detectFace, calculateDistance } = useFaceApi();

	const addMessage = (
		role: "user" | "assistant" | "system",
		content: string,
	) => {
		setMessages((prev) => [...prev, { role, content }]);
	};

	const handleIdFrontCapture = async (canvas: HTMLCanvasElement) => {
		const imageData = canvas.toDataURL("image/png");
		setIdCardImage(imageData);
		addMessage("system", "Front of ID card captured.");
		setPreviewData((prev) => ({
			...prev,
			category: "ID Verification",
			insights: [...prev.insights, "User provided the front of their ID card."],
		}));
		const data = await addDocument("idFront", imageData);
		try {
			if (!data?.idScrappingResultScore) {
				throw new Error("No ID data found");
			}
			setDocumentResults({
				idFront: {
					data: data?.extractedFields["idFront"],
					score: data?.idScrappingResultScore,
				},
			});
      const lastName = data?.extractedFields?.idFront?.LastName?.valueString ?? null;
			const lookupResult = LEGIT_FALLBACK?.[lastName as keyof typeof LEGIT_FALLBACK] ?? null;
			setPreviewData((prev) => ({
				...prev,
				confidence: data?.idScrappingResultScore,
				insights: [...prev.insights, "AI has analyzed the ID data integrity."],
				risk: lookupResult ? (1 - ((Math.random() * 27 + 70) / 100)) : 0,
				lookupResult: lookupResult ?? undefined,
			}));

			const descriptor = await detectFace(canvas);
			setIdCardDescriptor(descriptor ?? null);

			if (descriptor) {
				addMessage(
					"assistant",
					"Great! Now, let's take a photo of the back of your ID card.",
				);
				setStep("id-back");
			} else {
				addMessage(
					"assistant",
					"I couldn't detect a face on your ID card. Please try again with better lighting.",
				);
				setIdCardImage(null);
			}
		} catch (error) {
			addMessage("system", "Error processing ID card front.");
			setIdCardImage(null);
			setStep("id-front");
		}
	};

	const handleIdBackCapture = async (canvas: HTMLCanvasElement) => {
		const imageData = canvas.toDataURL("image/png");
		setIdCardBackImage(imageData);
		setPreviewData((prev) => ({
			...prev,
			category: "ID Verification",
			insights: [...prev.insights, "User provided the back of their ID card."],
		}));
		addMessage("system", "Back of ID card captured.");
		const data = await addDocument("idBack", imageData);

		try {
			if (!data?.idScrappingResultScore) {
				throw new Error("No ID data found");
			}
			setDocumentResults((prev) => ({
				...prev,
				idBack: {
					data: data?.extractedFields["idBack"],
					score: data?.idScrappingResultScore,
				},
			}));

			setPreviewData((prev) => ({
				...prev,
				confidence: data?.idScrappingResultScore,
				insights: [...prev.insights, "AI has analyzed the ID data integrity."],
			}));

			addMessage(
				"assistant",
				"Great! Now, let's take a photo of your face. Please look directly at the camera.",
			);
			setStep("face");
		} catch {
			addMessage("system", "Error processing ID card back.");
			setIdCardBackImage(null);
			setStep("id-back");
		}
	};

	const handleFaceCapture = async (canvas: HTMLCanvasElement) => {
		const imageData = canvas.toDataURL("image/png");
		addMessage("system", "Face photo captured.");
		setFaceImage(imageData);
		setPreviewData((prev) => ({
			...prev,
			category: "Face Verification",
			insights: [
				...prev.insights,
				"User provided the face photo to check the similarity.",
			],
		}));

		try {
			const faceDescriptor = await detectFace(canvas);
			setFaceDescriptor(faceDescriptor ?? null);

			if (faceDescriptor) {
				addMessage(
					"assistant",
					"Processing complete. Now comparing your face with your ID card...",
				);
				setStep("verifying");

				if (idCardDescriptor && faceDescriptor) {
					const distance = calculateDistance(
						Array.from(idCardDescriptor.descriptor),
						Array.from(faceDescriptor.descriptor),
					);


					const legitimacy = calculateLegitimacy(documentResults, distance);

					setPreviewData((prev) => ({
						...prev,
						confidence: legitimacy.score,
						insights: [
							...prev.insights,
							"AI has verified the legitimacy of the ID card.",
						],
					}));

					setVerificationResult({
						matched: legitimacy.isValid,
						score: legitimacy.score,
					});

					if (legitimacy.isValid) {
						addMessage(
							"assistant",
							`Verification successful! The similarity score is ${((1 - legitimacy.score) * 100).toFixed(2)}%.`,
						);
						setPreviewData((prev) => ({
							...prev,
							insights: [
								...prev.insights,
								"AI has verified the face matches the ID card.",
							],
						}));
					} else {
						addMessage(
							"assistant",
							`Verification failed. The similarity score is ${((1 - distance) * 100).toFixed(2)}%. Please try again.`,
						);
						setPreviewData((prev) => ({
							...prev,
							insights: [
								...prev.insights,
								"AI has verified the face does not match the ID card.",
							],
						}));
					}

					setStep("result");
				} else {
					addMessage(
						"assistant",
						"I couldn't detect your face. Please try again with better lighting and make sure your face is clearly visible.",
					);
					setStep("face");
				}
			} else {
				addMessage(
					"assistant",
					"I couldn't detect your face. Please try again with better lighting and make sure your face is clearly visible.",
				);
				setFaceImage(null);
				setStep("face");
			}
		} catch (error) {
			addMessage("system", "Error processing face.");
			setFaceImage(null);
		}
	};

	const startVerification = () => {
		addMessage(
			"assistant",
			"Let's start the verification process. First, please take a photo of your ID card. Make sure it's well-lit and the face on the ID is clearly visible.",
		);
		setStep("id-front");
	};

	const resetVerification = () => {
		setIdCardImage(null);
		setIdCardBackImage(null);
		setFaceImage(null);
		setIdCardDescriptor(null);
		setFaceDescriptor(null);
		setVerificationResult(null);
		setSuccessfulVerification(false);
		setMessages([
			{
				role: "assistant",
				content:
					"Hello! I need to verify your identity. I'll guide you through taking photos of your ID card and your face.",
			},
		]);
		setStep("intro");
		setPreviewData({
			...previewData,
			insights: [
				...previewData.insights,
				"User has started the verification process again.",
			],
		});
	};

	return (
		<>
			<ChatInterface
				messages={messages}
				isLoading={isProcessing}
				step={step}
				previewData={previewData}
			>
				{step === "intro" && (
					<div className="mt-4 flex justify-center">
						<Button onClick={startVerification}>Start Verification</Button>
					</div>
				)}

				{step === "id-front" && (
					<div className="mt-4">
						<Camera onCapture={handleIdFrontCapture} />
					</div>
				)}

				{step === "id-back" && (
					<div className="mt-4">
						<Camera onCapture={handleIdBackCapture} />
					</div>
				)}

				{step === "face" && (
					<div className="mt-4">
						<Camera onCapture={handleFaceCapture} />
					</div>
				)}

				{step === "verifying" && (
					<div className="mt-4 flex justify-center">
						<div className="animate-pulse text-center">
							<p>Verifying your identity...</p>
						</div>
					</div>
				)}

				{step === "result" && (
					<div className="mt-4">
						<div className="flex space-x-4 mb-4 flex-wrap">
							{idCardImage && (
								<div className="w-1/3">
									<p className="text-sm text-center mb-2 text-muted-foreground">
										ID Card Front
									</p>
									<img
										src={idCardImage}
										alt="ID Card Front"
										className="w-full h-auto rounded-md"
									/>
								</div>
							)}
							{idCardBackImage && (
								<div className="w-1/3">
									<p className="text-sm text-center mb-2 text-muted-foreground">
										ID Card Back
									</p>
									<img
										src={idCardBackImage}
										alt="ID Card Back"
										className="w-full h-auto rounded-md"
									/>
								</div>
							)}
							{faceImage && (
								<div className="w-1/3">
									<p className="text-sm text-center mb-2 text-muted-foreground">
										Your Face
									</p>
									<img
										src={faceImage}
										alt="Face"
										className="w-full h-auto rounded-md"
									/>
								</div>
							)}
						</div>

						{verificationResult && (
							<div
								className={cn(
									"rounded-md p-4 text-center",
									verificationResult.matched
										? "border border-success bg-success/20 text-success-foreground"
										: "border border-danger bg-danger/20 text-danger-foreground",
								)}
							>
								<p
									className={cn(
										"font-bold",
										verificationResult.matched ? "text-success" : "text-danger",
									)}
								>
									{verificationResult.matched
										? "Identity Verified"
										: "Verification Failed"}
								</p>
								<p
									className={cn(
										"text-sm",
										verificationResult.matched
											? "text-success/70"
											: "text-danger/70",
									)}
								>
									Similarity Score:{" "}
									{((1 - verificationResult.score) * 100).toFixed(2)}%
								</p>
							</div>
						)}

						<div className="mt-4 flex justify-center">
							<Button onClick={resetVerification}>Start Over</Button>
						</div>
					</div>
				)}
			</ChatInterface>
			{successfulVerification && (
				<Confetti
					width={window.innerWidth}
					height={window.innerHeight}
					numberOfPieces={200}
				/>
			)}
		</>
	);
};
