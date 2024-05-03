import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TimeLineItem from "./TimeLineItem";

export default function TimeLine() {
  return (
    <>
      <ol className="relative border-s border-primary">
        <TimeLineItem
          time="November 2023 - Mei 2024"
          title="Dibimbing.id (Informal)"
          subtitle="Front-End Web Developer"
          desc="Belajar menguasai framework untuk pengembangan tampilan dan interaksi pengguna di aplikasi web. juga mempelajari proses pengambilan data dari sumber eksternal seperti API untuk digunakan dalam aplikasi web."
        />

        <TimeLineItem
          time="April 2019 - Oktober 2022"
          title="Universitas Indraprasta PGRI"
          subtitle="Teknik Informatika"
          desc="Belajar tentang struktur data dan algoritma . memahami komponen fisik dan logis dari sistem komputer. Menerapkan bahasa pemrograman seperti Java, PHP, dan Python dalam pengembangan perangkat lunak."
        />
      </ol>
    </>
  );
}
