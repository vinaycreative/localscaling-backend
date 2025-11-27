import { Router } from "express";
import {
  saveBrandingController,
  saveBusinessInfoController,
  saveWebsiteInfoController,
} from "./onboarding.controller";

const router = Router();

router.post("/business-info", saveBusinessInfoController);
router.post("/website", saveWebsiteInfoController);
router.post("/branding", saveBrandingController);

export default router;
