export interface WebflowOAuthToken {
  access_token: string
  refresh_token?: string
  expires_in: number
  token_type: string
}

export interface WebflowSite {
  id: string
  name: string
  shortName?: string
}
