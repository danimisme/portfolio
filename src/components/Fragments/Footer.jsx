import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faReact,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="bg-dark py-12 text-slate-300">
      <div className="container">
        <div className="w-full flex flex-wrap lg:justify-end justify-between">
          <div className="w-full lg:w-[55%] md:w-1/2 px-4 lg:px-0 text-center">
            <p className=" mb-2 text-2xl text-white font-semibold">danimisme</p>
            <p className="text-md mb-2">
              Built using
              <span className="inline-block ml-2 mr-1">
                <FontAwesomeIcon icon={faReact} />
              </span>
              React.js and Tailwind CSS
            </p>
            <p className="text-md mb-2">© 2024 - Muhammad Subhan Ramdhani</p>
            <div className=" mt-4 ">
              <a
                target="_blank"
                href="https://github.com/danimisme"
                className="text-2xl mb-2 group"
              >
                <span className="inline-block mr-5 text-sky-400 group-hover:-translate-y-2 transition duration-300 ">
                  <FontAwesomeIcon icon={faGithub} />
                </span>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/msubhanr//"
                className="text-2xl mb-2 group"
              >
                <span className="inline-block mr-5 text-sky-400 group-hover:-translate-y-2 transition duration-300 ">
                  <FontAwesomeIcon icon={faLinkedin} />
                </span>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/msubhanramdhani/"
                className="text-2xl mb-2 group"
              >
                <span className="inline-block mr-5 text-sky-400 group-hover:-translate-y-2 transition duration-300 ">
                  <FontAwesomeIcon icon={faInstagram} />
                </span>
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/dhani20102011/"
                className="text-2xl mb-2 group"
              >
                <span className="inline-block mr-5 text-sky-400 group-hover:-translate-y-2 transition duration-300 ">
                  <FontAwesomeIcon icon={faFacebook} />
                </span>
              </a>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=628979761661"
                className="text-2xl mb-2 group"
              >
                <span className="inline-block mr-5 text-sky-400 group-hover:-translate-y-2 transition duration-300 ">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </span>
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/4 md:w-1/4 px-4 lg:px-20">
            <p className="mb-2 text-xl">Tautan</p>
            <a href="#" className="block text-sm mb-2 hover:text-primary">
              Beranda
            </a>
            <a href="#about" className="block text-sm mb-2 hover:text-primary">
              Tentang Saya
            </a>
            <a
              href="#portfolio"
              className="block text-sm mb-2 hover:text-primary"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="block text-sm mb-2 hover:text-primary"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
