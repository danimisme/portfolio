export default function TimeLine() {
  return (
    <>
      <ol className="relative border-s border-primary">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5 border border-dark "></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            November 2023 - Mei 2024
          </time>
          <h3 className="text-lg font-semibold text-gray-900 ">
            Dibimbing.id (Informal)
          </h3>
          <h4 className="text-base font-semibold text-slate-700">
            Front-End Web Developer
          </h4>
          <p className="mb-4 text-base font-normal text-gray-500">
            Belajar menguasai framework untuk pengembangan tampilan dan
            interaksi pengguna di aplikasi web. juga mempelajari proses
            pengambilan data dari sumber eksternal seperti API untuk digunakan
            dalam aplikasi web.
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5 border border-dark "></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            April 2019 - Oktober 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-900 ">
            Universitas Indraprasta PGRI
          </h3>
          <h4 className="text-base font-semibold text-slate-700">
            Teknik Informatika
          </h4>
          <p className="mb-4 text-base font-normal text-gray-500">
            Belajar tentang struktur data dan algoritma . memahami komponen
            fisik dan logis dari sistem komputer. Menerapkan bahasa pemrograman
            seperti Java, PHP, dan Python dalam pengembangan perangkat lunak.
          </p>
        </li>
      </ol>
    </>
  );
}
