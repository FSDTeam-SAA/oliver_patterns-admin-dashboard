// ==================== FILE: app/admin-dashboard/contact-management/_components/RespondDialog.tsx ====================
'use client'

import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { Contact } from '../../../../../types/contact'
import { useUpdateContactStatus } from '@/lib/contactApi'

interface RespondDialogProps {
  contact: Contact | null
  isOpen: boolean
  accessToken: string
  onClose: () => void
  onSuccess: () => void
}

export default function RespondDialog({
  contact,
  isOpen,
  accessToken,
  onClose,
  onSuccess,
}: RespondDialogProps) {
  const updateStatusMutation = useUpdateContactStatus(accessToken, {
    onSuccess: () => {
      toast.success('Marked as read successfully!')
      onSuccess()
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to update status')
    },
  })

  const handleMarkAsRead = () => {
    if (!contact?._id) return

    updateStatusMutation.mutate({
      contactId: contact._id,
      status: 'read',
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Mark as Read</DialogTitle>
          <DialogDescription>
            This will update the status of this contact to <strong>read</strong>
            .
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Contact Info */}
          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="text-gray-500">Name:</span>
                <span className="ml-2 font-medium">{contact?.name}</span>
              </div>
              <div>
                <span className="text-gray-500">Email:</span>
                <span className="ml-2 font-medium">{contact?.email}</span>
              </div>
              <div>
                <span className="text-gray-500">Phone:</span>
                <span className="ml-2 font-medium">{contact?.phone}</span>
              </div>
              <div>
                <span className="text-gray-500">Company:</span>
                <span className="ml-2 font-medium">{contact?.companyName}</span>
              </div>
            </div>

            <div className="pt-2 border-t">
              <span className="text-gray-500 text-sm">Subject:</span>
              <p className="text-sm mt-1 font-medium text-gray-700">
                {contact?.subject}
              </p>
            </div>

            <div className="pt-2 border-t">
              <span className="text-gray-500 text-sm">Message:</span>
              <p className="text-sm mt-1 text-gray-700">{contact?.message}</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-sm text-blue-800">
              Clicking <strong>Mark as Read</strong> will only update the
              status. No email will be sent automatically.
            </p>
          </div>
        </div>

        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            disabled={updateStatusMutation.isPending}
          >
            Cancel
          </Button>

          <Button
            className="bg-[#0C2661]"
            onClick={handleMarkAsRead}
            disabled={updateStatusMutation.isPending}
          >
            {updateStatusMutation.isPending ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Updating...
              </>
            ) : (
              'Mark as Read'
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
