import CardProject from "../Elements/CardProject";

export default function PortFolioSection() {
  return (
    <section id="portfolio" className="pt-36 pb-16 bg-slate-200">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="text-primary font-semibold text-lg md:text-xl mb-3">
              Portfolio
            </h4>
            <h2 className="text-dark font-bold text-3xl mb-4">
              Project Terbaru
            </h2>
            <p className="text-medium font-medium text-secondary">
              Dibawah ini merupakan beberapa project yang pernah saya buat untuk
              mempraktikan apa yang telah saya pelajari.
            </p>
          </div>
        </div>
        <div className="w-full px-4 flex flex-wrap justify-center">
          <CardProject
            title="Kelana Travel Web"
            techStack={[
              "./icons/reactjs.png",
              "./icons/tailwindcss.png",
              "./icons/redux.png",
              "./icons/axios.png",
            ]}
            desc="Memanfaatkan data dari travel API dibimbing.id, admin dapat mengakses dashboard dan dapat melakukan CRUD data promo, activty, banner,profile dan mengupdate role user."
            img="./portfolio-images/kelana.png"
          />
          <CardProject
            title="Dibimbing food"
            techStack={[
              "./icons/nextjs.png",
              "./icons/tailwindcss.png",
              "./icons/axios.png",
            ]}
            desc="Sebuah website food yang mengambil data dari food API dibimbing.id . user dapat melakukan CRUD menu food."
            img="./portfolio-images/dibimbing-food.png"
          />
          <CardProject
            title="Diminum Caffe"
            techStack={["./icons/reactjs.png", "./icons/bootstrap.png"]}
            desc="Sebuah website landing page diminum caffe. menampilkan homepage diminum caffe, tentang diminum caffe, dan menu diminum caffe."
            img="./portfolio-images/diminum-caffe.png"
          />
          <CardProject
            title="Bookshelf Apps Web"
            techStack={[
              "./icons/html.png",
              "./icons/css.png",
              "./icons/js.png",
            ]}
            desc="Memanfaatkan local Storage untuk menyimpan data. user dapat menambahkan buku, mengedit buku, dan menghapus buku."
            img="./portfolio-images/bookshelf-app.png"
          />
        </div>
      </div>
    </section>
  );
}
