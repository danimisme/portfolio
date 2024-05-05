import "./App.css";
import AboutSection from "./components/Fragments/AboutSection";
import DottedBackground from "./components/Fragments/DottedBackground";
import HeroSection from "./components/Fragments/HeroSection";
import PortFolioSection from "./components/Fragments/PortFolioSection";
import Navbar from "./components/Layout/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <DottedBackground>
        <HeroSection />
      </DottedBackground>
      <AboutSection />
      <PortFolioSection />
    </>
  );
}

export default App;
