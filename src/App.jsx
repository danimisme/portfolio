import { useSelector } from "react-redux";
import "./App.css";
import ButtonUp from "./components/Elements/ButtonUp";
import AboutSection from "./components/Fragments/AboutSection";
import ContactSection from "./components/Fragments/ContactSection";
import HeroSection from "./components/Fragments/HeroSection";
import PortFolioSection from "./components/Fragments/PortFolioSection";
import SkillSection from "./components/Fragments/SkillSection";
import FloatingBackgrund from "./components/Layout/FloatingBackgrund";
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";
import { useEffect } from "react";

function App() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });
  return (
    <>
      <Navbar />
      <FloatingBackgrund>
        <HeroSection />
      </FloatingBackgrund>
      <AboutSection />
      <SkillSection />
      <PortFolioSection />
      <ButtonUp />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
