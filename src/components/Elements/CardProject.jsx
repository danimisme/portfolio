export default function CardProject({ title, desc, img }) {
  return (
    <div className="mb-12 p-4 md:w-1/2 lg:w-1/3">
      <div className="rounded-md shadow-md overflow-hidden">
        <img
          src={img}
          alt="portfolio-image"
          className="w-full aspect-[16/9] object-cover object-top transition-all duration-1000 hover:object-bottom brightness-75 hover:brightness-100"
        />
      </div>
      <h3 className="font-semibold text-xl text-dark  mt-5 mb-3">{title}</h3>
      <p className="font-medium text-base text-secondary">{desc}</p>
    </div>
  );
}
