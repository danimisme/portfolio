"use client";

import { toggleDarkMode } from "@/redux/slices/DarkModeSlice";
import { RootState } from "@/redux/store";
import { Moon, Sun } from "lucide-react"; // atau ganti emoji
import { useDispatch, useSelector } from "react-redux";

export default function ThemeToggle() {
const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);
const dispatch = useDispatch();

  return (
    <div className="pt-2 md:pt-[2px] me-2">
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={!darkMode}
        onChange={() => dispatch(toggleDarkMode())}
      />
      <div className="w-12 h-6 bg-yellow-300 dark:bg-blue-800 rounded-full transition-colors peer-checked:bg-blue-300" />
      <div
        className="
          absolute top-[2px] left-[2px] 
          w-5 h-5 bg-white rounded-full 
          transition-transform duration-300 ease-in-out 
          flex items-center justify-center
          peer-checked:translate-x-[24px]
        "
      >
        {darkMode ? (
          <Moon className="w-3 h-3 text-gray-700" />
        ) : (
          <Sun className="w-3 h-3 text-gray-500" />
        )}
      </div>
    </label>
    </div>
  );
}
