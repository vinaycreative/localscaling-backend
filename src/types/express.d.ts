import "express"

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string
        roles: string[]
        permissions: string[]
      }
      dealer?: {
        id: string
        dealer_id: string
        is_sub_dealer: boolean
        roles: string[]
        permissions: string[]
      }
      dealerEmployee?: {
        id: string
        dealer_id: string
        roles: string[]
        permissions: string[]
      }
    }
  }
}

export {}
