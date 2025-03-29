"use client"

import Image from "next/image"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { useState, useEffect } from "react"

// List of known valid country codes for flags
const validCountryCodes = [
  "ee", "fi", "lt", "lv", "se", "no", "dk", "de", "pl",
  "cz", "bg", "hu", "ru", "ua", "us", "ca", "br", "fr", "es"
]

// Mock data for server records
const serverRecords = [
  {
    id: 1,
    player: "leivapudi",
    map: "b2j_bhopward",
    time: "01:33.326",
    points: 39,
    type: "PRO",
    timeAgo: "13 seconds ago",
    countryCode: "fi" // Finland flag
  },
  {
    id: 2,
    player: "albdert",
    map: "b2j_bhopward",
    time: "06:54.173",
    points: 27,
    type: "NOOB",
    timeAgo: "6 minutes ago",
    countryCode: "lt" // Lithuania flag
  },
  {
    id: 3,
    player: "FullBoost | majomjtkos:)",
    map: "cg_cbblebhop_h",
    time: "30:56.790",
    points: 12,
    type: "NOOB",
    timeAgo: "8 minutes ago",
    countryCode: "hu" // Hungary flag
  },
  {
    id: 4,
    player: "Dez",
    map: "srg_naturebhop_fixed",
    time: "02:00.751",
    points: 6,
    type: "PRO",
    timeAgo: "12 minutes ago",
    countryCode: "ca" // Canada flag
  },
  {
    id: 5,
    player: "eff",
    map: "b2j_bhopward",
    time: "01:38.588",
    points: 52,
    type: "PRO",
    timeAgo: "19 minutes ago",
    countryCode: "us" // USA flag
  },
  {
    id: 6,
    player: "tdc;",
    map: "b2j_bhopward",
    time: "01:50.958",
    points: 70,
    type: "PRO",
    timeAgo: "23 minutes ago",
    countryCode: "fi" // Finland flag
  },
  {
    id: 7,
    player: "BGprofi | Twitch",
    map: "b2j_bhopward",
    time: "01:52.490",
    points: 9,
    type: "NOOB",
    timeAgo: "27 minutes ago",
    countryCode: "bg" // Bulgaria flag
  },
  {
    id: 8,
    player: "Saints",
    map: "b2j_bhopward",
    time: "02:25.405",
    points: 91,
    type: "PRO",
    timeAgo: "31 minutes ago",
    countryCode: "ee" // Estonia flag
  },
  {
    id: 9,
    player: "Vileimz",
    map: "b2j_bhopward",
    time: "01:37.557",
    points: 50,
    type: "PRO",
    timeAgo: "32 minutes ago",
    countryCode: "se" // Sweden flag
  },
  {
    id: 10,
    player: "FullBoost | majomjtkos:)",
    map: "risk_stargate",
    time: "06:59.782",
    points: 9,
    type: "NOOB",
    timeAgo: "47 minutes ago",
    countryCode: "hu" // Hungary flag
  }
]

// Country Flag component to avoid hydration mismatches
function CountryFlag({ countryCode }: { countryCode: string }) {
  const isValidCountry = validCountryCodes.includes(countryCode.toLowerCase())
  const flagSrc = isValidCountry
    ? `https://ext.same-assets.com/3864282553/${countryCode}.png`
    : "https://ext.same-assets.com/3864282553/3098820543.png" // Default flag

  return (
    <Image
      src={flagSrc}
      alt={countryCode}
      width={16}
      height={12}
      className="inline mr-2"
    />
  )
}

export function ServerRecordsTable() {
  // Client-side rendering state
  const [isClient, setIsClient] = useState(false)

  // Set isClient to true when component mounts on client
  useEffect(() => {
    setIsClient(true)
  }, [])

  const getTypeColor = (type: string) => {
    return type === "PRO" ? "text-emerald-500" : "text-yellow-500"
  }

  // Only show table contents when on client-side to avoid hydration mismatch
  if (!isClient) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="text-gray-500">Loading server records...</div>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto">
      <Table className="border border-gray-800">
        <TableHeader className="bg-opacity-20 bg-gray-900">
          <TableRow>
            <TableHead className="w-[200px] text-left">Player</TableHead>
            <TableHead className="text-left">Map</TableHead>
            <TableHead className="text-right">Time</TableHead>
            <TableHead className="text-right">Points</TableHead>
            <TableHead className="text-center">Type</TableHead>
            <TableHead className="text-right">Achieved</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {serverRecords.map((record) => (
            <TableRow key={record.id} className="border-t border-gray-800 hover:bg-gray-900/50">
              <TableCell className="font-medium flex items-center gap-2">
                <CountryFlag countryCode={record.countryCode} />
                {record.player}
              </TableCell>
              <TableCell className="text-blue-400 hover:underline">
                <a href={`http://185.31.242.203:8888/top.php?map=${record.map}&toptype=${record.type.toLowerCase()}`}
                   target="_blank"
                   rel="noopener noreferrer">
                  {record.map}
                </a>
              </TableCell>
              <TableCell className="text-right">{record.time}</TableCell>
              <TableCell className="text-right">{record.points}</TableCell>
              <TableCell className={`text-center ${getTypeColor(record.type)}`}>{record.type}</TableCell>
              <TableCell className="text-right text-gray-400">{record.timeAgo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
