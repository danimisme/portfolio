"use client";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { setLoading } from "@/redux/slices/LoadingSlice";

const LoadingScreen = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);
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
      className={`fixed inset-0 z-50 flex items-center justify-center loading-gradient transition-all duration-800 ${
        isLoading ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
    >
      <div className="text-center loading-fadeInUp">
        {/* Main Loading Animation */}
        <div className="mb-8 flex justify-center">
          <div className="relative loading-float">
            {/* Outer Ring */}
            <div className="h-24 w-24 rounded-full border-4 border-white/20 border-t-white border-r-blue-200 animate-spin"></div>
            {/* Inner Ring */}
            <div className="absolute inset-2 h-20 w-20 rounded-full border-2 border-blue-300/30 border-b-blue-400 animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
            {/* Center Circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-14 w-14 rounded-full bg-white loading-glow flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">D</span>
              </div>
            </div>
          </div>
        </div>

        {/* Nama Portfolio dengan Animation */}
        <div className="mb-6 px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 font-poppins drop-shadow-lg">
            Muhammad Subhan
          </h1>
          <p className="text-blue-100 text-lg md:text-xl font-medium animate-pulse">
            {currentText}
          </p>
        </div>

        {/* Enhanced Progress Bar */}
        <div className="w-80 md:w-96 mx-auto mb-6 px-4">
          <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden backdrop-blur-sm">
            <div
              className="h-full bg-gradient-to-r from-white via-blue-200 to-white rounded-full transition-all duration-500 ease-out progress-bar-glow relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse"></div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-3">
            <p className="text-blue-100 text-sm font-medium">
              Loading Portfolio...
            </p>
            <p className="text-white text-sm font-bold">
              {Math.round(progress)}%
            </p>
          </div>
        </div>

        {/* Enhanced Floating Dots */}
        <div className="flex justify-center space-x-3 mb-8 md:mb-10">
          <div className="w-3 h-3 bg-white rounded-full animate-bounce loading-glow" style={{ animationDelay: "0ms" }}></div>
          <div className="w-3 h-3 bg-blue-200 rounded-full animate-bounce loading-glow" style={{ animationDelay: "150ms" }}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce loading-glow" style={{ animationDelay: "300ms" }}></div>
          <div className="w-3 h-3 bg-blue-200 rounded-full animate-bounce loading-glow" style={{ animationDelay: "450ms" }}></div>
        </div>

        {/* Skills Preview with Better Animation */}
        <div className="flex justify-center space-x-4 md:space-x-6 opacity-80 px-4">
          <div className="flex flex-col items-center animate-pulse loading-float" style={{ animationDelay: "0s" }}>
            <div className="w-8 h-8 md:w-10 md:h-10 bg-orange-500 rounded-xl mb-2 flex items-center justify-center text-white font-bold shadow-lg text-xs md:text-sm">R</div>
            <span className="text-xs md:text-sm text-white font-medium">React</span>
          </div>
          <div className="flex flex-col items-center animate-pulse loading-float" style={{ animationDelay: "0.5s" }}>
            <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-xl mb-2 flex items-center justify-center text-white font-bold shadow-lg text-xs md:text-sm">TS</div>
            <span className="text-xs md:text-sm text-white font-medium">TypeScript</span>
          </div>
          <div className="flex flex-col items-center animate-pulse loading-float" style={{ animationDelay: "1s" }}>
            <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-xl mb-2 flex items-center justify-center text-white font-bold shadow-lg text-xs md:text-sm">N</div>
            <span className="text-xs md:text-sm text-white font-medium">Next.js</span>
          </div>
          <div className="flex flex-col items-center animate-pulse loading-float" style={{ animationDelay: "1.5s" }}>
            <div className="w-8 h-8 md:w-10 md:h-10 bg-cyan-500 rounded-xl mb-2 flex items-center justify-center text-white font-bold shadow-lg text-xs md:text-sm">TW</div>
            <span className="text-xs md:text-sm text-white font-medium">Tailwind</span>
          </div>
        </div>
      </div>

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-white/10 rounded-full loading-float blur-xl" style={{ animationDelay: "0s" }}></div>
        <div className="absolute top-1/4 -right-20 w-48 h-48 bg-blue-300/10 rounded-full loading-float blur-xl" style={{ animationDelay: "1s" }}></div>
        <div className="absolute -bottom-20 left-1/3 w-52 h-52 bg-white/10 rounded-full loading-float blur-xl" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-10 w-32 h-32 bg-blue-400/10 rounded-full loading-float blur-xl" style={{ animationDelay: "3s" }}></div>
      </div>
    </div>
  );
};

export default LoadingScreen;