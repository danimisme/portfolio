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

    // Set content ready langsung tanpa delay tambahan
    const contentTimer = setTimeout(() => {
      setIsContentReady(true);
    }, 4500); // Sedikit delay setelah loading selesai

    return () => {
      clearTimeout(timer);
      clearTimeout(contentTimer);
    };
  }, [dispatch]);

  return (
    <div
      className={`main-content-layer transition-all duration-1000 ease-out ${
        isLoading 
          ? "opacity-100 translate-y-0 scale-100" // Konten sudah siap di background
          : "opacity-100 translate-y-0 scale-100 content-reveal" // Tetap terlihat setelah loading dengan reveal effect
      }`}
      style={{
        zIndex: isLoading ? 1 : 10, // Di bawah loading screen saat loading, di atas setelah loading
        position: 'relative'
      }}
    >
      {children}
    </div>
  );
};

export default MainContent;