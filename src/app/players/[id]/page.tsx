import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LeagueLevel } from "@/components/league-level";

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

// League levels with corresponding colors
export const leagueLevels = [
  { id: 1, name: "Beginner", color: "text-gray-400" },
  { id: 2, name: "Death", color: "text-red-500" },
  { id: 3, name: "Talent", color: "text-green-500" },
  { id: 4, name: "Extreme", color: "text-yellow-500" },
  { id: 5, name: "Diamond", color: "text-blue-400" },
  { id: 6, name: "Master", color: "text-purple-500" },
  { id: 7, name: "Grandmaster", color: "text-indigo-500" },
  { id: 8, name: "Insane", color: "text-orange-500" },
  { id: 9, name: "Greatest", color: "text-pink-500" },
  { id: 10, name: "Legend", color: "text-gold-500" },
];

// Mock player data
const players = [
  {
    id: "c024e0",
    name: "Vileimz",
    steamId: "STEAM_0:1:173714",
    steamProfile: "https://steamcommunity.com/profiles/76561198307413156",
    countryCode: "se",
    countryName: "Sweden",
    points: 15428,
    rank: 1,
    leagueLevel: 10,
    records: {
      pro: 254,
      noob: 133,
      tp: 87,
    },
    maps: 306,
    totalRecords: 474,
    lastOnline: "2023-08-21 19:42",
    playTime: "732 hours",
    joinDate: "2021-03-15",
    combat: {
      kills: 5421,
      deaths: 1247,
      infection: 342,
      infected: 125,
      headshots: 1854,
      suicides: 78,
      knifeKillings: 421,
      awpKillings: 687,
      killingFromAwp: 354,
      killingFromGrenade: 245,
      bestZombie: 18,
      bestHuman: 32,
      bestPlayerMap: "kz_deathrun_v2",
      heroEscapes: 87,
    },
    lastBanned: "Never",
  },
  {
    id: "1bc923",
    name: "ipix",
    steamId: "STEAM_0:0:189023",
    steamProfile: "https://steamcommunity.com/profiles/76561198338311774",
    countryCode: "ru",
    countryName: "Russia",
    points: 13782,
    rank: 2,
    leagueLevel: 9,
    records: {
      pro: 231,
      noob: 125,
      tp: 76,
    },
    maps: 289,
    totalRecords: 432,
    lastOnline: "2023-08-19 22:15",
    playTime: "671 hours",
    joinDate: "2021-05-22",
    combat: {
      kills: 4876,
      deaths: 1432,
      infection: 287,
      infected: 156,
      headshots: 1654,
      suicides: 92,
      knifeKillings: 387,
      awpKillings: 542,
      killingFromAwp: 289,
      killingFromGrenade: 203,
      bestZombie: 15,
      bestHuman: 28,
      bestPlayerMap: "kz_bhop_fusion",
      heroEscapes: 72,
    },
    lastBanned: "2022-11-30 (7 days)",
  },
];

// Generate static params for known players
export function generateStaticParams() {
  return players.map((player) => ({
    id: player.id,
  }));
}

// Page component
export default async function PlayerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // Find player by ID
  const player = players[0]

  if (!player) {
    notFound();
  }

  // Get player flag
  const isValidCountry = validCountryCodes.includes(
    player.countryCode.toLowerCase()
  );
  const flagSrc = isValidCountry
    ? `https://ext.same-assets.com/3864282553/${player.countryCode}.png`
    : "https://ext.same-assets.com/3864282553/3098820543.png";

  // Find league level
  const league = leagueLevels.find((l) => l.id === player.leagueLevel);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <Image
              src={flagSrc}
              alt={player.countryCode}
              width={24}
              height={18}
              className="mr-3"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{player.name}</h1>
            <p className="text-gray-400">Ranked #{player.rank} Globally</p>
          </div>
        </div>

        <div className="text-right">
          <LeagueLevel level={player.leagueLevel} />
        </div>
      </div>

      {/* Player details and stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Player information card */}
        <Card className="bg-gray-900/30 border-gray-800 lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-xl">Player Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2">
              <div className="text-gray-400">Country:</div>
              <div className="flex items-center">
                <Image
                  src={flagSrc}
                  alt={player.countryCode}
                  width={16}
                  height={12}
                  className="mr-2"
                />
                {player.countryName}
              </div>
            </div>

            <div className="grid grid-cols-2">
              <div className="text-gray-400">SteamID:</div>
              <div>
                {player.steamId}{" "}
                <a
                  href={player.steamProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline ml-1"
                >
                  (Profile)
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2">
              <div className="text-gray-400">Last Online:</div>
              <div>{player.lastOnline}</div>
            </div>

            <div className="grid grid-cols-2">
              <div className="text-gray-400">Play Time:</div>
              <div>{player.playTime}</div>
            </div>

            <div className="grid grid-cols-2">
              <div className="text-gray-400">Joined:</div>
              <div>{player.joinDate}</div>
            </div>

            <div className="grid grid-cols-2">
              <div className="text-gray-400">Last Banned:</div>
              <div>{player.lastBanned}</div>
            </div>
          </CardContent>
        </Card>

        {/* Stats overview card */}
        <Card className="bg-gray-900/30 border-gray-800 lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-xl">Statistics Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-800/50 p-4 rounded-md">
                <div className="text-sm text-gray-400">Total Points</div>
                <div className="text-2xl font-bold text-white">
                  {player.points.toLocaleString()}
                </div>
              </div>

              <div className="bg-gray-800/50 p-4 rounded-md">
                <div className="text-sm text-gray-400">Total Records</div>
                <div className="text-2xl font-bold text-white">
                  {player.totalRecords}
                </div>
              </div>

              <div className="bg-gray-800/50 p-4 rounded-md">
                <div className="text-sm text-gray-400">Maps Completed</div>
                <div className="text-2xl font-bold text-white">
                  {player.maps}
                </div>
              </div>

              <div className="bg-gray-800/50 p-4 rounded-md">
                <div className="text-sm text-gray-400">Global Rank</div>
                <div className="text-2xl font-bold text-white">
                  #{player.rank}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="bg-gray-800/50 p-4 rounded-md">
                <div className="text-sm text-gray-400">Pro Records</div>
                <div className="text-xl font-bold text-emerald-500">
                  {player.records.pro}
                </div>
              </div>

              <div className="bg-gray-800/50 p-4 rounded-md">
                <div className="text-sm text-gray-400">Noob Records</div>
                <div className="text-xl font-bold text-yellow-500">
                  {player.records.noob}
                </div>
              </div>

              <div className="bg-gray-800/50 p-4 rounded-md">
                <div className="text-sm text-gray-400">TP Records</div>
                <div className="text-xl font-bold text-blue-500">
                  {player.records.tp}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Statistics tabs */}
      <Tabs defaultValue="records" className="mb-8">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="records">Records</TabsTrigger>
          <TabsTrigger value="combat">Combat Statistics</TabsTrigger>
        </TabsList>

        <TabsContent value="records">
          <Card className="bg-gray-900/30 border-gray-800">
            <CardHeader>
              <CardTitle>Player Records History</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-4">
                This player has set {player.totalRecords} records across{" "}
                {player.maps} different maps. Here you would see a detailed list
                of all records set by this player, but this section requires
                loading from the server database.
              </p>
              <div className="bg-gray-800/50 p-4 rounded-md text-center">
                Log in to see the full record history
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="combat">
          {/* <PlayerStatsDetails combat={player.combat} /> */}
        </TabsContent>
      </Tabs>

      <div className="flex justify-between">
        <Link href="/leaderboard" className="text-blue-400 hover:underline">
          &larr; Back to Leaderboard
        </Link>
      </div>
    </div>
  );
}
