"use client";

import { leagueLevels } from "@/app/players/[id]/page";

interface LeagueLevelProps {
  level: number;
}

export function LeagueLevel({ level }: LeagueLevelProps) {
  // Find league data
  const league = leagueLevels.find((l) => l.id === level) || leagueLevels[0];

  return (
    <div className="flex flex-col items-end">
      <div className="text-sm text-gray-400">League Level</div>
      <div className={`text-xl font-bold ${league.color}`}>{league.name}</div>
      <div className="flex mt-1">
        {leagueLevels.map((l) => (
          <div
            key={l.id}
            className={`w-2 h-2 rounded-full mx-0.5 ${
              l.id <= level ? league.color : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
