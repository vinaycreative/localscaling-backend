import { Request, Response } from "express"
import { getProjectsService } from "./projects.service"
import { sendSuccess } from "@/utils/response"
import { getProjectsFiltersUtil } from "./projects.utils"

export const getProjectsController = async (req: Request, res: Response) => {
  const user_id = req.user?.id || ""

  const clients = await getProjectsService(user_id, getProjectsFiltersUtil(req.query))

  return sendSuccess(res, "Clients fetched successfully", clients)
}
