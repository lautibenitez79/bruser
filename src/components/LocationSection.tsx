import { MapPin, Clock, Phone } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export const LocationSection = () => {
  return (
    <section id="ubicacion" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto section-padding">
        <ScrollReveal>
          <p className="text-sm font-semibold tracking-widest uppercase text-brand-gray mb-3">Ubicación</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
            Visitanos en nuestro local
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          <ScrollReveal direction="left">
            <div className="rounded-xl overflow-hidden shadow-md border border-border/50 h-[400px]">
              <iframe
                title="Ubicación de Electricidad Bruser"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.5!2d-58.39!3d-34.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM3JzQ4LjAiUyA1OMKwMjMnMjQuMCJX!5e0!3m2!1ses!2sar!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">Dirección</h3>
                  <p className="text-muted-foreground">Av. Vélez Sarsfield 549, Buenos Aires</p>
                  <p className="text-sm text-muted-foreground/70 mt-1">Zona con alto movimiento comercial</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">Teléfono</h3>
                  <a href="tel:01144626974" className="text-muted-foreground hover:text-foreground transition-colors">
                    011 4462-6974
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">Horarios</h3>
                  <p className="text-muted-foreground">Lunes a Viernes: 8:00 – 18:00</p>
                  <p className="text-muted-foreground">Sábados: 8:00 – 13:00</p>
                  <p className="text-sm text-muted-foreground/70 mt-1">Consultá horarios especiales</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
