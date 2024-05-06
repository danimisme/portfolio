import { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navStyle, setNavStyle] = useState("");
  const [activeSection, setActiveSection] = useState("home");
  window.onscroll = function () {
    if (window.scrollY >= 100 && window.scrollY < 300) {
      setNavStyle("navbar-hide");
    } else if (window.scrollY >= 300) {
      setNavStyle("navbar-scrolled");
    } else {
      setNavStyle("navbar-show");
    }
  };

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
    const closeNavbar = (e) => {
      if (isOpen) {
        if (
          e.target !== navbarToggle &&
          e.target !== navbarToggle.children[0]
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
    <nav
      className={`bg-transparent fixed top-0 left-0 w-full flex items-center z-10 transition duration-300 ${navStyle}`}
    >
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a
              href="#"
              className={`font-bold text-lg block py-6 hover:opacity-80 text-primary `}
            >
              danimisme
            </a>
          </div>
          <div className="flex items-center px-4">
            <div
              className={` ${
                isOpen ? "block" : "hidden"
              }  absolute my-3 py-3 lg:py-0 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full overflow-hidden lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none `}
            >
              <ul className="block lg:flex items-center ">
                <li className="group  flex">
                  <a
                    href="#"
                    className={`nav-link text-base text-dark py-2 mx-8 group-hover:text-primary ${
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
                    className={`nav-link text-base text-dark py-2 mx-8 group-hover:text-primary ${
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
                    className={`nav-link text-base text-dark py-2 mx-8 group-hover:text-primary ${
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
                    className={`nav-link text-base text-dark py-2 mx-8 group-hover:text-primary ${
                      activeSection === "contact" ? "active" : ""
                    }
                    }`}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className=" lg:border-2 text-3xl p-2 hover:bg-slate-200 rounded-full lg:mb-2 mr-4 lg:mr-0 ">
              <CiLight />
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
  );
}
