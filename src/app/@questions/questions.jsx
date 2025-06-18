'use client';
import InfoIcon from '@mui/icons-material/Info';
import Tooltip from '@mui/material/Tooltip';

export default function Days() {
  return (
    <div className="relative w-full h-full max-w-sm bg-white rounded-xl shadow p-4 sm:p-5 flex flex-col justify-between">
      {/* Tooltip Info Icon */}
      <div className="absolute top-3 right-3 text-gray-400 cursor-pointer">
        <Tooltip title="Total questions you solved on all platforms" arrow placement="top">
          <span>
            <InfoIcon fontSize="small" />
          </span>
        </Tooltip>
      </div>

      {/* Main Content Centered */}
      <div className="flex flex-col justify-center items-center h-full text-center">
        <div className="text-lg sm:text-xl font-semibold text-gray-600">Total Active Days</div>
        <div className="text-5xl sm:text-6xl font-extrabold text-black mt-2">500</div>
      </div>
    </div>
  );
}
