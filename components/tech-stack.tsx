import Link from "next/link" // Asegúrate de tener esto importado
import { Badge } from "@/components/ui/badge"

export default function TechStack() {
  const technologies = [
    { name: "TypeScript", category: "language" },
    { name: "HTML", category: "language" },
    { name: "React", category: "frontend" },
    { name: "Redux", category: "frontend" },
    { name: "Redux Toolkit", category: "frontend" },
    { name: "Material UI", category: "frontend" },
    { name: "Express", category: "backend" },
    { name: "MongoDB", category: "database" },
    { name: "PostgreSQL", category: "database" },
    { name: "Authentication", category: "security" },
    { name: "Testing", category: "quality" },
    { name: "Scrum", category: "methodology" },
    { name: "GitHub", category: "tools" },
  ]

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      language: "bg-primary/10 text-primary border-primary/20",
      frontend: "bg-accent/10 text-accent border-accent/20",
      backend: "bg-chart-3/10 text-chart-3 border-chart-3/20",
      database: "bg-chart-4/10 text-chart-4 border-chart-4/20",
      security: "bg-chart-5/10 text-chart-5 border-chart-5/20",
      quality: "bg-chart-2/10 text-chart-2 border-chart-2/20",
      methodology: "bg-primary/10 text-primary border-primary/20",
      tools: "bg-accent/10 text-accent border-accent/20",
    }
    return colors[category] || "bg-secondary text-secondary-foreground"
  }

  return (
    <section id="tech-stack" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stack Tecnológico</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tecnologías y herramientas con las que trabajo
          </p>
        </div>

        { <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
        {technologies.map((tech, index) => (

          <Link
            key={index}
            href={`/projects/${tech.name.toLowerCase().replace(/\s+/g, "-")}`}
            className="inline-block"
          >
            <Badge
              variant="outline"
              className={`px-4 py-2 text-sm font-medium cursor-pointer ${getCategoryColor(tech.category)}`}
            >
              {tech.name}
            </Badge>
          </Link>

        ))}
        </div>}

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-1">2+</div>
            <div className="text-sm text-muted-foreground">Años de Experiencia</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-1">3+</div>
            <div className="text-sm text-muted-foreground">Proyectos Completados</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-1">14</div>
            <div className="text-sm text-muted-foreground">Tecnologías</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-1">100%</div>
            <div className="text-sm text-muted-foreground">Dedicación</div>
          </div>
        </div>
      </div>
    </section>
  )
}
