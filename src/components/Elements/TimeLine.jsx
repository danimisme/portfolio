import { useEffect, useState } from "react";
import TimeLineItem from "./TimeLineItem";

export default function TimeLine() {
  const [studies, setStudies] = useState([]);

  async function getStudies() {
    try {
      const response = await fetch("/data/studies.JSON");
      const data = await response.json();
      setStudies(data);
    } catch (error) {
      console.error("Error fetching studies:", error);
    }
  }

  useEffect(() => {
    getStudies();
  }, []);
  return (
    <>
      <ol className="relative border-s border-primary">
        {studies.map((study, index) => (
          <TimeLineItem key={index} index={index} study={study} />
        ))}
      </ol>
    </>
  );
}
