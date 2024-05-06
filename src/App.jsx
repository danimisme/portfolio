import "./App.css";
import ButtonUp from "./components/Elements/ButtonUp";
import AboutSection from "./components/Fragments/AboutSection";
import ContactSection from "./components/Fragments/ContactSection";
import Footer from "./components/Fragments/Footer";
import HeroSection from "./components/Fragments/HeroSection";
import PortFolioSection from "./components/Fragments/PortFolioSection";
import SkillSection from "./components/Fragments/SkillSection";
import FloatingBackgrund from "./components/Layout/FloatingBackgrund";
import Navbar from "./components/Layout/Navbar";

function App() {
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
