import ResizableNav from "@/components/Navbar";
import Skills from "@/components/Skills";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Projects from "@/components/Projects";
import { Loader } from "@/components/Loader";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Loader>
      <ResizableNav />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <AboutSection />
        <Projects />
        <Skills />

        <Footer />
      </div>
    </Loader>
  );
}
