import { AuthRequest } from "@/middleware/authMiddleware";
import { asyncHandler } from "@/utils/asyncHandler";
import { sendSuccess } from "@/utils/response";
import { Response } from "express";
import {
  brandingSchema,
  businessFormSchema,
  locationsBudgetSchema,
  WebsiteSetupPayload,
} from "./onboarding.schema";
import {
  getAdsBudgetService,
  getBrandingService,
  getBusinessInfoService,
  getWebsiteSetupService,
  saveAdsBudgetService,
  saveBrandingService,
  saveBusinessInfoService,
  saveWebsiteSetupService,
} from "./onboarding.service";

export const getBusinessInfoController = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const userId = req.user?.id;

    if (!userId) {
      res.status(401);
      throw new Error("Unauthorized");
    }

    const result = await getBusinessInfoService(userId);
    return sendSuccess(
      res,
      "Business information fetched successfully",
      result
    );
  }
);

export const saveBusinessInfoController = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    console.log("req.body is ", req.body);
    const payload = await businessFormSchema.parseAsync(req.body);
    const userId = req.user?.id;

    if (!userId) {
      res.status(401);
      throw new Error("Unauthorized: User ID missing");
    }

    const result = await saveBusinessInfoService(userId, payload);

    return sendSuccess(res, "Business information saved successfully", result);
  }
);

export const getBrandingController = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const userId = req.user?.id;

    if (!userId) {
      res.status(401);
      throw new Error("Unauthorized");
    }

    const result = await getBrandingService(userId);
    return sendSuccess(
      res,
      "Branding information fetched successfully",
      result
    );
  }
);

export const saveBrandingController = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const userId = req.user?.id;

    if (!userId) {
      res.status(401);
      throw new Error("Unauthorized: User ID missing");
    }

    const payload = await brandingSchema.parseAsync(req.body);

    const result = await saveBrandingService(userId, payload);

    return sendSuccess(res, "Branding assets saved successfully", result);
  }
);

export const getWebsiteSetupController = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const userId = req.user?.id;

    if (!userId) {
      res.status(401);
      throw new Error("Unauthorized: User ID missing");
    }

    const result = await getWebsiteSetupService(userId);

    if (!result) {
      return sendSuccess(res, "No website setup found", null);
    }

    return sendSuccess(res, "Website setup retrieved successfully", result);
  }
);

export const saveWebsiteSetupController = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const userId = req.user?.id;
    const payload: WebsiteSetupPayload = req.body;

    if (!userId) {
      res.status(401);
      throw new Error("Unauthorized: User ID missing");
    }

    const result = await saveWebsiteSetupService(userId, payload);

    return sendSuccess(res, "Website setup saved successfully", result);
  }
);

export const getAdsBudgetController = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const userId = req.user?.id;

    if (!userId) {
      res.status(401);
      throw new Error("Unauthorized");
    }

    const result = await getAdsBudgetService(userId);

    return sendSuccess(res, "Ads budget fetched successfully", result);
  }
);

export const saveAdsBudgetController = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const userId = req.user?.id;

    if (!userId) {
      res.status(401);
      throw new Error("Unauthorized: User ID missing");
    }

    const payload = await locationsBudgetSchema.parseAsync(req.body);

    const result = await saveAdsBudgetService(userId, payload);

    return sendSuccess(res, "Ads budget saved successfully", result);
  }
);
