// ==================== FILE: app/admin-dashboard/contact-management/_components/ContactTable.tsx ====================
'use client'

import React, { useState } from 'react'
import {
  Trash2,
  Eye,
  ChevronLeft,
  ChevronRight,
  AlertCircle,
  Mail,
  MailOpen,
  MessageSquare,
} from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Contact } from '../../../../../types/contact'
import TableSkeleton from '@/components/reusable/TableSkeleton'

interface ContactTableProps {
  contacts: Contact[]
  onView: (contact: Contact) => void
  onRespond: (contact: Contact) => void
  onDelete: (contactId: string) => void
  isLoading?: boolean
  error?: string
  currentPage: number
  totalPages: number
  totalData: number
  hasNextPage: boolean
  hasPrevPage: boolean
  onPageChange: (page: number) => void
}

export default function ContactTable({
  contacts,
  onView,
  onRespond,
  onDelete,
  isLoading,
  error,
  currentPage,
  totalPages,
  totalData,
  hasNextPage,
  hasPrevPage,
  onPageChange,
}: ContactTableProps) {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleDeleteClick = (contact: Contact) => {
    setSelectedContact(contact)
    setIsDialogOpen(true)
  }

  const handleDeleteConfirm = () => {
    if (selectedContact) {
      onDelete(selectedContact._id)
      setSelectedContact(null)
      setIsDialogOpen(false)
    }
  }

  const handleDialogClose = () => {
    setIsDialogOpen(false)
    setSelectedContact(null)
  }

  if (isLoading) {
    return (
      <>
        <TableSkeleton />
      </>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12 bg-red-50 rounded-lg">
        <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
        <p className="text-lg text-red-700">Error loading contacts</p>
        <p className="text-sm text-red-600 mt-1">{error}</p>
      </div>
    )
  }

  if (!contacts || contacts.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-lg">
        <p className="text-lg">No contacts found</p>
        <p className="text-sm mt-1">New contacts will appear here</p>
      </div>
    )
  }

  function getPageNumbers(): (number | string)[] {
    const pages: (number | string)[] = []
    const maxPagesToShow = 5

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 3; i++) pages.push(i)
        pages.push('...')
        pages.push(totalPages)
      } else if (currentPage >= totalPages - 2) {
        pages.push(1)
        pages.push('...')
        for (let i = totalPages - 2; i <= totalPages; i++) pages.push(i)
      } else {
        pages.push(1)
        pages.push('...')
        pages.push(currentPage - 1)
        pages.push(currentPage)
        pages.push(currentPage + 1)
        pages.push('...')
        pages.push(totalPages)
      }
    }
    return pages
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800'
      case 'unread':
        return 'bg-green-100 text-green-800'
      case 'read':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="bg-white rounded-lg border ">
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-center">
          <thead className="bg-blue-100 border-b">
            <tr className="text-center">
              <th className="px-6 py-4 text-base font-medium text-gray-500 uppercase tracking-wider text-center">
                Name
              </th>
              <th className="px-6 py-4 text-center text-base font-medium text-gray-500 uppercase tracking-wider">
                Subject
              </th>
              <th className="px-6 py-4 text-center text-base font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-4 text-center text-base font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-4 text-center text-base font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-center text-base font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y text-sm divide-gray-200">
            {contacts.map((contact) => (
              <tr
                key={contact._id}
                className="hover:bg-gray-50 transition-colors"
              >
                {/* Name */}
                <td className="px-6 py-4">
                  <div className="max-w-xs">
                    <span className="font-medium text-gray-900">
                      {contact.name}
                    </span>
                    <p className="text-base text-gray-500 mt-1">
                      {contact.companyName}
                    </p>
                  </div>
                </td>

                {/* Subject */}
                <td className="px-6 py-4">
                  <div className="max-w-md">
                    <span className="text-base text-gray-600 line-clamp-2">
                      {contact.subject || '-'}
                    </span>
                  </div>
                </td>

                {/* Email */}
                <td className="px-6 py-4 text-base text-gray-600 whitespace-nowrap">
                  {contact.email}
                </td>

                {/* Date */}
                <td className="px-6 py-4 text-base text-gray-500 whitespace-nowrap">
                  {contact.createdAt
                    ? new Date(contact.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })
                    : '-'}
                </td>

                {/* Status */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadge(
                      contact.status
                    )}`}
                  >
                    {contact.status === 'read' ? <MailOpen /> : <Mail />}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex gap-2 justify-center">
                    <button
                      onClick={() => onView(contact)}
                      className="text-blue-600 hover:text-blue-800 transition-colors p-1 rounded cursor-pointer"
                      title="View"
                    >
                      <Eye className="w-5 h-5" />
                    </button>

                    <button
                      onClick={() => onRespond(contact)}
                      className="text-green-600 hover:text-green-800 transition-colors p-1 rounded cursor-pointer"
                      title="Respond"
                    >
                      <MessageSquare className="w-5 h-5" />
                    </button>

                    <button
                      onClick={() => handleDeleteClick(contact)}
                      className="text-red-600 hover:text-red-800 transition-colors p-1 rounded cursor-pointer"
                      title="Delete"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete the contact from &quot;
              {selectedContact?.name}&quot;? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" onClick={handleDialogClose}>
                Cancel
              </Button>
            </DialogClose>
            <Button variant="destructive" onClick={handleDeleteConfirm}>
              Confirm Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Pagination */}
      {totalPages > 0 && (
        <div className="bg-white px-6 py-4 flex items-center justify-between border-t border-gray-200">
          <div className="flex items-center gap-2 text-base text-gray-600">
            <span>
              Showing page {currentPage} of {totalPages}
            </span>
            <span className="text-gray-400">•</span>
            <span>{totalData} total contacts</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Previous Button */}
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={!hasPrevPage}
              className={`px-2 py-1 rounded border transition flex items-center ${
                hasPrevPage
                  ? 'hover:bg-gray-100 text-gray-700'
                  : 'opacity-40 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Page Numbers */}
            {getPageNumbers().map((page, index) => (
              <button
                key={index}
                onClick={() => typeof page === 'number' && onPageChange(page)}
                disabled={page === '...'}
                className={`px-3 py-1 rounded text-sm font-medium min-w-[32px] ${
                  page === currentPage
                    ? 'bg-[#0C2661] text-white'
                    : page === '...'
                    ? 'text-gray-400 cursor-default'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={!hasNextPage}
              className={`px-2 py-1 rounded border transition flex items-center ${
                hasNextPage
                  ? 'hover:bg-gray-100 text-gray-700'
                  : 'opacity-40 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
