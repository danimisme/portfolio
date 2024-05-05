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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo voluptate consequuntur tenetur similique dignissimos
              illum, cum cumque aut expedita incidunt.
            </p>
          </div>
        </div>
        <div className="w-full px-4 flex flex-wrap justify-center">
          <CardProject
            title="Kelana Travel Web"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quos in doloremque non voluptate hic at laboriosam incidunt excepturi adipisci."
            img="./portfolio-images/kelana.png"
          />
          <CardProject
            title="Dibimbing food"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quos in doloremque non voluptate hic at laboriosam incidunt excepturi adipisci."
            img="./portfolio-images/dibimbing-food.png"
          />
          <CardProject
            title="Diminum Caffe"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quos in doloremque non voluptate hic at laboriosam incidunt excepturi adipisci."
            img="./portfolio-images/diminum-caffe.png"
          />
          <CardProject
            title="Bookshelf Apps Web"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quos in doloremque non voluptate hic at laboriosam incidunt excepturi adipisci."
            img="./portfolio-images/bookshelf-app.png"
          />
        </div>
      </div>
    </section>
  );
}
