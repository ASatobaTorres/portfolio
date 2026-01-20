import MagneticButton from "@/components/magnetic-button"
import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  const personalInfo = {
    name: "Andres Satoba",
    title: "Full Stack Developer",
    description:
      "Desarrollador apasionado por crear experiencias web excepcionales. Especializado en construir aplicaciones escalables y de alto rendimiento con las últimas tecnologías.",
    image: "/professional-development.jpg",
    github: "https://github.com/ASatobaTorres",
    linkedin: "https://www.linkedin.com/in/andres-satoba-fullstack",
    email: "andressatoba0@gmail.com",
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance text-glow-cyan">
                {personalInfo.name}
              </h1>
              <p className="text-2xl md:text-3xl text-primary font-medium">{personalInfo.title}</p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 text-pretty">
              {personalInfo.description}
            </p>

            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <MagneticButton size="lg" asChild>
                <a href="#projects">Ver Proyectos</a>
              </MagneticButton>
              <MagneticButton size="lg" variant="outline" asChild>
                <a href="#contact">Contacto</a>
              </MagneticButton>
            </div>

            {/* Social links */}
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:glow-cyan"
              >
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:glow-cyan"
              >
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-muted-foreground hover:text-primary transition-colors hover:glow-cyan"
              >
                <Mail className="w-6 h-6" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-full glow-cyan" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-2 border-primary glow-cyan">
                <Image
                  src={personalInfo.image || "/placeholder.svg"}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
