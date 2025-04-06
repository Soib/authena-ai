import type {
	AnalyzeResultOutput,
	DocumentFieldOutput,
} from "@azure-rest/ai-document-intelligence";

export type Essa = Record<DocumentType, AnalyzeResultOutput | undefined | null>;

export type DocumentType = "idFront" | "idBack";

export type DocumentResult = {
	idFront?: {
		data?: Record<string, DocumentFieldOutput>;
		score?: number;
	};
	idBack?: {
		data?: Record<string, DocumentFieldOutput>;
		score?: number;
	};
};
