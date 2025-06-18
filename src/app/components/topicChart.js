"use client";
import { Tooltip } from "@mui/material";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

export function WeeklyChart() {
  const data = [
    { name: "Mon", pv: 1 },
    { name: "Tue", pv: 3 },
    { name: "Wed", pv: 2 },
    { name: "Thu", pv: 2 },
    { name: "Fri", pv: 1 },
    { name: "Sat", pv: 2 },
    { name: "Sun", pv: 3 },
  ];

  const maxValue = Math.max(...data.map((d) => d.pv));
  const roundedValue = Math.ceil(maxValue + 0.5);

  return (
    <div className="bg-white rounded-xl shadow h-[100%] w-full flex flex-col">
  <h2 className="text-center text-lg sm:text-xl font-bold text-gray-800 mt-4">
    📊 Weekly Submission Overview
  </h2>

  <div className="flex-1 flex items-center justify-center mr-4">
    <div className="w-full h-[80%]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 20, left: 10, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis
            domain={[0, roundedValue]}
            allowDecimals={false}
            label={{
              value: "No. of Questions",
              angle: -90,
              position: "insideMiddle",
              style: { textAnchor: "middle" },
            }}
          />
          <Tooltip />
          <Bar dataKey="pv" fill="#239a3b" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
</div>
  );
}
