import { Code2, Rocket, Users } from "lucide-react"

export default function AboutSection() {
  const highlights = [
    {
      icon: Code2,
      title: "Código limpio",
      description: "Código limpio, mantenible y siguiendo las mejores prácticas",
    },
    {
      icon: Rocket,
      title: "Rendimiento",
      description: "Optimización y rendimiento en cada línea de código",
    },
    {
      icon: Users,
      title: "Trabajo en Equipo",
      description: "Experiencia con metodologías ágiles y Scrum",
    },
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Mí</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Desarrollador Full Stack con experiencia en crear aplicaciones web modernas y escalables. Apasionado por
            aprender nuevas tecnologías y resolver problemas complejos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-lg">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
