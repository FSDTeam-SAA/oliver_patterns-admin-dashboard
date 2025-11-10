// ==================== FILE: types/contact.ts ====================
export interface Contact {
  _id: string
  fullName: string
  email: string
  phoneNumber: string
  occupation: string
  message: string
  status: 'New' | 'Respond'
  createdAt: string
  updatedAt: string
}

export interface ContactsResponse {
  data: {
    contracts: Contact[]
    pagination: {
      currentPage: number
      totalPages: number
      totalData: number
      hasNextPage: boolean
      hasPrevPage: boolean
    }
  }
}
