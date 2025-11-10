import { db } from "@/config/db"
import { AppError } from "@/utils/appError"
import bcrypt from "bcryptjs"
import { generateToken } from "@/utils/jwt"
import { LoginInput } from "./auth.schema"

export const loginService = async (input: LoginInput) => {
  // db call
}

export const getLoggedInService = async (dealer_id: string) => {
  //  db logic
}
