import HeroSection from "@/components/landing-hero-section";
import LandingNavbar from "@/components/landing-navbar";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="h-full">
      <LandingNavbar />
      <HeroSection />
      <Skills />
    </div>
  );
}
