import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function HeroSection() {
  return (
    <section id="hero" className="pt-36">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font font-semibold text-primary lg:text-2xl">
              Halo Semua 👋, saya
              <span className="block font-bold text-2xl md:text-3xl text-dark lg:text-4xl">
                Muhammad Subhan Ramdhani
              </span>
            </h1>
            <h2 className="font-medium text-slate-500 text-lg mb-5 lg:text-2xl mt-2">
              Saya seorang Frontend Developer
            </h2>
            <hr className=" border-t-4 mb-5" />
            <div className="flex gap-4 text-3xl mb-10 ml-3 text-primary">
              <a
                href="https://api.whatsapp.com/send/?phone=628979761661&text&type=phone_number&app_absent=0"
                className=" group "
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="group-hover:text-dark group-hover:-translate-y-3 transition duration-300 ease-in-out"
                />
              </a>
              <a href="" className="group">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="group-hover:text-dark group-hover:-translate-y-3 transition duration-300 ease-in-out"
                />
              </a>
              <a href="" className="group">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="group-hover:text-dark group-hover:-translate-y-3 transition duration-300 ease-in-out"
                />
              </a>
            </div>
            <a
              href="#"
              className="text-base font-semibold bg-primary px-7 py-3 rounded-full hover:opacity-80 hover:shadow-lg  text-white transition duration-300 ease-in-out"
            >
              Contact Me
            </a>
          </div>

          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:mt-0 lg:right-0">
              <img
                src="./images/profile-1.png"
                alt="Muhammad Subhan"
                className="max-w-full mx-auto"
              />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 right-0 -z-10 md:scale-125">
                <svg
                  width={400}
                  height={400}
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
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
      </div>
    </section>
  );
}
