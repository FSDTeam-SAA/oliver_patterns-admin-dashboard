// ==================== FILE: types/user.ts ====================
export interface User {
  _id: string
  name: string
  email: string
  planType: 'Free' | 'Basic' | 'Premium'
  joined: string
  lastActive: string
  status: 'Active' | 'Inactive'
  createdAt: string
  updatedAt: string
}

export interface UsersResponse {
  users: User[]
  pagination: {
    currentPage: number
    totalPages: number
    totalData: number
    hasNextPage: boolean
    hasPrevPage: boolean
  }
}
