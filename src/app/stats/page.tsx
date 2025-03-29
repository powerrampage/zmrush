import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ServerStatistics } from "@/components/server-statistics"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Statistics | zmrush",
  description: "View detailed server statistics and top player rankings across all zmrush servers.",
}

// Server data
const servers = [
  {
    id: "beginner",
    name: "BEGINNER/EASY",
    address: "cs.zmrush:27002",
    ipAddress: "185.31.242.203:27002",
    totalPlayers: 42587,
    totalRecords: 25942,
    totalMaps: 472,
    totalServerTime: "24352 hours",
    avgTimePerMap: "12.4 minutes"
  },
  {
    id: "medium",
    name: "MEDIUM/HARD",
    address: "cs.zmrush:27004",
    ipAddress: "185.31.242.203:27004",
    totalPlayers: 31892,
    totalRecords: 19753,
    totalMaps: 385,
    totalServerTime: "19876 hours",
    avgTimePerMap: "22.8 minutes"
  },
  {
    id: "extreme",
    name: "EXTREME/DEATH",
    address: "cs.zmrush:27006",
    ipAddress: "185.31.242.203:27006",
    totalPlayers: 18741,
    totalRecords: 12650,
    totalMaps: 231,
    totalServerTime: "15743 hours",
    avgTimePerMap: "38.2 minutes"
  },
  {
    id: "longjumps",
    name: "LONGJUMPS",
    address: "cs.zmrush:27009",
    ipAddress: "185.31.242.203:27009",
    totalPlayers: 22536,
    totalRecords: 16752,
    totalMaps: 158,
    totalServerTime: "12984 hours",
    avgTimePerMap: "15.7 minutes"
  },
  {
    id: "masters",
    name: "MASTERS",
    address: "cs.zmrush:27012",
    ipAddress: "185.31.242.203:27012",
    totalPlayers: 9847,
    totalRecords: 7432,
    totalMaps: 187,
    totalServerTime: "9854 hours",
    avgTimePerMap: "42.5 minutes"
  }
]

export default function StatisticsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Server Statistics</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <StatCard
          title="Total Servers"
          value="5"
          description="Active Kreedz servers for all skill levels"
        />
        <StatCard
          title="Total Maps"
          value="1433"
          description="Unique maps across all servers"
        />
        <StatCard
          title="Total Players"
          value="125,603"
          description="Registered players in our community"
        />
        <StatCard
          title="Total Records"
          value="82,529"
          description="Completed records across all servers"
        />
        <StatCard
          title="Total Server Time"
          value="82,809 hours"
          description="Collective time spent on servers"
        />
        <StatCard
          title="Average Players Online"
          value="54"
          description="Average concurrent players daily"
        />
      </div>

      <Tabs defaultValue="beginner" className="mb-12">
        <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 mb-8">
          <TabsTrigger value="beginner">BEGINNER/EASY</TabsTrigger>
          <TabsTrigger value="medium">MEDIUM/HARD</TabsTrigger>
          <TabsTrigger value="extreme">EXTREME/DEATH</TabsTrigger>
          <TabsTrigger value="longjumps">LONGJUMPS</TabsTrigger>
          <TabsTrigger value="masters">MASTERS</TabsTrigger>
        </TabsList>

        {servers.map(server => (
          <TabsContent key={server.id} value={server.id}>
            <ServerStatistics server={server} />
          </TabsContent>
        ))}
      </Tabs>

      <div className="bg-gray-900/50 p-6 rounded-md">
        <h2 className="text-xl font-semibold mb-4">About Our Statistics</h2>
        <p className="text-gray-300 mb-4">
          zmrush maintains detailed statistics for all servers and players. Our statistics system updates
          in real-time as players set new records and complete maps. Server statistics include detailed
          information about player activity, record distribution, and map completion rates.
        </p>
        <p className="text-gray-300">
          Players can view their own statistics on their profile page, including their records, ranking,
          and performance over time. Server statistics provide insights into the most popular maps and
          the most competitive servers.
        </p>
      </div>
    </div>
  )
}

function StatCard({ title, value, description }: { title: string; value: string; description: string }) {
  return (
    <Card className="bg-gray-900/30 border-gray-800">
      <CardHeader className="pb-2">
        <CardTitle className="text-md font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold text-kreedz-accent1 mb-2">{value}</p>
        <p className="text-sm text-gray-400">{description}</p>
      </CardContent>
    </Card>
  )
}
