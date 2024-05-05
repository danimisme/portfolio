import SkillItem from "../Elements/SkillItem";

export default function SkillSection() {
  return (
    <section className=" pb-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center text-primary">
          My Skills
        </h2>
        <div className="flex flex-wrap mt-16 justify-center ">
          <SkillItem title="HTML" icon="./icons/html.png" />
          <SkillItem title="CSS" icon="./icons/css.png" />
          <SkillItem title="JavaScript" icon="./icons/js.png" />
          <SkillItem title="React JS" icon="./icons/reactjs.png" />
          <SkillItem title="Next JS" icon="./icons/nextjs.png" />
          <SkillItem title="Redux" icon="./icons/redux.png" />
          <SkillItem title="Tailwind CSS" icon="./icons/tailwindcss.png" />
          <SkillItem title="Bootstrap" icon="./icons/bootstrap.png" />
        </div>
      </div>
    </section>
  );
}
