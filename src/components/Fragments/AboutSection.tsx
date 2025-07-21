"use client";
import { useEffect } from "react";
import TimeLine from "../Elements/TimeLine";
import animationAOS from "../../AOS/setting";

export default function AboutSection() {
  useEffect(() => {
    animationAOS();
  }, []);
  return (
    <section id="about" className="lg:pt-36 md:pt-20 pt-20 pb-16 dark:bg-dark">
      <div className="container">
        <div className="flex flex-wrap justify-between md:gap-10">
          <div className="w-full px-4 mb-10  max-w-xl ">
            <h4
              className="text-primary font-bold text-xl md:text-2xl uppercase mb-3"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-once="true"
            >
              Tentang Saya
            </h4>
            <p
              className="text-base font-medium text-secondary dark:text-slate-300 md:text-xl"
              data-aos="fade-up"
              data-aos-duration="300"
              data-aos-delay="500"
              data-aos-once="true"
            >
              Perkenalkan nama saya{" "}
              <span className="text-primary font-semibold">
                Muhammad Subhan Ramdhani
              </span>
              . Saya biasa dipanggil{" "}
              <span className="text-primary font-semibold">Dani</span>. Saya
              adalah seorang frontend engineer dengan pengalaman lebih dari 2
              tahun dalam pengembangan web. Saya memiliki kemampuan untuk
              mengembangkan tampilan dan interaksi pengguna di aplikasi web.
              Saya memiliki pengetahuan yang luas tentang HTML, CSS, dan
              JavaScript, serta pengalaman dalam pengembangan framework seperti
              React dan Next.js.
            </p>
          </div>

          

          <div className="w-full px-4 max-w-xl ">
            <h3
              className="text-primary font-bold text-xl md:text-2xl  uppercase mb-3"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-once="true"
            >
              Pendidikan Terakhir
            </h3>
            <TimeLine />
          </div>
        </div>
      </div>
    </section>
  );
}
