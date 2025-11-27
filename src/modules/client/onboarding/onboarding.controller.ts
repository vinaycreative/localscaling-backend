import { AuthRequest } from "@/middleware/authMiddleware";
import { asyncHandler } from "@/utils/asyncHandler";
import { sendSuccess } from "@/utils/response";
import { Response } from "express";
import { businessInfoSchema } from "./onboarding.schema";
import { saveBusinessInfoService } from "./onboarding.service";

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
