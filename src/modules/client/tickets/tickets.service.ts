import { db } from "@/config/db"
import { TicketFilters } from "./tickets.types"

export const getTicketsService = async (userId: string, filters: TicketFilters) => {
  let query = db.from("tickets").select("*")
  // console.log("🚀 ~ getTicketsService ~ query:", query)

  // TEXT SEARCH (subject)
  if (filters.subject) {
    query = query.ilike("title", `%${filters.title}%`)
  }

  if (filters.subject) {
    query = query.ilike("subject", `%${filters.subject}%`)
  }

  // MULTI-SELECT FILTERS
  if (filters.category?.length) {
    query = query.in("category", filters.category)
  }

  if (filters.priority) {
    query = query.eq("priority", filters.priority)
  }

  if (filters.status) {
    query = query.eq("status", filters.status)
  }

  // DATE FILTER (created_at timestamp)
  if (filters.created_at) {
    query = query.gte("created_at", new Date(Number(filters.created_at)).toISOString())
  }

  const { data, error } = await query

  if (error) {
    throw error
  }

  return data
}
