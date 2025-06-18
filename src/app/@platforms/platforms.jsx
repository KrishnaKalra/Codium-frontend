"use client";
import {
  SiLeetcode,
  SiGeeksforgeeks,
  SiCodechef,
  SiCodeforces,
  SiCodingninjas,
  SiHackerrank,
} from "react-icons/si";
import { HiCheckBadge } from "react-icons/hi2";
import { FiExternalLink } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";

export default function Platforms() {
  const platforms = [
    { name: "LeetCode", icon: SiLeetcode },
    { name: "GeeksForGeeks", icon: SiGeeksforgeeks },
    { name: "CodeChef", icon: SiCodechef },
    { name: "Codeforces", icon: SiCodeforces },
    { name: "Coding Ninjas", icon: SiCodingninjas },
    { name: "HackerRank", icon: SiHackerrank },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col h-full w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold text-gray-800 text-lg">
          Problem Solving Stats
        </h2>
        <button className="text-gray-600 rotate-180">▾</button>
      </div>

      {/* Platforms list - Scrollable */}
      <div className="space-y-3 overflow-y-auto pr-1 flex-grow">
        {platforms.map((platform, index) => {
          const IconComponent = platform.icon;
          return (
            <div
              key={index}
              className="flex justify-between items-center px-1 text-gray-700 cursor-pointer hover:bg-gray-200 rounded-md py-1"
              onClick={() => {}}
            >
              <div className="flex items-center gap-2">
                <IconComponent className="text-2xl" />
                <span className="font-medium">{platform.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <HiCheckBadge className="text-green-500 text-xl" />
                <FiExternalLink className="text-gray-500 text-lg cursor-pointer" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Add platform button */}
      <div className="pt-3">
        <button className="w-full border border-orange-400 text-orange-500 font-medium rounded-md py-1 flex justify-center items-center gap-1 hover:bg-orange-50 transition">
          <IoMdAdd className="text-xl" /> Add Platform
        </button>
      </div>
    </div>
  );
}
