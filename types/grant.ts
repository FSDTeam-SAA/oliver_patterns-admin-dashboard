// ==================== FILE: types/grant.ts ====================
export interface Grant {
  _id: string
  title: string
  type: string
  funding: string
  deadline: string
  eligibility: string
  applicationProcess: string
  description: string
  status: 'open' | 'closed' | 'upcoming'
  createdAt: string
  updatedAt: string
}

export interface GrantsResponse {
  grants: Grant[]
  pagination: {
    currentPage: number
    totalPages: number
    totalData: number
    hasNextPage: boolean
    hasPrevPage: boolean
  }
}
