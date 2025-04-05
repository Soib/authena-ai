"use client";

import { useState } from "react";
import { Camera } from "~/components/camera";
import { ChatInterface } from "~/components/chat-interface";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { type FaceDescriptor, useFaceApi } from "~/hooks/use-face-api";
import { cn } from "~/lib/utils";

export const Chat = () => {
	const [step, setStep] = useState<
		"intro" | "id-card" | "face" | "verifying" | "result"
	>("intro");
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

	const { detectFace, calculateDistance } = useFaceApi();

	const addMessage = (
		role: "user" | "assistant" | "system",
		content: string,
	) => {
		setMessages((prev) => [...prev, { role, content }]);
	};

	const handleIdCardCapture = async (canvas: HTMLCanvasElement) => {
		setIdCardImage(canvas.toDataURL("image/png"));
		addMessage("system", "ID card photo captured.");

		try {
			addMessage("system", "Processing ID card...");
			const descriptor = await detectFace(canvas);
			setIdCardDescriptor(descriptor ?? null);

			if (descriptor) {
				addMessage(
					"assistant",
					"Great! I can see a face on your ID card. Now, let's take a photo of your face. Please look directly at the camera.",
				);
				setStep("face");
			} else {
				addMessage(
					"assistant",
					"I couldn't detect a face on your ID card. Please try again with better lighting and make sure your ID card is clearly visible.",
				);
				setIdCardImage(null);
			}
		} catch (error) {
			addMessage("system", "Error processing ID card.");
			setIdCardImage(null);
		}
	};

	const handleFaceCapture = async (canvas: HTMLCanvasElement) => {
		setFaceImage(canvas.toDataURL("image/png"));
		addMessage("system", "Face photo captured.");

		try {
			addMessage("system", "Processing your face...");
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
					const threshold = 0.6; // This threshold can be adjusted based on your requirements
					const matched = distance < threshold;

					setVerificationResult({ matched, score: distance });

					if (matched) {
						addMessage(
							"assistant",
							`Verification successful! The similarity score is ${((1 - distance) * 100).toFixed(2)}%.`,
						);
					} else {
						addMessage(
							"assistant",
							`Verification failed. The similarity score is ${((1 - distance) * 100).toFixed(2)}%. Please try again.`,
						);
					}

					setStep("result");
				} else {
					addMessage(
						"assistant",
						"I couldn't detect your face. Please try again with better lighting and make sure your face is clearly visible.",
					);
				}
			} else {
				addMessage(
					"assistant",
					"I couldn't detect your face. Please try again with better lighting and make sure your face is clearly visible.",
				);
				setFaceImage(null);
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
		setStep("id-card");
	};

	const resetVerification = () => {
		setIdCardImage(null);
		setFaceImage(null);
		setIdCardDescriptor(null);
		setFaceDescriptor(null);
		setVerificationResult(null);
		setMessages([
			{
				role: "assistant",
				content:
					"Hello! I need to verify your identity. I'll guide you through taking photos of your ID card and your face.",
			},
		]);
		setStep("intro");
	};

	return (
		<div className="flex min-h-screen flex-col items-center justify-center p-4">
			<Card className="w-full max-w-md animate-fade-in">
				<CardContent className="p-6">
					<ChatInterface messages={messages} />

					{step === "intro" && (
						<div className="mt-4 flex justify-center">
							<Button onClick={startVerification}>Start Verification</Button>
						</div>
					)}

					{step === "id-card" && (
						<div className="mt-4">
							<Camera onCapture={handleIdCardCapture} />
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
							<div className="mb-4 flex space-x-4">
								{idCardImage && (
									<div className="w-1/2">
										<p className="mb-2 text-center text-muted-foreground text-sm">
											ID Card
										</p>
										<img
											src={idCardImage || "/placeholder.svg"}
											alt="ID Card"
											className="h-auto w-full rounded-md"
										/>
									</div>
								)}
								{faceImage && (
									<div className="w-1/2">
										<p className="mb-2 text-center text-muted-foreground text-sm">
											Your Face
										</p>
										<img
											src={faceImage || "/placeholder.svg"}
											alt="Face"
											className="h-auto w-full rounded-md"
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
											verificationResult.matched
												? "text-success"
												: "text-danger",
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
				</CardContent>
			</Card>
		</div>
	);
};
