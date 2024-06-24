import Footer from "@/components/landing-footer";
import HeroSection from "@/components/landing-hero-section";
import LandingNavbar from "@/components/landing-navbar";
import Projects from "@/components/landing-projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="h-full">
      <LandingNavbar />
      <HeroSection />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
