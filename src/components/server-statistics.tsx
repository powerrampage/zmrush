"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"

// List of known valid country codes for flags
const validCountryCodes = [
  "ee", "fi", "lt", "lv", "se", "no", "dk", "de", "pl",
  "cz", "bg", "hu", "ru", "ua", "us", "ca", "br", "fr", "es"
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

// Mock top players data for each server
const topPlayersData = {
  // BEGINNER/EASY
  beginner: [
    { id: 173714, rank: 1, name: "Vileimz", countryCode: "se", points: 2547, records: 85, mapPercentage: 96.4 },
    { id: 189023, rank: 2, name: "ipix", countryCode: "ru", points: 2341, records: 81, mapPercentage: 94.2 },
    { id: 162847, rank: 3, name: "leivapudi", countryCode: "fi", points: 2198, records: 78, mapPercentage: 92.8 },
    { id: 198234, rank: 4, name: "Pungir", countryCode: "ee", points: 2076, records: 76, mapPercentage: 91.5 },
    { id: 204581, rank: 5, name: "Killaz", countryCode: "de", points: 1985, records: 74, mapPercentage: 89.2 },
    { id: 210987, rank: 6, name: "eff", countryCode: "us", points: 1876, records: 72, mapPercentage: 87.8 },
    { id: 178342, rank: 7, name: "tdc;", countryCode: "fi", points: 1754, records: 69, mapPercentage: 85.6 },
    { id: 193456, rank: 8, name: "Saints", countryCode: "ee", points: 1623, records: 67, mapPercentage: 83.7 },
    { id: 185729, rank: 9, name: "mindset1337", countryCode: "dk", points: 1578, records: 66, mapPercentage: 82.1 },
    { id: 201538, rank: 10, name: "Dez", countryCode: "ca", points: 1502, records: 64, mapPercentage: 80.4 }
  ],
  // MEDIUM/HARD
  medium: [
    { id: 173714, rank: 1, name: "Vileimz", countryCode: "se", points: 3215, records: 92, mapPercentage: 94.8 },
    { id: 162847, rank: 2, name: "leivapudi", countryCode: "fi", points: 3087, records: 89, mapPercentage: 93.2 },
    { id: 189023, rank: 3, name: "ipix", countryCode: "ru", points: 2968, records: 86, mapPercentage: 91.7 },
    { id: 204581, rank: 4, name: "Killaz", countryCode: "de", points: 2812, records: 84, mapPercentage: 90.4 },
    { id: 198234, rank: 5, name: "Pungir", countryCode: "ee", points: 2789, records: 81, mapPercentage: 88.9 },
    { id: 178342, rank: 6, name: "tdc;", countryCode: "fi", points: 2654, records: 79, mapPercentage: 87.2 },
    { id: 210987, rank: 7, name: "eff", countryCode: "us", points: 2518, records: 76, mapPercentage: 85.7 },
    { id: 193456, rank: 8, name: "Saints", countryCode: "ee", points: 2402, records: 74, mapPercentage: 84.3 },
    { id: 201538, rank: 9, name: "Dez", countryCode: "ca", points: 2356, records: 72, mapPercentage: 83.1 },
    { id: 185729, rank: 10, name: "mindset1337", countryCode: "dk", points: 2287, records: 69, mapPercentage: 81.8 }
  ],
  // EXTREME/DEATH
  extreme: [
    { id: 173714, rank: 1, name: "Vileimz", countryCode: "se", points: 3642, records: 75, mapPercentage: 97.2 },
    { id: 189023, rank: 2, name: "ipix", countryCode: "ru", points: 3518, records: 73, mapPercentage: 95.6 },
    { id: 204581, rank: 3, name: "Killaz", countryCode: "de", points: 3421, records: 71, mapPercentage: 93.8 },
    { id: 162847, rank: 4, name: "leivapudi", countryCode: "fi", points: 3286, records: 69, mapPercentage: 92.1 },
    { id: 178342, rank: 5, name: "tdc;", countryCode: "fi", points: 3175, records: 67, mapPercentage: 90.9 },
    { id: 210987, rank: 6, name: "eff", countryCode: "us", points: 3089, records: 65, mapPercentage: 89.4 },
    { id: 198234, rank: 7, name: "Pungir", countryCode: "ee", points: 2954, records: 63, mapPercentage: 87.8 },
    { id: 201538, rank: 8, name: "Dez", countryCode: "ca", points: 2867, records: 61, mapPercentage: 86.5 },
    { id: 185729, rank: 9, name: "mindset1337", countryCode: "dk", points: 2756, records: 58, mapPercentage: 84.2 },
    { id: 193456, rank: 10, name: "Saints", countryCode: "ee", points: 2675, records: 56, mapPercentage: 82.7 }
  ],
  // LONGJUMPS
  longjumps: [
    { id: 210987, rank: 1, name: "eff", countryCode: "us", points: 2124, records: 52, mapPercentage: 98.1 },
    { id: 204581, rank: 2, name: "Killaz", countryCode: "de", points: 2068, records: 51, mapPercentage: 96.7 },
    { id: 173714, rank: 3, name: "Vileimz", countryCode: "se", points: 2005, records: 49, mapPercentage: 95.2 },
    { id: 178342, rank: 4, name: "tdc;", countryCode: "fi", points: 1947, records: 48, mapPercentage: 93.8 },
    { id: 189023, rank: 5, name: "ipix", countryCode: "ru", points: 1892, records: 47, mapPercentage: 92.3 },
    { id: 162847, rank: 6, name: "leivapudi", countryCode: "fi", points: 1834, records: 46, mapPercentage: 90.9 },
    { id: 201538, rank: 7, name: "Dez", countryCode: "ca", points: 1785, records: 45, mapPercentage: 89.4 },
    { id: 198234, rank: 8, name: "Pungir", countryCode: "ee", points: 1731, records: 44, mapPercentage: 87.8 },
    { id: 185729, rank: 9, name: "mindset1337", countryCode: "dk", points: 1698, records: 42, mapPercentage: 86.2 },
    { id: 193456, rank: 10, name: "Saints", countryCode: "ee", points: 1642, records: 41, mapPercentage: 84.7 }
  ],
  // MASTERS
  masters: [
    { id: 173714, rank: 1, name: "Vileimz", countryCode: "se", points: 3021, records: 85, mapPercentage: 95.9 },
    { id: 189023, rank: 2, name: "ipix", countryCode: "ru", points: 2967, records: 82, mapPercentage: 94.1 },
    { id: 162847, rank: 3, name: "leivapudi", countryCode: "fi", points: 2876, records: 79, mapPercentage: 92.4 },
    { id: 204581, rank: 4, name: "Killaz", countryCode: "de", points: 2743, records: 76, mapPercentage: 90.8 },
    { id: 178342, rank: 5, name: "tdc;", countryCode: "fi", points: 2689, records: 74, mapPercentage: 89.6 },
    { id: 198234, rank: 6, name: "Pungir", countryCode: "ee", points: 2568, records: 72, mapPercentage: 88.3 },
    { id: 210987, rank: 7, name: "eff", countryCode: "us", points: 2463, records: 69, mapPercentage: 87.1 },
    { id: 201538, rank: 8, name: "Dez", countryCode: "ca", points: 2375, records: 67, mapPercentage: 85.8 },
    { id: 193456, rank: 9, name: "Saints", countryCode: "ee", points: 2298, records: 65, mapPercentage: 84.5 },
    { id: 185729, rank: 10, name: "mindset1337", countryCode: "dk", points: 2217, records: 63, mapPercentage: 83.2 }
  ]
}

// Server most played maps
const serverMostPlayedMaps = {
  beginner: [
    { name: "b2j_bhopward", plays: 4892 },
    { name: "kt_ezybhop_redesign", plays: 3875 },
    { name: "cg_coldbhop_v2", plays: 3621 },
    { name: "kz_beginnerblock", plays: 3284 },
    { name: "kz_easybhopv2", plays: 3012 }
  ],
  medium: [
    { name: "bla_basementblock", plays: 4253 },
    { name: "gnk_brickbhop", plays: 3847 },
    { name: "kzfr_speed_bhopbloc_ez", plays: 3518 },
    { name: "slide_kzfr_city", plays: 3124 },
    { name: "bhop_monster_jam", plays: 2976 }
  ],
  extreme: [
    { name: "idw_carnifex", plays: 3521 },
    { name: "kz_inmate_hbm", plays: 3214 },
    { name: "kzla_insane", plays: 2987 },
    { name: "bhop_fury", plays: 2754 },
    { name: "kz_deathrun_beta", plays: 2547 }
  ],
  longjumps: [
    { name: "kz_longjumps2", plays: 5342 },
    { name: "kz_lj_academy", plays: 4821 },
    { name: "lj_training_ground", plays: 4375 },
    { name: "kz_ljblock", plays: 3978 },
    { name: "kz_longjumps_easy", plays: 3645 }
  ],
  masters: [
    { name: "kzray_rocky-bhop", plays: 2874 },
    { name: "bhop_legendary", plays: 2641 },
    { name: "kz_master_piece", plays: 2478 },
    { name: "bhop_godmode", plays: 2354 },
    { name: "kz_extremeblock", plays: 2198 }
  ]
}

interface ServerStatisticsProps {
  server: {
    id: string
    name: string
    address: string
    ipAddress: string
    totalPlayers: number
    totalRecords: number
    totalMaps: number
    totalServerTime: string
    avgTimePerMap: string
  }
}

export function ServerStatistics({ server }: ServerStatisticsProps) {
  // Get top players for this server
  const topPlayers = topPlayersData[server.id as keyof typeof topPlayersData] || []
  const mostPlayedMaps = serverMostPlayedMaps[server.id as keyof typeof serverMostPlayedMaps] || []

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Server Info */}
        <Card className="bg-gray-900/30 border-gray-800">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-kreedz-accent1">{server.name}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-400">Address</p>
                <p className="text-md font-medium">{server.address}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">IP Address</p>
                <p className="text-md font-medium">{server.ipAddress}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-400">Total Players</p>
                <p className="text-md font-medium">{server.totalPlayers.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Total Records</p>
                <p className="text-md font-medium">{server.totalRecords.toLocaleString()}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-400">Maps Available</p>
                <p className="text-md font-medium">{server.totalMaps}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Average Time Per Map</p>
                <p className="text-md font-medium">{server.avgTimePerMap}</p>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-400">Total Server Time</p>
              <p className="text-md font-medium">{server.totalServerTime}</p>
            </div>
          </CardContent>
        </Card>

        {/* Most Played Maps */}
        <Card className="bg-gray-900/30 border-gray-800">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Most Played Maps</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader className="bg-opacity-20 bg-gray-900">
                <TableRow>
                  <TableHead className="text-left">Map Name</TableHead>
                  <TableHead className="text-right">Plays</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mostPlayedMaps.map((map, index) => (
                  <TableRow key={index} className="border-t border-gray-800 hover:bg-gray-900/50">
                    <TableCell className="font-medium text-blue-400 hover:underline">
                      <a href="#">{map.name}</a>
                    </TableCell>
                    <TableCell className="text-right">{map.plays.toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Top 10 Players */}
      <Card className="bg-gray-900/30 border-gray-800">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Top 10 Players</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-opacity-20 bg-gray-900">
                <TableRow>
                  <TableHead className="w-[60px] text-center">Rank</TableHead>
                  <TableHead className="w-[200px] text-left">Player</TableHead>
                  <TableHead className="text-right">Points</TableHead>
                  <TableHead className="text-right">Records</TableHead>
                  <TableHead className="text-right">Map Completion</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topPlayers.map((player) => (
                  <TableRow key={player.id} className="border-t border-gray-800 hover:bg-gray-900/50">
                    <TableCell className="text-center">{player.rank}</TableCell>
                    <TableCell className="font-medium">
                      <div className="flex items-center hover:text-blue-400">
                        <CountryFlag countryCode={player.countryCode} />
                        {player.name}
                      </div>
                    </TableCell>
                    <TableCell className="text-right font-semibold">{player.points.toLocaleString()}</TableCell>
                    <TableCell className="text-right">{player.records}</TableCell>
                    <TableCell className="text-right">{player.mapPercentage}%</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Quick Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-900/30 p-4 rounded-md border border-gray-800">
          <p className="text-sm text-gray-400">Most Popular Map</p>
          <p className="text-md font-medium text-blue-400">{mostPlayedMaps[0]?.name || 'N/A'}</p>
        </div>
        <div className="bg-gray-900/30 p-4 rounded-md border border-gray-800">
          <p className="text-sm text-gray-400">Top Player</p>
          <p className="text-md font-medium">{topPlayers[0]?.name || 'N/A'}</p>
        </div>
        <div className="bg-gray-900/30 p-4 rounded-md border border-gray-800">
          <p className="text-sm text-gray-400">Average Records per Player</p>
          <p className="text-md font-medium">{(server.totalRecords / server.totalPlayers).toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}
