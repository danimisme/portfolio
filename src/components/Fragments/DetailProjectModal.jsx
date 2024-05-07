import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function DetailProjectModal() {
  return (
    <div className="fixed  top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 ">
      <div className=" bg-white dark:bg-dark dark:bg-opacity-70 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 w-[80%] lg:w-[70%]  rounded-lg bg-opacity-70 overflow-y-auto">
        <div className="w-full border-b-2 border-dark dark:text-white dark:border-slate-500 py-2 ">
          <h1 className="text-2xl font-semibold text-center mb-2 ">
            Kelana Travel
          </h1>
        </div>
        <div className="flex flex-wrap  pt-10">
          <div className="w-full md:w-1/2 px-4 ">
            <Carousel
              showArrows={true}
              showStatus={false}
              showIndicators={false}
            >
              <div className="w-full rounded-lg overflow-hidden">
                <img
                  src="https://source.unsplash.com/random"
                  alt=""
                  className="aspect-[16/9] object-top object-cover w-full"
                />
              </div>
            </Carousel>
          </div>
          <div className="w-full md:w-1/2 px-4 dark:text-white">
            <h2 className="text-xl font-semibold mb-4">Description</h2>
            <p>
              Memanfaatkan data dari travel API dibimbing.id, admin dapat
              mengakses dashboard dan dapat melakukan CRUD data promo, activty,
              banner,profile dan mengupdate role user.
            </p>
            <h2 className="text-xl font-semibold mt-4 mb-4">Tech Stack</h2>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>React-Query</li>
              <li>Tailwind</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
