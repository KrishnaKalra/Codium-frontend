import Rating from "./@rating/rating";
import Questions from "./@questions/questions";
import Days from "./@days/days";
import Heatmap from "./@heatmap/heatmap";
import WeeklyPerformance from "./@weekly/weekly";
import Profile from "./@profile/profile";
import Platforms from "./@platforms/platforms";

export default function Home() {
  return (
    <div className="min-h-screen p-1 bg-gray-100">
      {/* Main Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-4">
        {/* Left Side (4/5 columns) */}
        <div className="col-span-1 xl:col-span-4 flex flex-col gap-4 w-full">
          {/* Top Row: Heatmap + Questions + Days */}
          <div className="flex gap-4">
            <div className="w-[60%] rounded-lg p-2">
              <Heatmap />
            </div>
            <div className="w-[20%] rounded-lg p-2">
              <Questions />
            </div>
            <div className="w-[20%] rounded-lg p-2">
              <Days />
            </div>
          </div>

          <div className="flex gap-2">
  <div className="w-[60%] rounded-lg p-2">
    <Rating />
  </div>
  <div className="w-[40%] flex flex-col gap-2">
    <div className="rounded-lg p-2 h-[30%] flex justify-center items-center text-gray-700 font-semibold text-sm text-center">
      <Platforms />
    </div>
    <div className="w-full h-full rounded-lg p-2 flex-grow flex justify-center items-center font-semibold text-sm text-center overflow-hidden">
      <WeeklyPerformance />
    </div>
  </div>
</div>

          {/* Bottom Row: 7 and 8 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="rounded-lg p-2 flex justify-center items-center text-lg font-semibold text-gray-600">
              7
            </div>
            <div className="rounded-lg p-2 flex justify-center items-center text-lg font-semibold text-gray-600">
              8
            </div>
          </div>
        </div>

        {/* Profile on Right */}
        <div className="col-span-1 rounded-lg p-2 ">
          <Profile />
        </div>
      </div>
    </div>
  );
}
