"use client";

import { useState, useRef, useEffect } from "react";
import {
  AreaChart,
  CartesianGrid,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "1", uv: 1478 },
  { name: "2", uv: 1464 },
  { name: "3", uv: 1435 },
  { name: "4", uv: 1460 },
  { name: "5", uv: 1498 },
  { name: "6", uv: 1507 },
  { name: "7", uv: 1507 },
  { name: "8", uv: 1501 },
  { name: "9", uv: 1544 },
  { name: "10", uv: 1547 },
  { name: "11", uv: 1558 },
  { name: "12", uv: 1588 },
  { name: "13", uv: 1561 },
  { name: "14", uv: 1589 },
  { name: "15", uv: 1603 },
  { name: "16", uv: 1647 },
  { name: "17", uv: 1681 },
  { name: "18", uv: 1700 },
  { name: "19", uv: 1708 },
  { name: "20", uv: 1710 },
  { name: "21", uv: 1745 },
  { name: "22", uv: 1760 },
  { name: "23", uv: 1770 },
  { name: "24", uv: 1812 },
  { name: "25", uv: 1815 },
];

export function RenderLineChart() {

  const [zoom, setZoom] = useState(0);
  const zoomContainerRef = useRef(null);
  const lastWheelTime = useRef(0);

  const getZoomedData = () => {
    const step = Math.max(1, Math.floor(zoom / 2) + 1)
    return data?.filter((_, index) => index % step === 0);
  };

  useEffect(() => {
    const container = zoomContainerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastWheelTime.current < 400) return; 
      lastWheelTime.current = now;
      if (e.deltaY < 0) {
        if (zoom < 20) setZoom((prev) => prev + 1);
      } else {
        if (zoom > 0) setZoom((prev) => prev - 1);
      }
    };

    container?.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container?.removeEventListener("wheel", handleWheel);
    };
  }, [zoom]);

  const visibleData = getZoomedData();

  return (
    <div className="w-full h-full overflow-hidden" ref={zoomContainerRef}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={visibleData}
          margin={{ top: 10, right: 20, left: 40, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f97316" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#f97316" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            horizontal={false}
          />
          <XAxis dataKey="name" />
          <YAxis
            domain={[1400, 1900]}
            width={10}
            ticks={[1400, 1500,1600, 1700, 1800, 1900]}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#f97316"
            fill="#fde68a"
            strokeWidth={2}
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
