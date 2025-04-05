import { LoadingTableSkeleton } from "./loading-table-skeleton";

export default function Loading() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Leaderboard</h1>
      <LoadingTableSkeleton />
    </div>
  );
}
