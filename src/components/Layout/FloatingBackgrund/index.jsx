import "./index.css";

export default function FloatingBackgrund({ children }) {
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
