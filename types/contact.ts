// ==================== FILE: types/contact.ts ====================

export type ContactStatus = 'new' | 'read' | 'unread'

export interface Contact {
  _id: string
  userId: string | null
  name: string
  email: string
  phone: string
  companyName: string
  subject: string
  message: string
  status: ContactStatus
  createdAt: string
  updatedAt: string
  __v: number
}

export interface PaginationInfo {
  currentPage: number
  totalPages: number
  totalData: number
}

export interface ContactsResponse {
  status: boolean
  message: string
  data: {
    items: Contact[]
    paginationInfo: PaginationInfo
  }
}

export interface SingleContactResponse {
  status: boolean
  message: string
  data: {
    contact: Contact
  }
}

export interface UpdateStatusPayload {
  status: ContactStatus
}

export interface DeleteContactResponse {
  status: boolean
  message: string
}
