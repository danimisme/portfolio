"use client";

import { useEffect } from "react";
import animationAOS from "../../AOS/setting";
import type { SkillItem } from "@/models/skill";

interface Props {
  skill : SkillItem
}
export default function SkillItem({ skill } : Props) {
  const { id, title, icon } = skill;
  useEffect(() => {
    animationAOS();
  }, []);
  return (
    <div
      className="flex flex-col items-center mb-10 md:w-1/4 w-1/3 group"
      data-aos="fade-up"
      data-aos-delay={id * 100}
    >
      <div className="w-20 h-20 group-hover:animate-bounce duration-300">
        <img src={icon} alt="" />
      </div>
      <p className="text-lg font-semibold text-dark text-center mt-3 cursor-context-menu group-hover:font-bold group-hover:text-xl dark:text-gray-400 group-hover:dark:text-white">
        {title}
      </p>
    </div>
  );
}
