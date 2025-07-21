"use client";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { closeProjectModal } from "../../redux/slices/ProjectModalSlice";
import { FaGithub, FaLink } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function DetailProjectModal() {
  const { isOpen, project } = useSelector((state) => state.projectModal);
  const dispatch = useDispatch();
  const { img, title, techStack, desc, repository, link } = project;
  const [width, setWidth] = useState(getWidth());
  
  function getWidth() {
  if (typeof window !== "undefined") {
    const width = window.innerWidth;
    if (width <= 768) {
      return 1;
    } else if (width <= 1024) {
      return 2;
    } else {
      return 3;
    }
  }
  return 3; // default (desktop) saat render di server
}


  
  useEffect(() => {
    function handleResize() {
      setWidth(getWidth());
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`fixed h-screen top-0 left-0 w-full  flex justify-center items-center bg-black bg-opacity-50 z-50 transition-all duration-500 ${isOpen ? "opacity-100 pointer-events-auto " : " opacity-0 pointer-events-none"}`}
    >
      <div
        className={` bg-white backdrop-blur-sm bg-opacity-70 dark:bg-dark dark:bg-opacity-70 dark:backdrop-blur-sm absolute p-4 w-[80%] lg:w-[70%] max-h-[90vh] rounded-lg  overflow-y-auto transition-all duration-500 ${isOpen ? "opacity-100 translate-y-0" : "translate-y-24 opacity-0 "}`}
      >
        <div className="w-full border-b-2 border-dark dark:text-white dark:border-slate-500 py-2 ">
          <h1 className="text-xl lg:text-2xl font-semibold text-center mb-2 ">
            {title}
          </h1>
        </div>
        <div className="flex flex-wrap  pt-10">
          <div className="w-full md:w-1/2 px-4 ">
            <Carousel
              showArrows={true}
              showStatus={false}
              showIndicators={false}
              showThumbs={width > 1}
              swipeable={true}
              emulateTouch={true}
            >
              {img &&
                img.map((image, index) => (
                  <div
                    key={index}
                    className="w-full rounded-lg overflow-hidden"
                  >
                    <img
                      src={image}
                      alt=""
                      className="w-full aspect-[16/9] object-cover object-top"
                    />
                  </div>
                ))}
            </Carousel>
          </div>
          <div className="w-full md:w-1/2 px-4 dark:text-white">
            <h2 className="text-lg lg:text-xl font-semibold my-2 lg:mb-4">
              Description
            </h2>
            <p className="text-sm md:text-base">{desc}</p>
            <p className="text-base lg:text-xl font-semibold mt-4 mb-4">
              Tech Stack :
              {techStack && (
                <span className="inline-block ml-3 mb-3">
                  {techStack.map((tech, index) => (
                    <img
                      key={index}
                      src={tech}
                      alt={tech}
                      className="h-5 lg:h-7 inline-block mr-2 mt-2"
                    />
                  ))}
                </span>
              )}
            </p>
            <div className="flex lg:flex-col gap-4">
              <div className="relative group">
                <a
                  href={repository}
                  className="text-sm lg:text-base font-semibold hover:text-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="inline-block mr-2 text-lg group-hover:animate-bounce transition duration-300">
                    <FaGithub />
                  </span>
                  Repository
                </a>
                <div className="absolute -bottom-8 left-10 py-1 px-2 h-7 rounded-lg bg-white dark:bg-dark dark:text-white hidden group-hover:block z-10 ">
                  Click to open
                </div>
              </div>
              <div className="relative  group">
                <a
                  href={link}
                  className="text-sm lg:text-base font-semibold hover:text-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="inline-block mr-2 text-lg group-hover:animate-bounce transition duration-300">
                    <FaLink />
                  </span>
                  Link Demo
                </a>
                <div className="absolute -bottom-8 left-10 py-1 px-2 h-7 rounded-lg bg-white dark:bg-dark dark:text-white hidden group-hover:block z-10">
                  Click to open
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 justify-center w-full mt-4">
            <a
              href={link}
              target="_blank"
              className="border-2 border-primary text-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition duration-300"
            >
              Visit
            </a>
            <button
              className="border-2 border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition duration-300"
              onClick={() => dispatch(closeProjectModal())}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
