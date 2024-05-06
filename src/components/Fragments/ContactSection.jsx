import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputForm from "../Elements/Input";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function ContactSection() {
  return (
    <section id="contact" className="py-32">
      <div className="container">
        <div className="w-full px-4">
          <h2 className="font-bold text-primary text-3xl my-10 text-center lg:text-start">
            Contact
          </h2>
        </div>
        <div className="flex flex-wrap ">
          <div className="w-full md:w-2/3 lg:w-[40%] mx-auto lg:mx-0 px-4">
            <h3 className="text-dark font-bold text-xl md:text-2xl mb-8">
              Mari berdikusi
            </h3>
            <div className=" mt-4">
              <div className="mb-3">
                <a
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=628979761661"
                  className="text-md  group "
                >
                  <span className="inline-block mr-3 text-secondary text-2xl group-hover:-translate-y-2 transition duration-300 ">
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </span>
                  08979761661
                </a>
              </div>
              <div className="mb-3">
                <a
                  target="_blank"
                  href="mailto:msubhanr53@gmail"
                  className="text-md  group "
                >
                  <span className="inline-block mr-3 text-secondary text-2xl group-hover:-translate-y-2 transition duration-300 ">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  msubhanr53@gmail.com
                </a>
              </div>
              <div className="mb-3">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/msubhanr/"
                  className="text-md  group "
                >
                  <span className="inline-block mr-3 text-secondary text-2xl group-hover:-translate-y-2 transition duration-300 ">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </span>
                  Muhammad Subhan Ramdhani
                </a>
              </div>
            </div>
          </div>
          <div className="w-full my-10 lg:my-0 md:w-2/3 lg:w-[20%] mx-auto lg:mx-0 px-4">
            <h3 className="text-dark font-bold text-xl md:text-2xl  ">Atau</h3>
          </div>

          <div className="w-full md:w-2/3 lg:w-[40%] mx-auto lg:mx-0 px-4">
            <h3 className="text-dark font-bold text-xl md:text-2xl mb-8">
              Kirimikan Pesan
            </h3>
            <form action="">
              <InputForm name="name" label="Name" placeholder=" " />
              <InputForm
                type="email"
                name="email"
                label="Email"
                placeholder=" "
              />
              <InputForm
                type="textarea"
                name="message"
                label="Message"
                placeholder=" "
              />
              <div className="flex justify-end">
                <button className="bg-primary text-white px-5 py-3 rounded-lg  hover:opacity-80 hover:shadow-md transition duration-300">
                  Kirim
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
