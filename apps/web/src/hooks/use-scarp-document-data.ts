import DocumentIntelligence, {
	getLongRunningPoller,
	isUnexpected,
	type AnalyzeOperationOutput,
	type AnalyzeResultOutput,
} from "@azure-rest/ai-document-intelligence";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

const MAX_POLLING_ATTEMPTS = 5;
const endpoint = process.env.NEXT_PUBLIC_AZURE_ENDPOINT;
const apiKey = process.env.NEXT_PUBLIC_AZURE_API_KEY;

if (!endpoint || !apiKey) {
	throw new Error("Azure Document Intelligence credentials are missing");
}

const client = DocumentIntelligence(endpoint, {
	key: apiKey,
});

export type DocumentType = "idFront" | "idBack";

export interface DocumentData {
	type: DocumentType;
	base64: string;
}

export const useScrapDocumentData = (
	setStep: Dispatch<
		SetStateAction<
			"intro" | "id-front" | "id-back" | "face" | "verifying" | "result"
		>
	>,
) => {
	const [documents, setDocuments] = useState<DocumentData[]>([]);
	const [results, setResults] = useState<
		Record<DocumentType, AnalyzeResultOutput | undefined | null>
	>({
		idFront: null,
		idBack: null,
	});
	const [error, setError] = useState<Error | null>(null);
	const [isProcessing, setIsProcessing] = useState(false);

	// Add a document image
	const addDocument = async (type: DocumentType, base64: string) => {
		await analyzeDocuments(type, base64);
		// setDocuments((prev) => {
		//   // Replace if document of this type already exists
		//   const filtered = prev.filter((doc) => doc.type !== type);
		//   return [...filtered, { type, base64 }];
		// });
	};

	const analyzeDocuments = async (type: DocumentType, base64: string) => {
		try {
			setIsProcessing(true);

			// Process each document individually

			// Fix base64 format by ensuring it doesn't contain the data URL prefix
			const formattedBase64 = base64.replace(/^data:image\/[a-z]+;base64,/, "");

			console.log("Processing document type:", type);
			const initialResponse = await client
				.path("/documentModels/{modelId}:analyze", "prebuilt-idDocument")
				.post({
					contentType: "application/json",
					body: {
						base64Source: formattedBase64,
					},
				});

			console.log(initialResponse);

			if (isUnexpected(initialResponse)) {
				throw initialResponse.body.error;
			}

			const poller = getLongRunningPoller(client, initialResponse, {
				intervalInMs: 3000,
			});

			// Add polling attempt counter
			let pollingAttempts = 0;

			// Custom polling function with attempt limit
			const pollWithLimit = async () => {
				while (true) {
					pollingAttempts++;
					console.log(`Polling attempt ${pollingAttempts} for ${type}`);

					if (pollingAttempts > MAX_POLLING_ATTEMPTS) {
						throw new Error(
							`Polling exceeded maximum attempts (${MAX_POLLING_ATTEMPTS}) for document type: ${type}`,
						);
					}

					const pollResult = await poller.poll();

					console.log("pollResult", pollResult);
					if (pollResult.status === "succeeded") {
						return (pollResult.result?.body as AnalyzeOperationOutput)
							.analyzeResult;
					}

					// // Wait before next polling attempt
					await new Promise((resolve) => setTimeout(resolve, 3000));
				}
			};

			const analysisResult = await pollWithLimit();

			console.log(`Analysis result for ${type}:`, analysisResult);

			// Update results state
			const newResults = { ...results };
			newResults[type] = analysisResult;

			setResults(newResults);
		} catch (err) {
			setError(err instanceof Error ? err : new Error(String(err)));
		} finally {
			setIsProcessing(false);
		}
	};
	// Clear all documents
	const clearDocuments = () => {
		setDocuments([]);
		setResults({
			idFront: null,
			idBack: null,
		});
		setError(null);
	};

	return {
		documents,
		addDocument,
		clearDocuments,
		results,
		error,
		isProcessing,
	};
};
