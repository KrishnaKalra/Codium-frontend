import { RenderLineChart } from '@/app/components/charts';

export default function Rating() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-full max-w-4xl mx-auto">
      
      {/* Top Section: Row with Rating and Contest Info */}
      <div className="flex justify-between items-start px-4 pt-4">
        {/* Left: Rating */}
        <div className="text-sm text-gray-700 font-semibold">
          Rating: <span className="text-xl font-bold text-black">1812</span>
        </div>

        {/* Right: Contest Info */}
        <div className="text-right leading-tight">
          <div className="text-sm text-gray-500">25 May 2025</div>
          <div className="text-base font-bold text-gray-800">Weekly Contest 451</div>
          <div className="text-sm text-gray-500">
            Rank: <span className="font-bold text-black">1389</span>
          </div>
        </div>
      </div>

      {/* Bottom Section: Chart */}
      <div className="w-full h-62 mt-4 px-2 pb-4">
        <RenderLineChart />
      </div>
    </div>
  );
}
