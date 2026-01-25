import { GetProjectsFilters } from "./projects.type"

export const getProjectsFiltersUtil = (query: Record<string, unknown>): GetProjectsFilters => {
  const filters: GetProjectsFilters = {
    page: Number(query.page || 1) as number,
    perPage: Number(query.perPage || 10) as number | undefined,
    name: query.name as string | undefined,
    status: query.status as string | undefined,
    stage: query.stage as string | undefined,
    assigned_to: query.assigned_to as string | undefined,
    created_at: query.created_at as string | undefined,
    updated_at: query.updated_at as string | undefined,
  }
  return filters
}
