import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface ServerCardProps {
  title: string
  playersOnline: number
  maxPlayers: number
  serverAddress: string
  ipAddress: string
  mapName: string
  imageUrl: string
}

export function ServerCard({
  title,
  playersOnline,
  maxPlayers,
  serverAddress,
  ipAddress,
  mapName,
  imageUrl
}: ServerCardProps) {
  return (
    <Card className="bg-opacity-20 bg-gray-900 border border-gray-800 overflow-hidden">
      <div className="text-center py-2 font-semibold bg-gradient-to-r from-kreedz-accent3 to-kreedz-dark">
        {title}
      </div>
      <div className="text-center py-1 text-sm text-gray-300 bg-opacity-50 bg-black">
        Players online: <strong className="text-white">{playersOnline}</strong>/{maxPlayers}
      </div>
      <Link href={`steam://connect/${ipAddress}`} className="p-0 block h-32 relative">
        <Image
          src={imageUrl}
          alt={mapName}
          fill
          className="object-cover"
        />
      </Link>
      <div className="text-center py-1 text-sm bg-opacity-30 bg-black">
        {mapName}
      </div>
    </Card>
  )
}
