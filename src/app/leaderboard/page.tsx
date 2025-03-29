import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LeaderboardTable } from "@/components/leaderboard-table"

export const metadata = {
  title: "Global Leaderboard | zmrush",
  description: "Browse the global leaderboard rankings of Kreedz players, showing top players sorted by points, records, and more.",
}

export default function LeaderboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Global Leaderboard</h1>

      <Tabs defaultValue="overall" className="mb-8">
        <TabsList className="grid w-full grid-cols-5 mb-8">
          <TabsTrigger value="overall">Overall</TabsTrigger>
          <TabsTrigger value="pro">Pro Records</TabsTrigger>
          <TabsTrigger value="noob">Noob Records</TabsTrigger>
          <TabsTrigger value="tp">TP Records</TabsTrigger>
          <TabsTrigger value="jumpstats">Jumpstats</TabsTrigger>
        </TabsList>

        <TabsContent value="overall">
          <LeaderboardTable type="overall" />
        </TabsContent>

        <TabsContent value="pro">
          <LeaderboardTable type="pro" />
        </TabsContent>

        <TabsContent value="noob">
          <LeaderboardTable type="noob" />
        </TabsContent>

        <TabsContent value="tp">
          <LeaderboardTable type="tp" />
        </TabsContent>

        <TabsContent value="jumpstats">
          <LeaderboardTable type="jumpstats" />
        </TabsContent>
      </Tabs>

      <div className="bg-gray-900/50 p-6 rounded-md">
        <h2 className="text-xl font-semibold mb-4">Leaderboard Information</h2>
        <p className="text-gray-300 mb-4">
          The Global Leaderboard shows the top Kreedz players ranked by their total points accumulated from
          various records across all servers. Players earn points for each record they set, with points varying
          based on difficulty and competition.
        </p>
        <p className="text-gray-300">
          Click on a player's name to view their detailed statistics, including all of their records,
          achievements, and performance over time.
        </p>
      </div>
    </div>
  )
}
