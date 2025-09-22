"use client";
import ButtonUp from "@/components/Elements/ButtonUp";
import LoadingScreen from "@/components/Elements/LoadingScreen";
import AboutSection from "@/components/Fragments/AboutSection";
import ContactSection from "@/components/Fragments/ContactSection";
import HeroSection from "@/components/Fragments/HeroSection";
import PortFolioSection from "@/components/Fragments/PortFolioSection";
import SkillSection from "@/components/Fragments/SkillSection";
import FloatingBackground from "@/components/Layout/FloatingBackgrund";
import Footer from "@/components/Layout/Footer";
import MainContent from "@/components/Layout/MainContent";
import Navbar from "@/components/Layout/Navbar";
import store from "@/redux/store";
import { Provider } from "react-redux";


export default function Home() {
  return (
    <div className="font-poppins max-w-screen overflow-x-hidden">
    <Provider store={store}>
      <LoadingScreen />
      <MainContent>
        <Navbar />
        <FloatingBackground>
            <HeroSection />
        </FloatingBackground>
          <AboutSection />
          <SkillSection />
          <PortFolioSection />
          <ButtonUp />
        <ContactSection />
        <Footer />
      </MainContent>
      </Provider>
    </div>
  );
}
