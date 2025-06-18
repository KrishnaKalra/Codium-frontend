import { WeeklyChart } from "../components/topicChart";

export default function WeeklyPerformance() {
  return (
    <div className="h-[100%] w-[100%] rounded-xl">
      <div className="w-full h-[66%]">
        <WeeklyChart />
      </div>
    </div>
  );
}