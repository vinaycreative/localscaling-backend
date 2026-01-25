import { db } from "@/config/db"
import { GetProjectsFilters } from "./projects.type"

export const getProjectsService = async (userId: string, filters?: GetProjectsFilters) => {
  const page = filters?.page ?? 1
  const perPage = filters?.perPage ?? 10

  const from = (page - 1) * perPage
  const to = from + perPage - 1

  let query = db.from("projects").select("*", { count: "exact" })

  // -------- TEXT FILTERS (ILIKE) --------
  if (filters?.name) {
    query = query.ilike("name", `%${filters.name}%`)
  }

  // -------- EXACT MATCH FILTERS --------
  console.log("🚀 ~ getProjectsService ~ filters?.status:", filters)
  if (filters?.status) {
    query = query.eq("status", filters.status)
  }

  if (filters?.stage) {
    query = query.eq("stage", filters.stage)
  }

  // -------- DATE FILTERS --------
  if (filters?.created_at) {
    const timestamp = Number(filters.created_at)
    if (!Number.isNaN(timestamp)) {
      const fromDate = new Date(timestamp)
      fromDate.setHours(0, 0, 0, 0)
      query = query.gte("created_at", fromDate.toISOString())
    }
  }

  if (filters?.updated_at) {
    query = query.gte("updated_at", filters.updated_at)
  }

  // -------- PAGINATION --------
  query = query.range(from, to)

  const { data, error, count } = await query

  if (error) {
    throw error
  }

  return {
    data: data ?? [],
    page,
    perPage,
    total: count ?? 0,
    totalPages: count ? Math.ceil(count / perPage) : 0,
  }
}
