import "./index.css";
interface Props {
  children: React.ReactNode;
}
export default function FloatingBackground({ children } : Props) {
  return (
    <div className="relative">
      <section className="bg">
        <ul className="shape">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </section>
      {children}
    </div>
  );
}
