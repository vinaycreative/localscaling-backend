import { Request, Response } from "express"
import { asyncHandler } from "@/utils/asyncHandler"
import { loginSchema, LoginInput } from "./auth.schema"
import { getLoggedInService, loginService } from "./auth.service"
import { sendSuccess } from "@/utils/response"
import { env } from "@/config/env"

const COOKIE_NAME = "dealer_token"

// Login Dealer
export const loginDealerController = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = await loginSchema.parseAsync(req.body)
  const result = await loginService({ email, password })
  // res.cookie(COOKIE_NAME, result.token, {
  //   httpOnly: true,
  //   secure: env.NODE_ENV === "production",
  //   maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  //   domain: env.COOKIE_DOMAIN,
  //   path: "/",
  // })

  return sendSuccess(res, "Login successful", result)
})

// Get Logged In Dealer
export const getLoggedInDealerController = asyncHandler(async (req: Request, res: Response) => {
  const dealerId = req.dealer?.id
  const dealer = await getLoggedInService(dealerId!)
  return sendSuccess(res, "Logged in dealer", dealer)
})

// Logout Dealer
export const logoutDealerController = asyncHandler(async (req: Request, res: Response) => {
  const cookieName = "client_token"

  const cookieOptions = {
    domain: process.env.COOKIE_DOMAIN,
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
  }
  res.clearCookie(cookieName, cookieOptions)
  return sendSuccess(res, "Logged out successfully")
})
