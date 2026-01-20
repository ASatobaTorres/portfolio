import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, MessageSquare, Download } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trabajemos Juntos</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él y ver cómo puedo ayudarte.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6 bg-card hover:bg-secondary/50 transition-colors">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground mb-3">Envíame un correo y te responderé lo antes posible</p>
                <a href="andressatoba0@gmail.com" className="text-primary hover:underline text-sm">
                  andressatoba0@gmail.com
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card hover:bg-secondary/50 transition-colors">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <MessageSquare className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <p className="text-sm text-muted-foreground mb-3">Conectemos y conversemos sobre oportunidades</p>
                <a
                  href="https://www.linkedin.com/in/andres-satoba-fullstack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline text-sm"
                >
                  Ver perfil
                </a>
              </div>
            </div>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="andressatoba0gmail.com">
              <Mail className="w-4 h-4 mr-2" />
              Enviar Email
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/Andrés Satoba – CV – Backend Developer.pdf" download>
              <Download className="w-4 h-4 mr-2" />
              Descargar CV
            </a>
          </Button>
        </div>

        <footer className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 Andres Satoba. Todos los derechos reservados.</p>
          <p className="mt-2">Construido con React, TypeScript y Next.js</p>
        </footer>
      </div>
    </section>
  )
}
