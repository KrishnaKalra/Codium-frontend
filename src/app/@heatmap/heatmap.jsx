'use client';

import { useMemo, useState } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

// Utility to calculate streaks
function calculateStreaks(values) {
  const sortedDates = values
    .filter((v) => v.count > 0)
    .map((v) => new Date(v.date))
    .sort((a, b) => a.getTime() - b.getTime());

  let currentStreak = 0;
  let maxStreak = 0;
  let streak = 0;

  for (let i = 0; i < sortedDates.length; i++) {
    if (i === 0) {
      streak = 1;
    } else {
      const diff = (sortedDates[i] - sortedDates[i - 1]) / (1000 * 3600 * 24);
      if (diff === 1) {
        streak += 1;
      } else {
        streak = 1;
      }
    }
    if (streak > maxStreak) maxStreak = streak;
  }

  // Current streak
  currentStreak = 1;
  for (let i = sortedDates.length - 1; i > 0; i--) {
    const diff = (sortedDates[i] - sortedDates[i - 1]) / (1000 * 3600 * 24);
    if (diff === 1) {
      currentStreak++;
    } else break;
  }

  return { currentStreak, maxStreak };
}

export default function SubmissionHeatmap() {
  const [selectedYear, setSelectedYear] = useState(2025);

  const values = useMemo(() => {
    const result = [];
    const start = new Date(`${selectedYear}-01-01`);
    const end = new Date(`${selectedYear}-12-31`);
    const date = new Date(start);

    while (date <= end) {
      const random = Math.floor(Math.random() * 6); // 0–5 submissions
      result.push({ date: date.toISOString().split('T')[0], count: random });
      date.setDate(date.getDate() + 1);
    }

    return result;
  }, [selectedYear]);

  const totalSubmissions = values.reduce((acc, curr) => acc + curr.count, 0);
  const { currentStreak, maxStreak } = useMemo(() => calculateStreaks(values), [values]);

  return (
    <div className="bg-white rounded-lg shadow p-4 w-full max-w-screen-lg mx-auto">
      {/* Stats and Year Selector */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-gray-700 mb-4">
        <div className="flex flex-wrap gap-4">
          <div>
            <span className="text-orange-500 font-bold">{totalSubmissions}</span> Submissions
          </div>
          <div>
            Max Streak: <span className="text-orange-500 font-bold">{maxStreak}</span> days
          </div>
          <div>
            Current Streak: <span className="text-orange-500 font-bold">{currentStreak}</span> days
          </div>
        </div>

        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
          className="border rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
        >
          {[2023, 2024, 2025].map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* Calendar Heatmap */}
      <div className="overflow-x-auto">
        <div className="min-w-[750px]">
          <CalendarHeatmap
            startDate={new Date(`${selectedYear}-01-01`)}
            endDate={new Date(`${selectedYear}-12-31`)}
            values={values}
            classForValue={(value) => {
              if (!value) return 'color-empty';
              if (value.count >= 5) return 'color-scale-4';
              if (value.count >= 3) return 'color-scale-3';
              if (value.count >= 2) return 'color-scale-2';
              return 'color-scale-1';
            }}
            showWeekdayLabels={false}
            gutterSize={3}
            tooltipDataAttrs={(value) => {
              if (!value?.date) return null;
              return {
                'data-tip': `${value.date} — ${value.count || 0} submissions`,
              };
            }}
          />
        </div>
      </div>
    </div>
  );
}
