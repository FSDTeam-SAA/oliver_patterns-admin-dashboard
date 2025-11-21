import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import DashboardPage from './_components/dashboardPage'

export default async function page() {
  const session = await auth()

  if (!session?.user || session?.user?.role.toLowerCase() !== 'admin') {
    redirect('/signin')
  }

  return (
    <div className="space-y-4">
      <DashboardPage />
    </div>
  )
}
