import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { getLeaderboardData } from "@/db/api";
import { ReactNode } from "react";

interface BoardDto {
  Player: string;
  NickName: string;
  XP: number;
  Level: number;
  "Next XP": number;
  Rank: string;
  "Next Rank": string;
}

export async function LeaderboardTable({
  page,
  search,
}: {
  page: number;
  search: string;
}) {
  const currentPage = Math.max(1, page);
  const pageSize = 10;

  const data = await getLeaderboardData({
    nickname: search,
    page: currentPage - 1,
    size: pageSize,
  });

  const boardData = (data.result ?? []) as BoardDto[];
  const total = data.total;

  const totalPages = Math.ceil(total / pageSize);

  if (boardData?.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-lg text-muted-foreground">
          No players found matching "{search}"
        </p>
        <Link href="/leaderboard" className="mt-4 inline-block">
          <Button variant="outline">Clear search</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto">
        <Table className="border border-gray-800">
          <TableHeader className="bg-opacity-20 bg-gray-900">
            <TableRow>
              <TableHead className="w-[200px] text-left">Player</TableHead>
              <TableHead className="text-right">XP</TableHead>
              <TableHead className="text-right">Level</TableHead>
              <TableHead className="text-right">Rank</TableHead>
              <TableHead className="text-right">Next Rank</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {boardData.map((player, index) => (
              <TableRow
                key={player.Player}
                className="border-t border-gray-800 hover:bg-gray-900/50"
              >
                <TableCell className="font-medium">
                  <Link
                    href={`/players/${player.Player}`}
                    className="flex items-center hover:text-blue-400"
                  >
                    {player.NickName || player.Player}
                  </Link>
                </TableCell>
                <TableCell className="text-right font-semibold">
                  {player.XP.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">{player.Level}</TableCell>
                <TableCell className="text-right">{player.Rank}</TableCell>
                <TableCell className="text-right">
                  {player["Next Rank"]}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-4">
          <PaginationLink
            page={currentPage - 1}
            search={search}
            disabled={currentPage === 1}
          >
            Previous
          </PaginationLink>
          <span className="text-sm mx-2">
            Page {currentPage} of {totalPages}
          </span>
          <PaginationLink
            page={currentPage + 1}
            search={search}
            disabled={currentPage === totalPages}
          >
            Next
          </PaginationLink>
        </div>
      )}
    </div>
  );
}
function PaginationLink({
  page,
  search,
  disabled,
  children,
}: {
  page: number;
  search: string;
  disabled: boolean;
  children: ReactNode;
}) {
  if (disabled) {
    return (
      <Button variant="outline" size="sm" disabled>
        {children}
      </Button>
    );
  }

  const searchParam = search ? `&search=${encodeURIComponent(search)}` : "";

  return (
    <Link href={`/leaderboard?page=${page}${searchParam}`} passHref>
      <Button variant="outline" size="sm" asChild>
        <span>{children}</span>
      </Button>
    </Link>
  );
}
