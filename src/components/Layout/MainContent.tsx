"use client";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { setLoading } from "@/redux/slices/LoadingSlice";

interface MainContentProps {
  children: React.ReactNode;
}

const MainContent = ({ children }: MainContentProps) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);
  const [isContentReady, setIsContentReady] = useState(false);

  useEffect(() => {
    // Simulasi loading untuk komponen dan resources
    const timer = setTimeout(() => {
      dispatch(setLoading(false));
    }, 4000); // 4 detik loading untuk memberikan waktu animasi yang cukup

    // Set content ready setelah loading selesai
    const contentTimer = setTimeout(() => {
      setIsContentReady(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(contentTimer);
    };
  }, [dispatch]);

  return (
    <div
      className={`transition-all duration-1000 ease-out transform ${
        isLoading 
          ? "opacity-0 translate-y-8 pointer-events-none scale-95" 
          : "opacity-100 translate-y-0 scale-100"
      } ${isContentReady ? "animate-none" : ""}`}
      style={{
        transitionDelay: isLoading ? "0ms" : "800ms" // Delay untuk smooth transition
      }}
    >
      {children}
    </div>
  );
};

export default MainContent;