import { RenderLineChart } from '@/app/components/charts';

export default function Rating() {
  return (
    <div className="w-full bg-white rounded-xl shadow p-4 sm:p-6 flex flex-col gap-4">
      {/* Top Section: Rating and Contest Info */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        {/* Left: Rating */}
        <div className="text-sm sm:text-base text-gray-700 font-semibold">
          Rating: <span className="text-xl sm:text-2xl font-bold text-black">1812</span>
        </div>

        {/* Right: Contest Info */}
        <div className="text-left sm:text-right leading-tight">
          <div className="text-sm text-gray-500">25 May 2025</div>
          <div className="text-base font-bold text-gray-800">Weekly Contest 451</div>
          <div className="text-sm text-gray-500">
            Rank: <span className="font-bold text-black">1389</span>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="w-full h-[260px] sm:h-[300px] md:h-[350px]">
        <RenderLineChart />
      </div>
    </div>
  );
}
