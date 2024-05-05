export default function SkillItem({ title, icon }) {
  return (
    <div className="flex flex-col items-center mb-10 md:w-1/4 w-1/3 group">
      <div className="w-20 h-20 group-hover:animate-bounce duration-300">
        <img src={icon} alt="" />
      </div>
      <p className="text-lg font-semibold text-dark text-center mt-3 cursor-context-menu group-hover:font-bold group-hover:text-xl">
        {title}
      </p>
    </div>
  );
}
