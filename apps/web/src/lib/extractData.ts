import type { AnalyzeResultOutput, DocumentFieldOutput } from "@azure-rest/ai-document-intelligence";
import type { DocumentType } from "~/types";


/**
 * Extracts specific fields from an ID document analysis object
 * @param {Object} idDocumentObject - The object containing ID document analysis data
 * @returns {Object} - The extracted fields
 */
export const extractIdDocumentFields = (idDocumentObject: Record<DocumentType, AnalyzeResultOutput | null | undefined>): {idFront?: Record<string, DocumentFieldOutput>, idBack?: Record<string, DocumentFieldOutput>} => {
  const result: {idFront?: Record<string, DocumentFieldOutput>, idBack?: Record<string, DocumentFieldOutput>} = {};
  
  // Check if front ID data exists and has the required structure
  if (idDocumentObject?.idFront?.documents?.[0]?.fields) {
    result.idFront = idDocumentObject.idFront.documents[0].fields;
  }
  
  // Check if back ID data exists and has the required structure
  if (idDocumentObject?.idBack?.documents?.[0]?.fields) {
    result.idBack = idDocumentObject.idBack.documents[0].fields;
  }
  
  return result;
}