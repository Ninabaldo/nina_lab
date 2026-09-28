export interface IncidentAnalysis {
  whatHappened: string
  businessImpact: string
  recommendedAction: string
}

export interface IncidentBriefRequest {
  input: string
  language: string
}

export interface IncidentBriefResponse {
  analysis: IncidentAnalysis
}

export interface IncidentBriefErrorResponse {
  error: string
}
