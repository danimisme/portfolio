"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import ThemeInitializer from "./ThemeInitializer";
import ToggleDarkMode from "../Elements/ToggleDarkMode";
import { usePathname } from "next/navigation";

interface NavItem {
  href: string;
  label: string;
  page: string;
}
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navStyle, setNavStyle] = useState("");
  const [activePage, setActivePage] = useState("home");
  const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);
  const [navList, setNavList] = useState<NavItem[]>([] as NavItem[]);

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
    if (pathName === "/") {
      const handleScroll = () => {
        const sections = ["home", "about", "portfolio", "contact"]; // Daftar ID section yang ingin dipantau

        sections.forEach((sectionId) => {
          const section = document.getElementById(sectionId);
          if (section) {
            const { top } = section.getBoundingClientRect();
            if (top <= 150 && top >= -section.clientHeight) {
              setActivePage(sectionId); // Update state jika section terlihat di layar
            }
          }
        });
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
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

  const navHome = [
    { href: "/#", label: "Beranda", page: "home" },
    { href: "#about", label: "Tentang Saya", page: "about" },
    { href: "#portfolio", label: "Portfolio", page: "portfolio" },
    { href: "#contact", label: "Contact", page: "contact" },
    { href: "/article", label: "Article", page: "article" },
  ];

  const navGlobal = [
    { href: "/#", label: "Beranda", page: "home" },
    { href: "/article", label: "Article", page: "article" },
  ];

  const pathName = usePathname();
  useEffect(() => {
    if (pathName === "/") {
      setNavList(navHome);
    } else if (pathName.startsWith("/article")) {
      setNavList(navGlobal);
      setActivePage("article");
    }
  }, [pathName]);

  return (
    <>
      <ThemeInitializer />
      <nav
        className={`bg-transparent fixed top-0 left-0 w-full flex items-center z-10 transition duration-300 ${navStyle}`}
      >
        <div
          className={`mx-auto w-full ${pathName.startsWith("/article") ? "px-0" : "max-w-7xl"} py-2`}
        >
          <div className="flex items-center justify-between relative">
            <div className="px-4 flex place-items-center">
              <img
                src="/icons/d.png"
                alt="d"
                className="h-8 inline-block pb-1 mr-[3px]"
              />
              <a
                href="/"
                className={`font-bold  text-3xl block hover:opacity-80 text-primary tracking-widest `}
              >
                <span className="text-blue-500">anS</span>
              </a>
            </div>
            <div className="flex items-center px-4">
              <div
                className={` ${
                  isOpen ? "block" : "hidden"
                }  absolute  lg:py-0 bg-white dark:bg-slate-700 dark:shadow-slate-950 lg:dark:bg-transparent shadow-md rounded-lg max-w-[250px] w-full right-4 top-full overflow-hidden lg:block lg:relative lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none `}
              >
                <ul className="block lg:flex items-center">
                  {navList.map((item) => (
                    <li key={item.page} className="group flex">
                      <a
                        href={item.href}
                        className={`nav-link text-base text-dark dark:text-white mx-8 group-hover:text-primary ${
                          activePage === item.page ? "active" : ""
                        }`}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-center ">
                <ToggleDarkMode />
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
