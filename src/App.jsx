import "./App.css";
import ButtonUp from "./components/Elements/ButtonUp";
import AboutSection from "./components/Fragments/AboutSection";
import ContactSection from "./components/Fragments/ContactSection";
import DottedBackground from "./components/Fragments/DottedBackground";
import HeroSection from "./components/Fragments/HeroSection";
import PortFolioSection from "./components/Fragments/PortFolioSection";
import SkillSection from "./components/Fragments/SkillSection";
import Navbar from "./components/Layout/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <DottedBackground>
        <HeroSection />
      </DottedBackground>
      <AboutSection />
      <SkillSection />
      <PortFolioSection />
      <ButtonUp />
      <ContactSection />
    </>
  );
}

export default App;
