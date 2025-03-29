import "@/app/globals.css"
import { Roboto } from "next/font/google"
import { ClientBody } from "@/app/ClientBody"
import { HomeNavbar } from "@/components/navbar"
import type { Metadata } from "next"

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "zmrush",
  description: "Join zmrush for a welcoming, beginner-friendly Kreedz community with over 1500 unique maps, a competitive League system, rich statistics and enjoyable playing experience for all skill levels.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${roboto.className} bg-kreedz-bg text-white min-h-screen`}>
        <HomeNavbar />
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  )
}
