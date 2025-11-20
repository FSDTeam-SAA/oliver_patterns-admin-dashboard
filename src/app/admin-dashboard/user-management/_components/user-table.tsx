'use client'

import React, { useState } from 'react'
import { Trash2, Eye, ChevronLeft, ChevronRight } from 'lucide-react'
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
import { User } from '@/lib/usersApi'
import TableSkeleton from '@/components/reusable/TableSkeleton'

interface UserTableProps {
  users: User[]
  onView: (user: User) => void
  onDelete: (userId: string) => void
  isLoading?: boolean
  currentPage: number
  totalPages: number
  totalData: number
  hasNextPage: boolean
  hasPrevPage: boolean
  onPageChange: (page: number) => void
}

export default function UserTable({
  users,
  onView,
  onDelete,
  isLoading,
  currentPage,
  totalPages,
  totalData,
  onPageChange,
}: UserTableProps) {
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleDeleteClick = (user: User) => {
    setSelectedUser(user)
    setIsDialogOpen(true)
  }

  const handleDeleteConfirm = () => {
    if (selectedUser) {
      onDelete(selectedUser._id)
      setSelectedUser(null)
      setIsDialogOpen(false)
    }
  }

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <TableSkeleton />
      </div>
    )
  }

  if (!users || users.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-lg">
        <p className="text-lg">No users found</p>
      </div>
    )
  }

  // -------- PAGINATION NUMBER BUILDER --------
  function getPageNumbers(): (number | string)[] {
    const pages: (number | string)[] = []
    const maxToShow = 5

    if (totalPages <= maxToShow) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3)
        pages.push('…')
        pages.push(totalPages)
      } else if (currentPage >= totalPages - 2) {
        pages.push(1)
        pages.push('…')
        pages.push(totalPages - 2, totalPages - 1, totalPages)
      } else {
        pages.push(1)
        pages.push('…')
        pages.push(currentPage - 1, currentPage, currentPage + 1)
        pages.push('…')
        pages.push(totalPages)
      }
    }
    return pages
  }

  return (
    <div className="bg-white rounded border">
      {/* -------- TABLE -------- */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-max">
          <thead className="bg-blue-100 border-b">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-600 uppercase">
                Name
              </th>
              <th className="px-6 py-4 text-center text-sm font-medium text-gray-600 uppercase">
                Plan Type
              </th>

              <th className="px-6 py-4 text-center text-sm font-medium text-gray-600 uppercase">
                Role
              </th>
              <th className="px-6 py-4 text-center text-sm font-medium text-gray-600 uppercase">
                Subscription
              </th>
              <th className="px-6 py-4 text-center text-sm font-medium text-gray-600 uppercase">
                Status
              </th>
              <th className="px-6 py-4 text-center text-sm font-medium text-gray-600 uppercase">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user._id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-3">
                  <p className="font-medium text-gray-900">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </td>

                <td className="px-6 py-3 text-center capitalize">
                  {user.planName}
                </td>

                <td className="px-6 py-3 text-center capitalize">
                  {user.role}
                </td>

                <td className="px-6 py-3 text-center">
                  {user.hasActiveSubscription ? 'Active' : 'None'}
                </td>

                <td className="px-6 py-3 text-center">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      user.isActive
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {user.isActive ? 'Active' : 'Inactive'}
                  </span>
                </td>

                <td className="px-6 py-3 text-center">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => onView(user)}
                      className="text-blue-600 hover:text-blue-800 p-1"
                    >
                      <Eye className="w-5 h-5" />
                    </button>

                    <button
                      onClick={() => handleDeleteClick(user)}
                      className="text-red-600 hover:text-red-800 p-1"
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

      {/* -------- DELETE DIALOG -------- */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Delete User?</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this user?
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>

            <Button variant="destructive" onClick={handleDeleteConfirm}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* -------- PAGINATION -------- */}
      <div className="bg-white px-8 py-4 flex items-center justify-between border-t">
        <div className="text-sm text-gray-600">
          Showing {(currentPage - 1) * 10 + 1} to{' '}
          {Math.min(currentPage * 10, totalData)} of {totalData} results
        </div>

        <div className="flex items-center gap-2">
          {/* Prev Button */}
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-2 py-1 rounded border flex items-center transition ${
              currentPage > 1
                ? 'text-gray-700 hover:bg-gray-100'
                : 'opacity-40 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Page Numbers */}
          {getPageNumbers().map((page, i) => (
            <button
              key={i}
              onClick={() => typeof page === 'number' && onPageChange(page)}
              disabled={page === '…'}
              className={`px-3 py-1 rounded text-sm font-medium min-w-[32px] ${
                page === currentPage
                  ? 'bg-[#0C2661] text-white'
                  : page === '…'
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
            disabled={currentPage === totalPages}
            className={`px-2 py-1 rounded border flex items-center transition ${
              currentPage < totalPages
                ? 'text-gray-700 hover:bg-gray-100'
                : 'opacity-40 cursor-not-allowed'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
