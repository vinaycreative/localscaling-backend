import { db } from "@/config/db"
import { BrandingFormData } from "./branding-info.schema"

export const getBrandingInfoService = async (userId: string) => {
  const { data: client, error } = await db
    .from("branding_assets")
    .select("*, client_social_links(*)")
    .eq("user_id", userId)
    .single()

  if (error && error.code !== "PGRST116") {
    console.error(`[getBusinessInfo]:`, error.message)
    throw new Error(`Failed to fetch client info: ${error.message}`)
  }

  if (!client) {
    console.log(`[getBusinessInfo]: ${userId}`)
    return null
  }

  return client
}

export const saveBrandingInfoService = async (userId: string, data: BrandingFormData) => {
  const payload = {
    ...data,
    user_id: userId,
  }

  const { data: businessInfoData, error: clientError } = await db
    .from("branding_assets")
    .insert(payload)
  if (clientError) {
    throw new Error("failed ")
  }
  return businessInfoData
}
