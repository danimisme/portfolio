"use client";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { setLoading } from "@/redux/slices/LoadingSlice";

const LoadingScreen = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);
  const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [currentText, setCurrentText] = useState("Initializing...");

  const loadingTexts = [
    "Initializing...",
    "Loading Components...",
    "Setting up Portfolio...",
    "Almost Ready...",
    "Welcome!"
  ];

  useEffect(() => {
    if (isLoading) {
      // Simulasi progress loading dengan text yang berubah
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + Math.random() * 8 + 2;
          
          // Update loading text berdasarkan progress
          if (newProgress < 20) {
            setCurrentText(loadingTexts[0]);
          } else if (newProgress < 40) {
            setCurrentText(loadingTexts[1]);
          } else if (newProgress < 60) {
            setCurrentText(loadingTexts[2]);
          } else if (newProgress < 90) {
            setCurrentText(loadingTexts[3]);
          } else {
            setCurrentText(loadingTexts[4]);
          }

          if (newProgress >= 100) {
            clearInterval(progressInterval);
            // Delay sebelum menghilangkan loading screen
            setTimeout(() => {
              dispatch(setLoading(false));
              setTimeout(() => setIsVisible(false), 800); // Delay untuk animasi fade out
            }, 1000);
            return 100;
          }
          return newProgress;
        });
      }, 120);

      return () => clearInterval(progressInterval);
    }
  }, [isLoading, dispatch]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-800 ${
        darkMode 
          ? "bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" 
          : "bg-gradient-to-br from-blue-50 via-white to-blue-100"
      } ${
        isLoading ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
    >
      <div className="text-center loading-fadeInUp">
        {/* Main Loading Animation */}
        <div className="mb-8 flex justify-center">
          <div className="relative loading-float">
            {/* Outer Ring */}
            <div className={`h-24 w-24 rounded-full border-4 animate-spin ${
              darkMode 
                ? "border-white/20 border-t-white border-r-blue-200" 
                : "border-blue-200/40 border-t-blue-600 border-r-blue-400"
            }`}></div>
            {/* Inner Ring */}
            <div className={`absolute inset-2 h-20 w-20 rounded-full border-2 animate-spin ${
              darkMode 
                ? "border-blue-300/30 border-b-blue-400" 
                : "border-blue-400/40 border-b-blue-600"
            }`} style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
            {/* Center Circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`h-14 w-14 rounded-full loading-glow flex items-center justify-center ${
                darkMode 
                  ? "bg-white" 
                  : "bg-blue-600"
              }`}>
                <span className={`text-2xl font-bold ${
                  darkMode 
                    ? "text-blue-600" 
                    : "text-white"
                }`}>D</span>
              </div>
            </div>
          </div>
        </div>

        {/* Nama Portfolio dengan Animation */}
        <div className="mb-6 px-4">
          <h1 className={`text-3xl md:text-5xl font-bold mb-3 font-poppins drop-shadow-lg ${
            darkMode 
              ? "text-white" 
              : "text-slate-800"
          }`}>
            Muhammad Subhan
          </h1>
          <p className={`text-lg md:text-xl font-medium animate-pulse ${
            darkMode 
              ? "text-blue-100" 
              : "text-blue-600"
          }`}>
            {currentText}
          </p>
        </div>

        {/* Enhanced Progress Bar */}
        <div className="w-80 md:w-96 mx-auto mb-6 px-4">
          <div className={`w-full rounded-full h-3 overflow-hidden backdrop-blur-sm ${
            darkMode 
              ? "bg-white/20" 
              : "bg-blue-200/40"
          }`}>
            <div
              className={`h-full rounded-full transition-all duration-500 ease-out progress-bar-glow relative ${
                darkMode 
                  ? "bg-gradient-to-r from-white via-blue-200 to-white" 
                  : "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500"
              }`}
              style={{ width: `${progress}%` }}
            >
              <div className={`absolute inset-0 rounded-full animate-pulse ${
                darkMode 
                  ? "bg-gradient-to-r from-transparent via-white/50 to-transparent" 
                  : "bg-gradient-to-r from-transparent via-blue-300/50 to-transparent"
              }`}></div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-3">
            <p className={`text-sm font-medium ${
              darkMode 
                ? "text-blue-100" 
                : "text-blue-600"
            }`}>
              Loading Portfolio...
            </p>
            <p className={`text-sm font-bold ${
              darkMode 
                ? "text-white" 
                : "text-slate-800"
            }`}>
              {Math.round(progress)}%
            </p>
          </div>
        </div>

        {/* Enhanced Floating Dots */}
        <div className="flex justify-center space-x-3 mb-8 md:mb-10">
          <div className={`w-3 h-3 rounded-full animate-bounce loading-glow ${
            darkMode 
              ? "bg-white" 
              : "bg-blue-500"
          }`} style={{ animationDelay: "0ms" }}></div>
          <div className={`w-3 h-3 rounded-full animate-bounce loading-glow ${
            darkMode 
              ? "bg-blue-200" 
              : "bg-blue-400"
          }`} style={{ animationDelay: "150ms" }}></div>
          <div className={`w-3 h-3 rounded-full animate-bounce loading-glow ${
            darkMode 
              ? "bg-white" 
              : "bg-blue-500"
          }`} style={{ animationDelay: "300ms" }}></div>
          <div className={`w-3 h-3 rounded-full animate-bounce loading-glow ${
            darkMode 
              ? "bg-blue-200" 
              : "bg-blue-400"
          }`} style={{ animationDelay: "450ms" }}></div>
        </div>

        {/* Skills Preview with Better Animation */}
        <div className="flex justify-center space-x-4 md:space-x-6 opacity-80 px-4">
          <div className="flex flex-col items-center animate-pulse loading-float" style={{ animationDelay: "0s" }}>
            <div className="w-8 h-8 md:w-10 md:h-10 bg-orange-500 rounded-xl mb-2 flex items-center justify-center text-white font-bold shadow-lg text-xs md:text-sm">R</div>
            <span className={`text-xs md:text-sm font-medium ${
              darkMode 
                ? "text-white" 
                : "text-slate-700"
            }`}>React</span>
          </div>
          <div className="flex flex-col items-center animate-pulse loading-float" style={{ animationDelay: "0.5s" }}>
            <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-xl mb-2 flex items-center justify-center text-white font-bold shadow-lg text-xs md:text-sm">TS</div>
            <span className={`text-xs md:text-sm font-medium ${
              darkMode 
                ? "text-white" 
                : "text-slate-700"
            }`}>TypeScript</span>
          </div>
          <div className="flex flex-col items-center animate-pulse loading-float" style={{ animationDelay: "1s" }}>
            <div className={`w-8 h-8 md:w-10 md:h-10 rounded-xl mb-2 flex items-center justify-center font-bold shadow-lg text-xs md:text-sm ${
              darkMode 
                ? "bg-black text-white" 
                : "bg-slate-800 text-white"
            }`}>N</div>
            <span className={`text-xs md:text-sm font-medium ${
              darkMode 
                ? "text-white" 
                : "text-slate-700"
            }`}>Next.js</span>
          </div>
          <div className="flex flex-col items-center animate-pulse loading-float" style={{ animationDelay: "1.5s" }}>
            <div className="w-8 h-8 md:w-10 md:h-10 bg-cyan-500 rounded-xl mb-2 flex items-center justify-center text-white font-bold shadow-lg text-xs md:text-sm">TW</div>
            <span className={`text-xs md:text-sm font-medium ${
              darkMode 
                ? "text-white" 
                : "text-slate-700"
            }`}>Tailwind</span>
          </div>
        </div>
      </div>

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-20 -left-20 w-60 h-60 rounded-full loading-float blur-xl ${
          darkMode 
            ? "bg-white/10" 
            : "bg-blue-400/20"
        }`} style={{ animationDelay: "0s" }}></div>
        <div className={`absolute top-1/4 -right-20 w-48 h-48 rounded-full loading-float blur-xl ${
          darkMode 
            ? "bg-blue-300/10" 
            : "bg-blue-500/15"
        }`} style={{ animationDelay: "1s" }}></div>
        <div className={`absolute -bottom-20 left-1/3 w-52 h-52 rounded-full loading-float blur-xl ${
          darkMode 
            ? "bg-white/10" 
            : "bg-blue-400/20"
        }`} style={{ animationDelay: "2s" }}></div>
        <div className={`absolute top-1/2 left-10 w-32 h-32 rounded-full loading-float blur-xl ${
          darkMode 
            ? "bg-blue-400/10" 
            : "bg-blue-600/15"
        }`} style={{ animationDelay: "3s" }}></div>
      </div>
    </div>
  );
};

export default LoadingScreen;