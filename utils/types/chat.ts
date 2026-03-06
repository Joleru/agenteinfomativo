export interface CohereCitationSource {
  type: "document"
  id: string
  document: {
    id: string
    precio: string
    producto: string
  }
}
export interface CohereCitation {
  start: number
  end: number
  text: string
  sources: CohereCitationSource[]
  type: "TEXT_CONTENT"
}
export interface CohereMessageContent {
  type: "text"
  text: string
}
export interface CohereMessage {
  role: "user" | "assistant"
  content: CohereMessageContent[]
  citations?: CohereCitation[]
}
export interface CohereBilledUnits {
  input_tokens: number
  output_tokens: number
}
export interface CohereUsage {
  billed_units: CohereBilledUnits
  tokens: {
    input_tokens: number
    output_tokens: number
    cached_tokens: number
  }
}
export interface CohereResponse {
  id: string
  message: CohereMessage
  finish_reason: "COMPLETE" | "ERROR"
  usage: CohereUsage
}

export interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}