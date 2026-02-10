import HeroSection from "@/components/hero-section"
import TechStack from "@/components/tech-stack"
import ProjectsCarousel from "@/components/projects-carousel"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import FuturisticBackground from "@/components/futuristic-background"
import SectionCarouselNav from "@/components/SectionCarouselNav"

export default function PortfolioPage() {
  return (
    <>
      <FuturisticBackground />
      <main className="min-h-screen relative z-10">
        <SectionCarouselNav />
        <HeroSection />
        <AboutSection />
        <TechStack />
        <ProjectsCarousel />
        <ContactSection />
      </main>
    </>
  )
}
