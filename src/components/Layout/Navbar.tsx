"use client";

import { useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../redux/slices/DarkModeSlice";
import { RootState } from "@/redux/store";
import ThemeInitializer from "./ThemeInitializer";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navStyle, setNavStyle] = useState("");
  const [activeSection, setActiveSection] = useState("home");
  const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(darkMode);
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });

  useEffect(() => {
  const handleScrollStyle = () => {
    if (window.scrollY >= 100 && window.scrollY < 300) {
      setNavStyle("navbar-hide");
    } else if (window.scrollY >= 300) {
      setNavStyle("navbar-scrolled");
    } else {
      setNavStyle("navbar-show");
    }
  };

  window.addEventListener("scroll", handleScrollStyle);
  handleScrollStyle(); // run on mount too

  return () => {
    window.removeEventListener("scroll", handleScrollStyle);
  };
}, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "portfolio", "contact"]; // Daftar ID section yang ingin dipantau

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const { top } = section.getBoundingClientRect();
          if (top <= 150 && top >= -section.clientHeight) {
            setActiveSection(sectionId); // Update state jika section terlihat di layar
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const navbarToggle = document.getElementById("navbar-toggle");
    const closeNavbar = (e: MouseEvent) => {
      if (isOpen) {
        if (
          e.target !== navbarToggle &&
          e.target !== navbarToggle?.children[0]
        ) {
          setIsOpen(false);
        }
      }
    };
    window.addEventListener("click", function (e) {
      closeNavbar(e);
    });
    return () => {
      window.removeEventListener("click", function (e) {
        closeNavbar(e);
      });
    };
  }, [isOpen]);

  return (
    <>
      <ThemeInitializer />
      <nav
        className={`bg-transparent fixed top-0 left-0 w-full flex items-center z-10 transition duration-300 ${navStyle}`}
      >
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4 flex place-items-center">
              <img
                src="/icons/d.png"
                alt="d"
                className="h-8 inline-block pb-1 mr-[3px]"
              />
              <a
                href="#"
                className={`font-bold  text-3xl block py-1 hover:opacity-80 text-primary tracking-widest `}
              >
                <span className="text-blue-500">anS</span>
              </a>
            </div>
            <div className="flex items-center px-4">
              <div
                className={` ${
                  isOpen ? "block" : "hidden"
                }  absolute my-3 py-3 lg:py-0 bg-white dark:bg-slate-700 dark:shadow-slate-950 lg:dark:bg-transparent shadow-md rounded-lg max-w-[250px] w-full right-4 top-full overflow-hidden lg:block lg:relative lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none `}
              >
                <ul className="block lg:flex items-center ">
                  <li className="group  flex">
                    <a
                      href="#"
                      className={`nav-link text-base text-dark dark:text-white py-2 mx-8 group-hover:text-primary ${
                        activeSection === "home" ? "active" : ""
                      }
                    }`}
                    >
                      Beranda
                    </a>
                  </li>
                  <li className="group  flex">
                    <a
                      href="#about"
                      className={`nav-link text-base text-dark dark:text-white py-2 mx-8 group-hover:text-primary ${
                        activeSection === "about" ? "active" : ""
                      }
                    }`}
                    >
                      Tentang Saya
                    </a>
                  </li>
                  <li className="group  flex">
                    <a
                      href="#portfolio"
                      className={`nav-link text-base text-dark dark:text-white py-2 mx-8 group-hover:text-primary ${
                        activeSection === "portfolio" ? "active" : ""
                      }
                    }`}
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="group  flex">
                    <a
                      href="#contact"
                      className={`nav-link text-base text-dark dark:text-white py-2 mx-8 group-hover:text-primary ${
                        activeSection === "contact" ? "active" : ""
                      }
                    }`}
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div className="relative h-12 w-12 mb-0 lg:mb-2 mt-1 lg:mt-0 ">
                <button
                  className={`${!darkMode ? `translate-y-10 opacity-0` : "translate-y-0 opacity-100"} toggle-button text-white hover:bg-slate-950`}
                  onClick={() => dispatch(toggleDarkMode())}
                >
                  <CiLight />
                </button>
                <button
                  className={`${darkMode ? `-translate-y-10 opacity-0` : "translate-y-0 opacity-100"} toggle-button hover:bg-slate-200`}
                  onClick={() => dispatch(toggleDarkMode())}
                >
                  <CiDark />
                </button>
              </div>

              <button
                id="navbar-toggle"
                name="navbar-toggle"
                type="button"
                className={`block  lg:hidden ${isOpen ? "hamburger-active" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
