import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "./ScrollReveal";

const WHATSAPP_URL = "https://wa.me/5401144626974?text=Hola%2C%20quiero%20consultar%20sobre%20materiales%20eléctricos";

export const CTASection = () => {
  return (
    <section className="py-24 lg:py-32 bg-brand-gradient">
      <div className="max-w-7xl mx-auto section-padding text-center">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-foreground mb-4">
            ¿Necesitás materiales eléctricos?
          </h2>
          <p className="text-secondary-foreground/70 mb-8 max-w-md mx-auto">
            Escribinos por WhatsApp y te asesoramos sin compromiso. Presupuestos al instante.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="lg" className="text-base px-10">
              Escribinos ahora
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};