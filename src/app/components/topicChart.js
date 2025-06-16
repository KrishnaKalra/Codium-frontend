"use client";
import { Tooltip } from "@mui/material";
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from "recharts";

export function WeeklyChart() {
    const data = [
  {
    "name": "Mon",
    "pv": 1,
  },
  {
    "name": "Tue",
    "pv": 3,
  },
  {
    "name": "Wed",
    "pv": 2,
  },
  {
    "name": "Thu",
    "pv": 2,
  },
  {
    "name": "Fri",
    "pv": 1,
  },
  {
    "name": "Sat",
    "pv": 2,
  },
  {
    "name": "Sun",
    "pv": 3,
  }
]

    const maxValue = Math.max(...data.map(d=>d.pv))
    const roundedValue = Math.ceil(maxValue+0.5)

  return (
    <div className="p-2 bg-white rounded-lg shadow h-full">
        <h2 className="ml-24 mt-5 text-xl font-bold text-gray-800 mb-4">
        📊 Weekly Submission Overview
      </h2>
      <BarChart width={500} height={250} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[0,roundedValue]} allowDecimals={false} dataKey="pv" label={{value:'no. of Questions',angle:'-90',position:'insideLeft', style: { textAnchor: "middle" }}}/>
        <Tooltip />
        <Bar dataKey="pv" fill="#239a3b" barSize={20} /> 
      </BarChart>
    </div>
  );
}
