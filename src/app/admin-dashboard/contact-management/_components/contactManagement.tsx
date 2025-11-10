// ==================== FILE: app/admin-dashboard/contact-management/_components/ContactManagement.tsx ====================
'use client'

import React, { useState } from 'react'
// import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

import { toast } from 'sonner'
import { Contact } from '../../../../../types/contact'
import { demoContactsData } from '../../../../../data/contact'
import ContactTable from './contactTable'
import RespondDialog from './respondDialog'

export default function ContactManagement() {
  const [currentPage, setCurrentPage] = useState(1)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const [isRespondOpen, setIsRespondOpen] = useState(false)
  const [viewingContact, setViewingContact] = useState<Contact | null>(null)
  const [respondingContact, setRespondingContact] = useState<Contact | null>(
    null
  )
  const [contacts, setContacts] = useState(demoContactsData.data.contracts)

  const handleViewContact = (contact: Contact) => {
    setViewingContact(contact)
    setIsDetailsOpen(true)
  }

  const handleRespondContact = (contact: Contact) => {
    setRespondingContact(contact)
    setIsRespondOpen(true)
  }

  const handleDeleteContact = (contactId: string) => {
    setContacts(contacts.filter((c) => c._id !== contactId))
    toast.success('Contact deleted successfully')
  }

  const handleRespondSuccess = (contactId: string) => {
    // Update contact status to "Respond"
    setContacts(
      contacts.map((c) =>
        c._id === contactId ? { ...c, status: 'Respond' as const } : c
      )
    )
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const pagination = demoContactsData.data.pagination

  return (
    <div className="bg-gray-50">
      <div className="w-full mx-auto">
        {/* Header */}
        {/* <div className="mb-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
            <div>
              <h1 className="text-3xl font-bold text-[#5A8DEE]">
                Contact Management
              </h1>
              <div className="flex items-center text-sm text-gray-500 mt-2">
                <span>Dashboard</span>
                <ChevronRight className="w-4 h-4 mx-2" />
                <span className="text-gray-900 font-medium">
                  Contact Management
                </span>
              </div>
            </div>
          </div>
        </div> */}

        {/* Main Content */}
        <Card className="py-0">
          <CardContent className="p-0">
            <ContactTable
              contacts={contacts}
              onView={handleViewContact}
              onRespond={handleRespondContact}
              onDelete={handleDeleteContact}
              isLoading={false}
              currentPage={currentPage}
              totalPages={pagination.totalPages}
              totalData={pagination.totalData}
              hasNextPage={pagination.hasNextPage}
              hasPrevPage={pagination.hasPrevPage}
              onPageChange={handlePageChange}
            />
          </CardContent>
        </Card>

        {/* View Details Dialog */}
        <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
          <DialogContent className="!max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-lg">
            {/* Sticky Header */}
            <DialogHeader className="sticky top-0 bg-white border-b pb-4">
              <DialogTitle className="text-2xl font-semibold text-gray-900">
                Contact Details
              </DialogTitle>
            </DialogHeader>

            {viewingContact && (
              <div className="space-y-6 py-6">
                {/* Contact Header Info */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {viewingContact.fullName}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      📧 {viewingContact.email}
                    </span>
                    <span className="flex items-center gap-1">
                      📞 {viewingContact.phoneNumber}
                    </span>
                    <span className="flex items-center gap-1">
                      💼 {viewingContact.occupation}
                    </span>
                  </div>
                  <div className="inline-block">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        viewingContact.status === 'New'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-green-100 text-green-700'
                      }`}
                    >
                      {viewingContact.status}
                    </span>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-gray-900">
                    Message
                  </h4>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-wrap bg-gray-50 p-4 rounded-lg">
                    {viewingContact.message}
                  </p>
                </div>

                {/* Additional Info */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Received At</p>
                    <p className="font-medium text-gray-900">
                      {new Date(viewingContact.createdAt).toLocaleDateString(
                        'en-US',
                        {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        }
                      )}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Last Updated</p>
                    <p className="font-medium text-gray-900">
                      {new Date(viewingContact.updatedAt).toLocaleDateString(
                        'en-US',
                        {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        }
                      )}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Respond Dialog */}
        <RespondDialog
          contact={respondingContact}
          isOpen={isRespondOpen}
          onClose={() => {
            setIsRespondOpen(false)
            setRespondingContact(null)
          }}
          onSuccess={(contactId) => {
            handleRespondSuccess(contactId)
            setIsRespondOpen(false)
            setRespondingContact(null)
          }}
        />
      </div>
    </div>
  )
}
