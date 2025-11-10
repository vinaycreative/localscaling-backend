import { Request, Response, NextFunction } from "express"
import { verifyToken } from "@/utils/jwt"
import { AppError } from "@/utils/appError"
import { logger } from "@/config/logger"

// AuthMiddleware
export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1]
  if (!token) {
    return next(new AppError("Unauthorized", 401))
  }
  const decoded = verifyToken(token)
  req.user = decoded
  next()
}
