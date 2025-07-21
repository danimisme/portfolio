"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import TypeIt from "typeit-react";
import { faArrowDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import animationAOS from "../../AOS/setting";

export default function HeroSection() {
  useEffect(() => {
    animationAOS();
  });
  return (
    <section id="home" className="lg:pt-30 md:pt-20 pt-16 dark:bg-dark ">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2 relative">
            <h1 className="block font-bold text-2xl md:text-3xl text-dark dark:text-white lg:text-4xl mt-4">
              <TypeIt
                options={{
                  speed: 100,
                }}
                getBeforeInit={(instance) => {
                  instance
                    .type("Halo 👋, Saya")
                    .break()
                    .type("Muhammad&1Subhan")
                    .pause(750)
                    .move(-6)
                    .pause(200)
                    .delete(2)
                    .pause(200)
                    .type(" ")
                    .move(6)
                    .type("Ramdhani")
                    .move(-8)
                    .pause(200)
                    .type(" ")
                    .move(8)
                    .pause(750);
                  return instance;
                }}
              />
            </h1>

            <h2 className="font-medium text-secondary text-lg mb-5 lg:text-2xl mt-2">
              <TypeIt
                options={{ loop: true }}
                getBeforeInit={(instance) => {
                  instance
                    .pause(5000)
                    .type("Saya seorang Front-End Web Developer")
                    .pause(250)
                    .delete(31)
                    .pause(200)
                    .type("senang mempelajari hal baru")
                    .pause(250)
                    .delete(27)
                    .pause(200)
                    .type("berkomitmen pada tugas yang diberikan")
                    .pause(250)
                    .delete(37)
                    .pause(200)
                    .type("mudah beradaptasi")
                    .pause(250);
                  return instance;
                }}
              />
            </h2>
            <hr className=" border-t-4 mb-5" />
            <div className="flex gap-4 text-3xl mb-10 ml-3 text-blue-500">
              <a
                href="https://www.linkedin.com/in/msubhanr/"
                className="group"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="group-hover:text-dark  dark:group-hover:text-white group-hover:-translate-y-3 transition duration-300 ease-in-out"
                />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=628979761661&text&type=phone_number&app_absent=0"
                className="group"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="group-hover:text-dark  dark:group-hover:text-white group-hover:-translate-y-3 transition duration-300 ease-in-out"
                />
              </a>
              <a
                href="mailto:msubhanr53@gmail.com"
                className="group"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="group-hover:text-dark dark:group-hover:text-white  group-hover:-translate-y-3 transition duration-300 ease-in-out"
                />
              </a>
            </div>
            <a
              href="https://api.whatsapp.com/send/?phone=628979761661&text&type=phone_number&app_absent=0"
              target="_blank"
              className="text-base font-semibold bg-primary px-7 py-3 rounded-full border-4 border-primary hover:bg-transparent  hover:text-primary hover:shadow-lg  text-white transition duration-300 ease-in-out"
            >
              Contact Me
            </a>
          </div>

          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:mt-0 lg:right-0">
              <img
                src="./images/profile-1.png"
                alt="Muhammad Subhan"
                className="max-w-full mx-auto mb-0 relative z-10"
                data-aos="fade-up"
                data-aos-duration="1000"
              />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 right-0 opacity-50 md:scale-125 ">
                <svg
                  width={400}
                  height={400}
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  data-aos-delay="1500"
                >
                  <path
                    fill="#0369a1"
                    d="M46.5,-47.8C53.7,-39.4,48.3,-19.7,45.4,-2.8C42.6,14.1,42.5,28.2,35.3,33.9C28.2,39.7,14.1,37.1,-3.8,40.9C-21.7,44.7,-43.4,54.9,-55.1,49.2C-66.8,43.4,-68.4,21.7,-60.4,8C-52.4,-5.7,-34.7,-11.4,-23.1,-19.7C-11.4,-28.1,-5.7,-39.1,7,-46.1C19.7,-53.1,39.4,-56.1,46.5,-47.8Z"
                    transform="translate(100 100) scale(1.2)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div
            className="bg-primary w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-300 ease-in-out animate-bounce"
            onClick={() => {
              const aboutElement = document.getElementById("about");
              if (aboutElement) {
                window.scrollTo({
                  top: aboutElement.offsetTop,
                  behavior: "smooth",
                });
              }
            }}
          >
            <FontAwesomeIcon icon={faArrowDown} className="text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
