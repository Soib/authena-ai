import type { AnalyzeResultOutput, DocumentFieldOutput } from "@azure-rest/ai-document-intelligence";
import type { Essa } from "~/types";

export const calculateDocumentRiskScore = (document: {idFront?: Record<string, DocumentFieldOutput>, idBack?: Record<string, DocumentFieldOutput>}) => {
  const { idFront, idBack } = document;

  // Function to calculate average confidence from an object's fields
  const calculateAverageConfidence = (obj?: Record<string, DocumentFieldOutput>): number => {
    if (!obj) return 0;
    
    let sum = 0;
    let count = 0;
    
    // Recursively process all fields
    const processObject = (data: Record<string, any>) => {
      Object.values(data).forEach(value => {
        // If the value has a confidence property, add it to our calculation
        if (value && typeof value === 'object') {
          if ('confidence' in value && typeof value.confidence === 'number') {
            sum += value.confidence;
            count++;
          }
          // If it's an object without confidence, recursively check its properties
          else {
            processObject(value);
          }
        }
      });
    };
    
    processObject(obj);
    
    // Return average or 0 if no confidence values found
    return count > 0 ? sum / count : 0;
  };
  
  // Calculate average confidence for both idFront and idBack
  const frontConfidence = calculateAverageConfidence(idFront);
  const backConfidence = calculateAverageConfidence(idBack);
  
  // Calculate overall average confidence
  const totalFields = (idFront ? 1 : 0) + (idBack ? 1 : 0);
  const averageConfidence = totalFields > 0 ? 
    (frontConfidence + backConfidence) / totalFields : 0;
  
  // For now, using the average confidence as the risk score
  // Lower confidence = higher risk
  const riskScore = averageConfidence;
  
  return riskScore;
};
