// ==================== FILE: app/admin-dashboard/contact-management/page.tsx ====================
import React from 'react'
import ContactManagement from './_components/contactManagement'
import { auth } from '@/auth'

export default async function Page() {
  const session = await auth()
  const accessToken = session?.user?.accessToken || ''
  return (
    <div>
      <ContactManagement accessToken={accessToken} />
    </div>
  )
}
