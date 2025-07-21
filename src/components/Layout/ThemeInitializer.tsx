"use client";

import { setDarkMode } from "@/redux/slices/DarkModeSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function ThemeInitializer() {
  const dispatch = useDispatch();

  useEffect(() => {
    const stored = localStorage.getItem("darkMode");
    if (stored !== null) {
      dispatch(setDarkMode(JSON.parse(stored)));
    }
  }, []);

  return null; // tidak render apapun
}
