"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const projects = [
    {
      title: "FixPoint",
      description:
        "Plataforma de reservas y gestión de profesionales",
      image: "/modern-ecommerce-dashboard.png",
      technologies: [
"Next.js (React, App Router)",
"TypeScript",
"TailwindCSS",
"Axios para requests",
"NestJS",
"TypeORM",
"PostgreSQL",
"JWT para autenticación"],
      github: "https://github.com/grupo63/fixPoint",
      demo: "https://github.com/grupo63/fixPoint",
    },
    {
      title: "Proyecto E-commerce",
      description: "Aplicación Backend: Este es un proyecto de tienda en línea desarrollado como ejercicio académico. Permite a los usuarios registrarse, iniciar sesión, visualizar productos, realizar compras mediante un carrito y generar órdenes de compra.",
      image: "/task-management-app.png",
        technologies: ["TypeScript", "Javascript"],
      github: "https://github.com/ASatobaTorres/Proyecto-E-commerce-Back",
      demo: "https://github.com/ASatobaTorres/Proyecto-E-commerce-Back",
    },
    {
      title: "Full-Stack-Henry",
      description: "App full stack para reservar turnos en cancha sintética. Permite ver disponibilidad, agendar, evitar solapamientos y gestionar usuarios. Hecha con React, Node.js, Express y MongoDB. Funciona en local.",
      image: "/analytics-dashboard.png",
      technologies: ["TypeScript 40.5%","JavaScript 39.5%", "CSS 19.4%", "HTML 0.6%"],
      github: "https://github.com/ASatobaTorres/Full-Stack-Henry",
      demo: "https://github.com/ASatobaTorres/Full-Stack-Henry",
    },
  ]

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const currentProject = projects[currentIndex]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proyectos Destacados</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Algunos de mis trabajos más recientes</p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Image side */}
              <div className="relative h-64 lg:h-[400px] rounded-lg overflow-hidden">
                <Image
                  src={currentProject.image || "/placeholder.svg"}
                  alt={currentProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content side */}
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">{currentProject.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{currentProject.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {currentProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button asChild>
                    <a href={currentProject.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Demo
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={currentProject.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button variant="outline" size="icon" onClick={prevProject} className="rounded-full bg-transparent">
              <ChevronLeft className="w-5 h-5" />
              <span className="sr-only">Proyecto anterior</span>
            </Button>

            <div className="flex items-center gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Ir al proyecto ${index + 1}`}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={nextProject} className="rounded-full bg-transparent">
              <ChevronRight className="w-5 h-5" />
              <span className="sr-only">Siguiente proyecto</span>
            </Button>
          </div>

          {/* Project counter */}
          <div className="text-center mt-4 text-sm text-muted-foreground">
            Proyecto {currentIndex + 1} de {projects.length}
          </div>
        </div>
      </div>
    </section>
  )
}
