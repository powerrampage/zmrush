"use client"

import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Mock player records data
const playerRecordsData = {
  173714: [
    { id: 1, map: "b2j_bhopward", type: "PRO", time: "01:37.557", points: 50, rank: 1, date: "2023-07-15" },
    { id: 2, map: "cg_coldbhop_v2", type: "PRO", time: "01:24.891", points: 48, rank: 1, date: "2023-06-22" },
    { id: 3, map: "gnk_brickbhop", type: "PRO", time: "00:35.721", points: 43, rank: 2, date: "2023-07-03" },
    { id: 4, map: "kzfr_speed_bhopbloc_ez", type: "PRO", time: "02:11.624", points: 39, rank: 3, date: "2023-05-12" },
    { id: 5, map: "vLy_brickbhop", type: "PRO", time: "00:04.787", points: 47, rank: 2, date: "2023-08-08" },
    { id: 6, map: "bhop_grblor_v2", type: "NOOB", time: "02:46.318", points: 33, rank: 5, date: "2023-04-19" },
    { id: 7, map: "kt_ezybhop_redesign", type: "PRO", time: "01:48.233", points: 41, rank: 4, date: "2023-06-30" },
    { id: 8, map: "slide_dyd_object", type: "PRO", time: "00:38.442", points: 45, rank: 2, date: "2023-07-25" },
    { id: 9, map: "slide_kzfr_city", type: "PRO", time: "00:42.156", points: 42, rank: 3, date: "2023-05-30" },
    { id: 10, map: "kzla_minuteofjump", type: "PRO", time: "01:09.721", points: 44, rank: 2, date: "2023-06-10" }
  ],
  189023: [
    { id: 1, map: "bhop_tunnels", type: "PRO", time: "01:28.522", points: 46, rank: 1, date: "2023-08-12" },
    { id: 2, map: "kzra_suhubhop", type: "PRO", time: "01:34.761", points: 44, rank: 1, date: "2023-07-28" },
    { id: 3, map: "daza_arabblock", type: "PRO", time: "01:31.035", points: 42, rank: 2, date: "2023-06-15" },
    { id: 4, map: "bhop_xmas_2013", type: "PRO", time: "01:23.630", points: 40, rank: 3, date: "2023-05-21" },
    { id: 5, map: "ins_yellowline", type: "PRO", time: "00:15.807", points: 45, rank: 1, date: "2023-08-03" }
  ]
}

interface PlayerRecordsTableProps {
  playerId: number
}

export function PlayerRecordsTable({ playerId }: PlayerRecordsTableProps) {
  const [recordFilter, setRecordFilter] = useState("ALL")
  const [searchQuery, setSearchQuery] = useState("")
  const [page, setPage] = useState(1)
  const itemsPerPage = 10

  // Get the player records or empty array if not found
  const playerRecords = playerRecordsData[playerId as keyof typeof playerRecordsData] || []

  // Filter records based on type and search query
  const filteredRecords = playerRecords.filter(record => {
    const matchesType = recordFilter === "ALL" || record.type === recordFilter
    const matchesSearch = record.map.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesType && matchesSearch
  })

  // Paginate records
  const totalPages = Math.ceil(filteredRecords.length / itemsPerPage)
  const startIdx = (page - 1) * itemsPerPage
  const paginatedRecords = filteredRecords.slice(startIdx, startIdx + itemsPerPage)

  const getTypeColor = (type: string) => {
    switch(type) {
      case "PRO": return "text-emerald-500"
      case "NOOB": return "text-yellow-500"
      case "TP": return "text-blue-500"
      default: return "text-white"
    }
  }

  const handleFilterChange = (value: string) => {
    setRecordFilter(value)
    setPage(1) // Reset to first page when filter changes
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setPage(1) // Reset to first page when search changes
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex gap-2 items-center">
          <Select value={recordFilter} onValueChange={handleFilterChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">All Records</SelectItem>
              <SelectItem value="PRO">PRO Records</SelectItem>
              <SelectItem value="NOOB">NOOB Records</SelectItem>
              <SelectItem value="TP">TP Records</SelectItem>
            </SelectContent>
          </Select>

          <Input
            type="text"
            placeholder="Search maps..."
            className="max-w-xs"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        <div className="text-sm text-gray-400">
          Showing {filteredRecords.length} records
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table className="border border-gray-800">
          <TableHeader className="bg-opacity-20 bg-gray-900">
            <TableRow>
              <TableHead className="w-[200px] text-left">Map</TableHead>
              <TableHead className="text-right">Time</TableHead>
              <TableHead className="text-center">Type</TableHead>
              <TableHead className="text-right">Points</TableHead>
              <TableHead className="text-center">Rank</TableHead>
              <TableHead className="text-right">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedRecords.length > 0 ? (
              paginatedRecords.map((record) => (
                <TableRow key={record.id} className="border-t border-gray-800 hover:bg-gray-900/50">
                  <TableCell className="font-medium text-blue-400 hover:underline">
                    <a href={`#`} target="_blank" rel="noopener noreferrer">
                      {record.map}
                    </a>
                  </TableCell>
                  <TableCell className="text-right">{record.time}</TableCell>
                  <TableCell className={`text-center ${getTypeColor(record.type)}`}>{record.type}</TableCell>
                  <TableCell className="text-right">{record.points}</TableCell>
                  <TableCell className="text-center">{record.rank}</TableCell>
                  <TableCell className="text-right text-gray-400">{record.date}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-4 text-gray-500">
                  No records found with the current filter.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage(Math.max(1, page - 1))}
            disabled={page === 1}
          >
            Previous
          </Button>
          <span className="text-sm mx-2">
            Page {page} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage(Math.min(totalPages, page + 1))}
            disabled={page === totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  )
}
