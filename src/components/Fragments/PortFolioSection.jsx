import CardProject from "../Elements/CardProject";
import { useState } from "react";
import { useEffect } from "react";
import DetailProjectModal from "./DetailProjectModal";

export default function PortFolioSection() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetchProjects();
  }, []);
  const fetchProjects = async () => {
    try {
      const response = await fetch("/src/data/projects.JSON");
      const data = await response.json();
      console.log(data);
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };
  return (
    <section
      id="portfolio"
      className="pt-36 pb-16 bg-slate-200 dark:bg-darkgray"
    >
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="text-primary font-semibold text-lg md:text-xl mb-3">
              Portfolio
            </h4>
            <h2 className="text-dark font-bold text-3xl mb-4 dark:text-white">
              Project Terbaru
            </h2>
            <p className="text-medium font-medium text-secondary">
              Dibawah ini merupakan beberapa project yang pernah saya buat untuk
              mempraktikan apa yang telah saya pelajari.
            </p>
          </div>
        </div>
        <div className="w-full px-4 flex flex-wrap justify-center">
          {projects.map((project) => (
            <CardProject key={project.id} project={project} />
          ))}
        </div>
        <DetailProjectModal />
      </div>
    </section>
  );
}
