// ==================== FILE: app/admin-dashboard/contact-management/_components/ContactManagement.tsx ====================
'use client'

import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { toast } from 'sonner'
import { Contact } from '../../../../../types/contact'
import ContactTable from './contactTable'
import RespondDialog from './respondDialog'
import { useGetContacts, useDeleteContact } from '@/lib/contactApi'

interface ContactManagementProps {
  accessToken: string
}

export default function ContactManagement({
  accessToken,
}: ContactManagementProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const [isRespondOpen, setIsRespondOpen] = useState(false)
  const [viewingContact, setViewingContact] = useState<Contact | null>(null)
  const [respondingContact, setRespondingContact] = useState<Contact | null>(
    null
  )

  // Fetch contacts
  const {
    data: contactsData,
    isLoading,
    error,
  } = useGetContacts(accessToken, currentPage, 8)

  // Delete mutation
  const deleteMutation = useDeleteContact(accessToken, {
    onSuccess: () => toast.success('Contact deleted successfully'),
    onError: (err) => toast.error(err.message),
  })

  const handleViewContact = (contact: Contact) => {
    setViewingContact(contact)
    setIsDetailsOpen(true) // ❗ View ONLY — no status update
  }

  const handleRespondContact = (contact: Contact) => {
    setRespondingContact(contact)
    setIsRespondOpen(true)
  }

  const handleDeleteContact = (contactId: string) => {
    deleteMutation.mutate(contactId)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const contacts = contactsData?.data?.items || []
  const paginationInfo = contactsData?.data?.paginationInfo || {
    currentPage: 1,
    totalPages: 1,
    totalData: 0,
  }

  return (
    <div className="bg-gray-50">
      <div className="w-full mx-auto">
        <Card className="py-0">
          <CardContent className="p-0">
            <ContactTable
              contacts={contacts}
              onView={handleViewContact}
              onRespond={handleRespondContact}
              onDelete={handleDeleteContact}
              isLoading={isLoading}
              error={error?.message}
              currentPage={paginationInfo.currentPage}
              totalPages={paginationInfo.totalPages}
              totalData={paginationInfo.totalData}
              hasNextPage={
                paginationInfo.currentPage < paginationInfo.totalPages
              }
              hasPrevPage={paginationInfo.currentPage > 1}
              onPageChange={handlePageChange}
            />
          </CardContent>
        </Card>

        {/* View Contact Details */}
        <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
          <DialogContent className="!max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-lg">
            <DialogHeader className="sticky top-0 bg-white border-b pb-4">
              <DialogTitle className="text-2xl font-semibold text-gray-900">
                Contact Details
              </DialogTitle>
            </DialogHeader>

            {viewingContact && (
              <div className="space-y-6 py-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {viewingContact.name}
                </h3>

                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  <span>📧 {viewingContact.email}</span>
                  <span>📞 {viewingContact.phone}</span>
                  <span>🏢 {viewingContact.companyName}</span>
                </div>

                <div>
                  <h4 className="font-semibold mb-1">Subject</h4>
                  <p className="bg-gray-50 p-3 rounded">
                    {viewingContact.subject}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-1">Message</h4>
                  <p className="bg-gray-50 p-4 rounded">
                    {viewingContact.message}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Respond / Mark as Read */}
        <RespondDialog
          contact={respondingContact}
          isOpen={isRespondOpen}
          accessToken={accessToken}
          onClose={() => {
            setIsRespondOpen(false)
            setRespondingContact(null)
          }}
          onSuccess={() => {
            setIsRespondOpen(false)
            setRespondingContact(null)
          }}
        />
      </div>
    </div>
  )
}
