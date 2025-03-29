"use client"

interface PlayerStatsChartProps {
  playerId: number
}

export function PlayerStatsChart({ playerId }: PlayerStatsChartProps) {
  return (
    <div className="p-4">
      <div className="text-center mb-8">
        <h3 className="text-lg font-semibold mb-2">Player Activity</h3>
        <p className="text-gray-400 text-sm">
          Charts showing player activity and record distribution would be displayed here.
          For a full implementation, we would integrate a charting library like Recharts or Chart.js.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800/50 rounded-md p-6 flex flex-col items-center">
          <h4 className="text-md font-medium mb-4">Record Distribution</h4>
          <div className="h-40 w-full flex items-center justify-center">
            <div className="flex h-32 items-end space-x-2">
              <div className="bg-emerald-500/70 w-12 h-[65%] rounded-t-md flex items-end justify-center">
                <span className="text-xs font-medium mb-1">PRO</span>
              </div>
              <div className="bg-yellow-500/70 w-12 h-[25%] rounded-t-md flex items-end justify-center">
                <span className="text-xs font-medium mb-1">NOOB</span>
              </div>
              <div className="bg-blue-500/70 w-12 h-[10%] rounded-t-md flex items-end justify-center">
                <span className="text-xs font-medium mb-1">TP</span>
              </div>
            </div>
          </div>
          <div className="text-xs text-gray-400 mt-2">Record types by percentage</div>
        </div>

        <div className="bg-gray-800/50 rounded-md p-6 flex flex-col items-center">
          <h4 className="text-md font-medium mb-4">Monthly Activity</h4>
          <div className="h-40 w-full flex items-center justify-center">
            <div className="flex h-32 items-end space-x-1">
              {Array.from({ length: 12 }).map((_, i) => {
                const height = Math.floor(Math.random() * 80) + 20
                return (
                  <div
                    key={i}
                    className="bg-indigo-500/70 w-6 rounded-t-md flex items-end justify-center"
                    style={{ height: `${height}%` }}
                  >
                    <span className="text-[10px] font-medium mb-1">{i+1}</span>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="text-xs text-gray-400 mt-2">Number of records per month</div>
        </div>
      </div>

      <div className="mt-8 p-4 border border-gray-700 rounded-md">
        <h4 className="text-md font-medium mb-4">Most Played Maps</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-800/30 p-3 rounded-md">
            <div className="font-medium text-sm">b2j_bhopward</div>
            <div className="text-xs text-gray-400">45 hours</div>
          </div>
          <div className="bg-gray-800/30 p-3 rounded-md">
            <div className="font-medium text-sm">cg_coldbhop_v2</div>
            <div className="text-xs text-gray-400">32 hours</div>
          </div>
          <div className="bg-gray-800/30 p-3 rounded-md">
            <div className="font-medium text-sm">gnk_brickbhop</div>
            <div className="text-xs text-gray-400">27 hours</div>
          </div>
          <div className="bg-gray-800/30 p-3 rounded-md">
            <div className="font-medium text-sm">vLy_brickbhop</div>
            <div className="text-xs text-gray-400">21 hours</div>
          </div>
          <div className="bg-gray-800/30 p-3 rounded-md">
            <div className="font-medium text-sm">kzfr_speed_bhopbloc_ez</div>
            <div className="text-xs text-gray-400">18 hours</div>
          </div>
          <div className="bg-gray-800/30 p-3 rounded-md">
            <div className="font-medium text-sm">bhop_grblor_v2</div>
            <div className="text-xs text-gray-400">15 hours</div>
          </div>
        </div>
      </div>
    </div>
  )
}
