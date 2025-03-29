"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

// List of known valid country codes for flags
const validCountryCodes = [
  "ee",
  "fi",
  "lt",
  "lv",
  "se",
  "no",
  "dk",
  "de",
  "pl",
  "cz",
  "bg",
  "hu",
  "ru",
  "ua",
  "us",
  "ca",
  "br",
  "fr",
  "es",
];

// Country Flag component to avoid hydration mismatches
function CountryFlag({ countryCode }: { countryCode: string }) {
  const isValidCountry = validCountryCodes.includes(countryCode.toLowerCase());
  const flagSrc = isValidCountry
    ? `https://ext.same-assets.com/3864282553/${countryCode}.png`
    : "https://ext.same-assets.com/3864282553/3098820543.png"; // Default flag

  return (
    <Image
      src={flagSrc}
      alt={countryCode}
      width={16}
      height={12}
      className="inline mr-2"
    />
  );
}

// Mock data for overall leaderboard
const overallLeaderboardData = [
  {
    id: 173714,
    rank: 1,
    name: "Vileimz",
    countryCode: "se",
    points: 15428,
    records: 387,
    maps: 306,
    hours: 732,
  },
  {
    id: 189023,
    rank: 2,
    name: "ipix",
    countryCode: "ru",
    points: 13782,
    records: 356,
    maps: 289,
    hours: 671,
  },
  {
    id: 162847,
    rank: 3,
    name: "leivapudi",
    countryCode: "fi",
    points: 12983,
    records: 341,
    maps: 267,
    hours: 598,
  },
  {
    id: 198234,
    rank: 4,
    name: "Pungir",
    countryCode: "ee",
    points: 11687,
    records: 321,
    maps: 253,
    hours: 586,
  },
  {
    id: 204581,
    rank: 5,
    name: "Killaz",
    countryCode: "de",
    points: 10956,
    records: 298,
    maps: 231,
    hours: 529,
  },
  {
    id: 210987,
    rank: 6,
    name: "eff",
    countryCode: "us",
    points: 10234,
    records: 287,
    maps: 219,
    hours: 503,
  },
  {
    id: 178342,
    rank: 7,
    name: "tdc;",
    countryCode: "fi",
    points: 9876,
    records: 274,
    maps: 207,
    hours: 476,
  },
  {
    id: 193456,
    rank: 8,
    name: "Saints",
    countryCode: "ee",
    points: 9453,
    records: 261,
    maps: 193,
    hours: 452,
  },
  {
    id: 185729,
    rank: 9,
    name: "mindset1337",
    countryCode: "dk",
    points: 9102,
    records: 252,
    maps: 187,
    hours: 437,
  },
  {
    id: 201538,
    rank: 10,
    name: "Dez",
    countryCode: "ca",
    points: 8790,
    records: 241,
    maps: 178,
    hours: 419,
  },
  {
    id: 213475,
    rank: 11,
    name: "BGprofi",
    countryCode: "bg",
    points: 8432,
    records: 233,
    maps: 172,
    hours: 402,
  },
  {
    id: 196302,
    rank: 12,
    name: "albdert",
    countryCode: "lt",
    points: 8103,
    records: 226,
    maps: 165,
    hours: 386,
  },
  {
    id: 207631,
    rank: 13,
    name: "stid",
    countryCode: "pl",
    points: 7854,
    records: 219,
    maps: 159,
    hours: 372,
  },
  {
    id: 187542,
    rank: 14,
    name: "Splinter",
    countryCode: "cz",
    points: 7632,
    records: 213,
    maps: 154,
    hours: 361,
  },
  {
    id: 205918,
    rank: 15,
    name: "LoGic",
    countryCode: "no",
    points: 7421,
    records: 205,
    maps: 149,
    hours: 347,
  },
];

// Mock data for other types
const proLeaderboardData = overallLeaderboardData
  .slice()
  .sort((a, b) => b.points - a.points);
const noobLeaderboardData = overallLeaderboardData
  .slice()
  .sort((a, b) => b.records - a.records);
const tpLeaderboardData = overallLeaderboardData
  .slice()
  .sort((a, b) => a.rank - b.rank);
const jumpstatsLeaderboardData = overallLeaderboardData
  .slice()
  .sort((a, b) => b.maps - a.maps);

interface LeaderboardTableProps {
  type: "overall" | "pro" | "noob" | "tp" | "jumpstats";
}

export function LeaderboardTable({ type }: LeaderboardTableProps) {
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const getLeaderboardData = () => {
    switch (type) {
      case "overall":
        return overallLeaderboardData;
      case "pro":
        return proLeaderboardData;
      case "noob":
        return noobLeaderboardData;
      case "tp":
        return tpLeaderboardData;
      case "jumpstats":
        return jumpstatsLeaderboardData;
      default:
        return overallLeaderboardData;
    }
  };

  const data = getLeaderboardData();
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIdx = (page - 1) * itemsPerPage;
  const paginatedData = data.slice(startIdx, startIdx + itemsPerPage);

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto">
        <Table className="border border-gray-800">
          <TableHeader className="bg-opacity-20 bg-gray-900">
            <TableRow>
              <TableHead className="w-[60px] text-center">Rank</TableHead>
              <TableHead className="w-[200px] text-left">Player</TableHead>
              <TableHead className="text-right">Points</TableHead>
              <TableHead className="text-right">Records</TableHead>
              <TableHead className="text-right">Maps</TableHead>
              <TableHead className="text-right">Hours</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((player) => (
              <TableRow
                key={player.id}
                className="border-t border-gray-800 hover:bg-gray-900/50"
              >
                <TableCell className="text-center">{player.rank}</TableCell>
                <TableCell className="font-medium">
                  <Link
                    href={`/players/${player.id}`}
                    className="flex items-center hover:text-blue-400"
                  >
                    <CountryFlag countryCode={player.countryCode} />
                    {player.name}
                  </Link>
                </TableCell>
                <TableCell className="text-right font-semibold">
                  {player.points.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">{player.records}</TableCell>
                <TableCell className="text-right">{player.maps}</TableCell>
                <TableCell className="text-right">{player.hours}</TableCell>
              </TableRow>
            ))}
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
  );
}
