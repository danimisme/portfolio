"use client";

import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function ButtonUp() {
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const about = document.getElementById("about");
      const { top } = about!.getBoundingClientRect();
      setIsShow(top < 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`bg-primary w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-300 ease-in-out animate-bounce fixed  bottom-5 right-5 shadow-md hover:animate-none ${
        isShow ? "block" : "hidden"
      }`}
      onClick={() => window.scrollTo(0, 0)}
    >
      <FontAwesomeIcon icon={faArrowUp} className="text-white" />
    </div>
  );
}
