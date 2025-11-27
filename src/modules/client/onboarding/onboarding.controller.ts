import { AuthRequest } from "@/middleware/authMiddleware";
import { asyncHandler } from "@/utils/asyncHandler";
import { sendSuccess } from "@/utils/response";
import { Response } from "express";
import {
  brandingSchema,
  businessInfoSchema,
  websiteSchema,
} from "./onboarding.schema";
import {
  saveBrandingService,
  saveBusinessInfoService,
  saveWebsiteInfoService,
} from "./onboarding.service";

export const saveBusinessInfoController = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const payload = await businessInfoSchema.parseAsync(req.body);
    const userId = req.user?.id;

    if (!userId) {
      res.status(401);
      throw new Error("Unauthorized: User ID missing");
    }

    const result = await saveBusinessInfoService(userId, payload);

    return sendSuccess(res, "Business information saved successfully", result);
  }
);

export const saveBrandingController = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const payload = await brandingSchema.parseAsync(req.body);
    const result = await saveBrandingService(payload);

    return sendSuccess(res, "Branding assets saved successfully", result);
  }
);

export const saveWebsiteInfoController = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const payload = await websiteSchema.parseAsync(req.body);
    const result = await saveWebsiteInfoService(payload);

    return sendSuccess(res, "Website information saved successfully", result);
  }
);
