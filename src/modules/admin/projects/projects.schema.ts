import { z } from "zod"

export const ProjectsSchema = z.object({
  name: z.string().min(1, "Projects name is required"),
})

export type ProjectsInput = z.infer<typeof ProjectsSchema>
