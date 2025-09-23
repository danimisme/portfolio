"use client";
import { useEffect } from "react";
import TimeLine from "../Elements/TimeLine";
import animationAOS from "../../AOS/setting";
import ExperienceTimeLine from "../Elements/ExperienceTimeline";

export default function AboutSection() {
  useEffect(() => {
    animationAOS();
  }, []);
  return (
    <section id="about" className="lg:pt-36 md:pt-20 pt-20 pb-16 dark:bg-dark">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
          <div className="w-full px-4 mb-10  md:col-span-2">
            <h4
              className="font-bold text-xl md:text-2xl uppercase mb-3 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 text-transparent bg-clip-text"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-once="true"
            >
              About Me
            </h4>
            <p
              className="text-base font-medium text-secondary dark:text-slate-300 md:text-xl text-justify leading-relaxed"
              data-aos="fade-up"
              data-aos-duration="300"
              data-aos-delay="500"
              data-aos-once="true"
            >
              Hi, I’m Dani 👋 I’m a Frontend Engineer with 2+ years of
              experience in web development. I love building clean, responsive,
              and user-friendly interfaces that bring ideas to life on the web.
              <br />
              My expertise includes HTML, CSS, and JavaScript, with hands-on experience in React and Next.js. I enjoy turning complex problems into simple, intuitive solutions and continuously learning new technologies to improve my craft.
              <br />
              Currently, I’m looking forward to contributing to impactful
              projects, collaborating with great teams, and growing as a
              developer. 🚀
            </p>
          </div>

          <div className="w-full px-4 ">
            <h3
              className="font-bold text-xl md:text-2xl  uppercase mb-3 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 text-transparent bg-clip-text"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-once="true"
            >
              Experience
            </h3>
            <ExperienceTimeLine />
          </div>
          <div className="w-full px-4 ">
            <h3
              className="font-bold text-xl md:text-2xl  uppercase mb-3 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 text-transparent bg-clip-text"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-once="true"
            >
              Education
            </h3>
            <TimeLine />
          </div>
        </div>
      </div>
    </section>
  );
}
