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
import UserTable from './user-table'
import { useDeleteUser, useGetUsers, User } from '@/lib/usersApi'
import { useSession } from 'next-auth/react'

export default function UserManagement() {
  const [currentPage, setCurrentPage] = useState(1)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const [viewingUser, setViewingUser] = useState<User | null>(null)

  const accessToken = useSession()?.data?.user?.accessToken || ''

  const { data: usersData, isLoading } = useGetUsers(
    accessToken,
    currentPage,
    10
  )

  const deleteUserMutation = useDeleteUser(accessToken)

  const handleViewUser = (user: User) => {
    setViewingUser(user)
    setIsDetailsOpen(true)
  }

  const handleDeleteUser = async (userId: string) => {
    try {
      await deleteUserMutation.mutateAsync(userId)
      toast.success('User deleted successfully')
    } catch (error) {
      console.log(error)
      toast.error('Failed to delete user')
    }
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const users = usersData?.data?.users || []
  const pagination = usersData?.data?.paginationInfo || {
    currentPage: 1,
    totalPages: 1,
    totalData: 0,
    hasNextPage: false,
    hasPrevPage: false,
  }

  console.log('pagination info', pagination)

  return (
    <div className="bg-gray-50">
      <div className="w-full mx-auto">
        <Card className="py-0">
          <CardContent className="p-0">
            <UserTable
              users={users}
              onView={handleViewUser}
              onDelete={handleDeleteUser}
              isLoading={isLoading}
              currentPage={pagination.currentPage}
              totalPages={pagination.totalPages}
              totalData={pagination.totalData}
              hasNextPage={pagination.hasNextPage}
              hasPrevPage={pagination.hasPrevPage}
              onPageChange={handlePageChange}
            />
          </CardContent>
        </Card>

        {/* View User Details */}
        <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold">
                User Details
              </DialogTitle>
            </DialogHeader>

            {viewingUser && (
              <div className="space-y-4 py-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Name</p>
                  <p className="font-medium text-gray-900">
                    {viewingUser.name}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <p className="font-medium text-gray-900">
                    {viewingUser.email}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-1">Role</p>
                  <p className="font-medium text-gray-900 capitalize">
                    {viewingUser.role}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-1">Account Active</p>
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      viewingUser.isActive
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {viewingUser.isActive ? 'Active' : 'Inactive'}
                  </span>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-1">Subscription</p>
                  <p className="font-medium">
                    {viewingUser.hasActiveSubscription
                      ? 'Active'
                      : 'No Subscription'}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
