import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  window.onscroll = function () {
    if (window.scrollY > 200) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };
  return (
    <nav
      className={`bg-transparent absolute top-0 left-0 w-full flex items-center z-10 transition duration-200 ${
        isScroll && "navbar-scrolled"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a
              href="#"
              className={`font-bold text-lg block py-6 hover:opacity-80 ${
                isScroll ? "text-white" : "text-primary"
              }`}
            >
              danimisme
            </a>
          </div>
          <div className="flex items-center px-4">
            <button
              id="navbar-toggle"
              name="navbar-toggle"
              type="button"
              className={`block absolute right-4 ${
                isOpen ? "hamburger-active" : ""
              }`}
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
