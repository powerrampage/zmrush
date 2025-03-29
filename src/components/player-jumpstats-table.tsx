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
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

// Mock jumpstats data
const playerJumpstatsData = {
  173714: [
    { id: 1, type: "LongJump", distance: "245.781", date: "2023-08-03", server: "LONGJUMPS" },
    { id: 2, type: "HighJump", distance: "234.432", date: "2023-07-22", server: "LONGJUMPS" },
    { id: 3, type: "CountJump", distance: "2", date: "2023-06-15", server: "BEGINNER/EASY" },
    { id: 4, type: "LadderJump", distance: "178.456", date: "2023-07-31", server: "MEDIUM/HARD" },
    { id: 5, type: "WeirdJump", distance: "203.134", date: "2023-08-10", server: "LONGJUMPS" },
    { id: 6, type: "DropJump", distance: "210.789", date: "2023-06-05", server: "LONGJUMPS" },
    { id: 7, type: "LongJump", distance: "240.123", date: "2023-05-17", server: "LONGJUMPS" },
    { id: 8, type: "BhopJump", distance: "267.890", date: "2023-07-12", server: "LONGJUMPS" }
  ],
  189023: [
    { id: 1, type: "LongJump", distance: "238.456", date: "2023-08-07", server: "LONGJUMPS" },
    { id: 2, type: "HighJump", distance: "227.789", date: "2023-07-19", server: "LONGJUMPS" },
    { id: 3, type: "BhopJump", distance: "258.321", date: "2023-06-28", server: "LONGJUMPS" }
  ]
}

interface PlayerJumpstatsTableProps {
  playerId: number
}

export function PlayerJumpstatsTable({ playerId }: PlayerJumpstatsTableProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [page, setPage] = useState(1)
  const itemsPerPage = 10

  // Get player jumpstats or empty array if not found
  const playerJumpstats = playerJumpstatsData[playerId as keyof typeof playerJumpstatsData] || []

  // Filter jumpstats based on search query
  const filteredJumpstats = playerJumpstats.filter(stat =>
    stat.type.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Paginate jumpstats
  const totalPages = Math.ceil(filteredJumpstats.length / itemsPerPage)
  const startIdx = (page - 1) * itemsPerPage
  const paginatedJumpstats = filteredJumpstats.slice(startIdx, startIdx + itemsPerPage)

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setPage(1) // Reset to first page when search changes
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex gap-2 items-center">
          <Input
            type="text"
            placeholder="Search jump type..."
            className="max-w-xs"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        <div className="text-sm text-gray-400">
          Showing {filteredJumpstats.length} jumpstats
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table className="border border-gray-800">
          <TableHeader className="bg-opacity-20 bg-gray-900">
            <TableRow>
              <TableHead className="w-[200px] text-left">Jump Type</TableHead>
              <TableHead className="text-right">Distance</TableHead>
              <TableHead className="text-center">Server</TableHead>
              <TableHead className="text-right">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedJumpstats.length > 0 ? (
              paginatedJumpstats.map((stat) => (
                <TableRow key={stat.id} className="border-t border-gray-800 hover:bg-gray-900/50">
                  <TableCell className="font-medium">{stat.type}</TableCell>
                  <TableCell className="text-right font-semibold">{stat.distance}</TableCell>
                  <TableCell className="text-center">{stat.server}</TableCell>
                  <TableCell className="text-right text-gray-400">{stat.date}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-4 text-gray-500">
                  No jumpstats found with the current filter.
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
