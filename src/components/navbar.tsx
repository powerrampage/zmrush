import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HomeNavbar() {
  return (
    <nav className="bg-black/40 px-4 py-3 border-b border-gray-800">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-white hover:text-gray-300 font-medium">
            HOME
          </Link>
          <Link href="/leaderboard" className="text-white hover:text-gray-300 font-medium">
            LEADERBOARD
          </Link>
          <Link href="/stats" className="text-white hover:text-gray-300 font-medium">
            STATISTICS
          </Link>
          <Link href="/vip" className="text-white hover:text-gray-300 font-medium">
            VIP STATUS
          </Link>
        </div>
        <div>
          <a
            href="https://discord.com/invite/4JqtZhHyCb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-gray-300"
          >
            <Image
              src="https://ext.same-assets.com/3864282553/718583683.png"
              alt="Discord"
              width={24}
              height={24}
            />
          </a>
        </div>
      </div>
    </nav>
  )
}
