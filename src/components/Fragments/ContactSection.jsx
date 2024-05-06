import InputForm from "../Elements/Input";

export default function ContactSection() {
  return (
    <section id="contact" className="pt-36 pb-32">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className=" text-primary font-semibold text-lg md:text-xl mb-2">
              Contact
            </h4>
            <h2 className="font-bold text-dark text-3xl md:text-4xl mb-4">
              Hubungi Saya
            </h2>
            <p className="text-md font-medium text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A et
              aliquid possimus iure corrupti obcaecati quod sunt eligendi
              tenetur non!
            </p>
          </div>
        </div>
        <div className="w-full md:w-2/3 mx-auto">
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
            <button className="bg-primary text-white px-5 py-3 rounded-lg mx-4 hover:opacity-80 hover:shadow-md transition duration-300">
              Kirim
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
