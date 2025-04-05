import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

export function LoadingTableSkeleton() {
  return (
    <div className="space-y-4">
      <div className="overflow-x-auto">
        <Table className="border border-gray-800">
          <TableHeader className="bg-opacity-20 bg-gray-900">
            <TableRow>
              <TableHead className="w-[60px] text-center">Rank</TableHead>
              <TableHead className="w-[200px] text-left">Player</TableHead>
              <TableHead className="text-right">XP</TableHead>
              <TableHead className="text-right">Next XP</TableHead>
              <TableHead className="text-right">Level</TableHead>
              <TableHead className="text-right">Next Rank</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map((_, i) => (
              <TableRow key={i} className="border-t border-gray-800">
                <TableCell className="text-center">
                  <Skeleton className="h-4 w-8 mx-auto" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-32" />
                </TableCell>
                <TableCell className="text-right">
                  <Skeleton className="h-4 w-16 ml-auto" />
                </TableCell>
                <TableCell className="text-right">
                  <Skeleton className="h-4 w-16 ml-auto" />
                </TableCell>
                <TableCell className="text-right">
                  <Skeleton className="h-4 w-8 ml-auto" />
                </TableCell>
                <TableCell className="text-right">
                  <Skeleton className="h-4 w-20 ml-auto" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-center items-center gap-2 mt-4">
        <Skeleton className="h-9 w-20" />
        <Skeleton className="h-4 w-32 mx-2" />
        <Skeleton className="h-9 w-20" />
      </div>
    </div>
  );
}
