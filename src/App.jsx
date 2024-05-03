import "./App.css";
import AboutSection from "./components/Fragments/AboutSection";
import DottedBackground from "./components/Fragments/DottedBackground";
import HeroSection from "./components/Fragments/HeroSection";

function App() {
  return (
    <>
      <DottedBackground>
        <HeroSection />
      </DottedBackground>
      <AboutSection />
    </>
  );
}

export default App;
