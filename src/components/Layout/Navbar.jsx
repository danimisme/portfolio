import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navStyle, setNavStyle] = useState("");
  window.onscroll = function () {
    if (window.scrollY >= 100 && window.scrollY < 300) {
      setNavStyle("navbar-hide");
    } else if (window.scrollY >= 300) {
      setNavStyle("navbar-scrolled");
    } else {
      setNavStyle("navbar-show");
    }
  };
  return (
    <nav
      className={`bg-transparent fixed top-0 left-0 w-full flex items-center z-10 transition duration-300 ${navStyle}`}
    >
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a
              href="#"
              className={`font-bold text-lg block py-6 hover:opacity-80 text-primary`}
            >
              danimisme
            </a>
          </div>
          <div className="flex items-center px-4">
            <button
              id="navbar-toggle"
              name="navbar-toggle"
              type="button"
              className={`block absolute right-4 lg:hidden ${
                isOpen ? "hamburger-active" : ""
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>

            <div
              className={` ${
                isOpen ? "block" : "hidden"
              }  absolute my-3 py-3 lg:py-0 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full overflow-hidden lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none `}
            >
              <ul className="block lg:flex items-center ">
                <li className="group  flex">
                  <a
                    href="#"
                    className={`nav-link text-base text-dark py-2 mx-8 group-hover:text-primary 
                    }`}
                  >
                    Beranda
                  </a>
                </li>
                <li className="group  flex">
                  <a
                    href="#about"
                    className={`nav-link text-base text-dark py-2 mx-8 group-hover:text-primary 
                    }`}
                  >
                    Tentang Saya
                  </a>
                </li>
                <li className="group  flex">
                  <a
                    href="#portfolio"
                    className={`nav-link text-base text-dark py-2 mx-8 group-hover:text-primary 
                    }`}
                  >
                    Portfolio
                  </a>
                </li>
                <li className="group  flex">
                  <a
                    href="#contact"
                    className={`nav-link text-base text-dark py-2 mx-8 group-hover:text-primary 
                    }`}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
