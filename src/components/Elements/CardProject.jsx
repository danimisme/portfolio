export default function CardProject({ project }) {
  const { id, title, desc, img, techStack } = project;
  return (
    <div className="mb-12 p-3 md:p-6 md:w-1/2 lg:w-1/3 group hover:cursor-pointer hover:shadow-lg hover:bg-slate-300 dark:hover:bg-slate-800 dark:hover:shadow-lg hover:-translate-y-2 duration-300">
      <div className="rounded-md shadow-md overflow-hidden relative">
        <img
          src={img}
          alt="portfolio-image"
          className="w-full aspect-[16/9] object-cover object-top transition-all duration-1000 group-hover:object-bottom brightness-100 group-hover:brightness-75 "
        />
        <button className="font-semibold border-[3px] border-primary bg-black bg-opacity-20 py-2 px-5 rounded-lg text-primary absolute top-1/2 left-1/2 -translate-x-1/2 group-hover:-translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-1000 hover:bg-white hover:bg-opacity-50">
          View
        </button>
      </div>
      <h3 className="font-semibold text-xl text-dark dark:text-slate-300  mt-5 mb-3">
        {title}
      </h3>
      <h2 className="font-semibold text-base text-secondary">
        Tech Stack :
        {techStack && (
          <span className="inline-block ml-3 mb-3">
            {techStack.map((tech, index) => (
              <img
                key={index}
                src={tech}
                alt={tech}
                className="h-7 inline-block mr-2"
              />
            ))}
          </span>
        )}
      </h2>
      <p className="font-medium text-base text-secondary">{desc}</p>
    </div>
  );
}
