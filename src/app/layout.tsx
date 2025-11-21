import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Toaster } from 'sonner'
import TopLoader from 'nextjs-toploader'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Grant Guru Dashboard',
  description: 'Manage your Grants, users, and subscriptions all in one place.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body suppressHydrationWarning={true}>
        {/* Top Loader */}
        <TopLoader
          color="#00BFFF"
          shadow="0 0 10px #147575, 0 0 5px #147575"
          showSpinner={false}
          height={4}
          easing="ease-in"
        />
        <div suppressContentEditableWarning>
          <Providers>{children}</Providers>
        </div>
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
