// Home page component
import Rating from "./@rating/rating";
import Questions from "./@questions/questions";
import Days from "./@days/days";
import Heatmap from "./@heatmap/heatmap";
import WeeklyPerformance from "./@weekly/weekly";

export default function Home() {
  return (
<div className="grid grid-cols-5 grid-rows-[auto_auto_1fr] gap-3 min-h-screen p-6 bg-gray-100">
      <div className="border flex items-center justify-center font-bold text-lg row-span-5 bg-gray-200">
        1
      </div>

      <div className="col-start-2 col-span-2 row-start-1">
        {/* <div className="bg-white rounded-lg shadow p-4 h-44"> */}
          <Heatmap />
        {/* </div> */}
      </div>

      <div className="col-start-4 row-start-1">
        {/* <div className="bg-white rounded-lg shadow p-4 h-44 w-48"> */}
          <Questions />
        {/* </div> */}
      </div>

      <div className="col-start-5 row-start-1">
        {/* <div className="bg-white rounded-lg shadow p-4 h-44 w-48"> */}
          <Days />
        {/* </div> */}
      </div>

      <div className="border flex items-center justify-center font-bold text-lg col-start-2 col-span-2 row-start-2 row-span-1 bg-gray-200">
        <Rating />
      </div>

      <div className="col-start-4 col-span-2 row-start-2 row-span-1">
  <WeeklyPerformance />
</div>



      <div className="border flex items-center justify-center font-bold text-lg col-start-2 col-span-2 row-start-3 row-span-3 bg-gray-200">
        7
      </div>

      <div className="border flex items-center justify-center font-bold text-lg col-start-4 col-span-2 row-start-3 row-span-3 bg-gray-200">
        8
      </div>
    </div>
  );
}
