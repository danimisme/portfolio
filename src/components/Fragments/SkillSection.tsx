"use client";
import { useEffect } from "react";
import SkillItem from "../Elements/SkillItem";
import { useState } from "react";
import { SkillItem as Skill } from "@/models/skill";

export default function SkillSection() {
  const [dataSkills, setDataSkills] = useState<Skill[]>([]);
  async function getDataSkills() {
    try {
      const response = await fetch("/data/skills.JSON");
      const data = await response.json();
      setDataSkills(data);
    } catch (error) {
      console.error("Error fetching skills:", error);
    }
  }

  useEffect(() => {
    getDataSkills();
  }, []);
  return (
    <section className=" py-16 dark:bg-dark">
      <div className="container">
        <h2 className="text-3xl font-bold text-center text-primary">
          My Skills
        </h2>
        <div className="flex flex-wrap mt-16 justify-center ">
          {dataSkills.map((skill) => (
            <SkillItem key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
