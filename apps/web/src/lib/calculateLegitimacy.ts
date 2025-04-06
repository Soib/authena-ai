import type { DocumentResult } from "~/types";

const LEGITIMACY_THRESHOLD = 0.4;

/**
 * Calculates the average risk score from idFront and idBack scores
 * @param idScrappingResult The document scanning result
 * @returns The average risk score
 */
export const calculateIdScrappingResultScore = (
	idScrappingResult: DocumentResult,
): number => {
	const frontScore = idScrappingResult?.idFront?.score || 0;
	const backScore = idScrappingResult?.idBack?.score || 0;

	// If one side is missing, return the score of the available side
	if (!idScrappingResult.idFront) return backScore;
	if (!idScrappingResult.idBack) return frontScore;

	// Calculate average score
	return (frontScore + backScore) / 2;
};

export const calculateLegitimacy = (
	idScrappingResult: DocumentResult,
	faceComperingResultScore: number,
) => {
	const idScrappingResultScore =
		calculateIdScrappingResultScore(idScrappingResult);

	const reversedIdScrappingResultScore = 1 - faceComperingResultScore;

	const legitimacyScore =
		(idScrappingResultScore + reversedIdScrappingResultScore) / 2;

	if (legitimacyScore > LEGITIMACY_THRESHOLD) {
		return {
			isValid: true,
			score: legitimacyScore,
		};
	}

	return {
		isValid: false,
		score: legitimacyScore,
	};
};
