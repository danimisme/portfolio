export default function SkillItem({ title, icon }) {
  return (
    <div className="flex flex-col items-center mb-10 md:w-1/4 w-1/3">
      <div className="w-20 h-20">
        <img src={icon} alt="" />
      </div>
      <p className="text-lg font-medium text-dark text-center mt-3">{title}</p>
    </div>
  );
}
