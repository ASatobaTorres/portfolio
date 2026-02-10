"use client"

import MagneticButton from "@/components/magnetic-button"

const sections = [
  { label: "Inicio", href: "#HeroSection" },
  { label: "Sobre Mi", href: "#about" },
  { label: "Tecnologias", href: "#tech-stack"},
  { label: "Proyectos", href: "#projects" },
  { label: "Contacto", href: "#contact" },
]

export default function SectionCarouselNav() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex gap-3 px-4 py-2 rounded-full bg-background/80 backdrop-blur-md border border-border shadow-lg overflow-x-auto no-scrollbar">
        {sections.map((section) => (
          <MagneticButton key={section.href} size="sm" variant="ghost" asChild>
            <a href={section.href} className="whitespace-nowrap">
              {section.label}
            </a>
          </MagneticButton>
        ))}
      </div>
    </nav>
  )
}
