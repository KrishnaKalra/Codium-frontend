'use client';
import InfoIcon from '@mui/icons-material/Info';
import Tooltip from '@mui/material/Tooltip';

export default function Questions() {
  return (
    <div className="relative w-60 h-46 bg-white rounded-lg shadow p-3">
      {/* Info Icon with smooth tooltip (no extra border or layout shift) */}
      <div className="absolute top-2 right-2 text-gray-400 cursor-pointer">
        <Tooltip title="total question you solved on all platforms" arrow placement="top">
          <span>
            <InfoIcon fontSize="small" />
          </span>
        </Tooltip>
      </div>

      {/* Main Text Content */}
      <div className="ml-10 flex flex-col justify-center h-full">
        <div className="text-xl font-bold text-gray-500">Total Questions</div>
        <div className="ml-4 text-6xl font-extrabold text-black">500</div>
      </div>
    </div>
  );
}