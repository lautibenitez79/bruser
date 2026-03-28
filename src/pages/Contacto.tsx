import { Layout } from "@/components/Layout";
import { LocationSection } from "@/components/LocationSection";
import { CTASection } from "@/components/CTASection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Phone, MessageCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/5401144626974?text=Hola%2C%20quiero%20consultar%20sobre%20materiales%20eléctricos";

const Contacto = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-brand-warm">
        <div className="max-w-7xl mx-auto section-padding">
          <ScrollReveal>
            <p className="text-sm font-semibold tracking-widest uppercase text-brand-gray mb-3">Contacto</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 leading-[1.08]">
              Hablemos
            </h1>
            <p className="text-muted-foreground max-w-xl text-lg">
              Consultanos por WhatsApp, llamanos o visitá nuestro local. Estamos para ayudarte.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact methods */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid sm:grid-cols-3 gap-6 mb-20">
            <ScrollReveal delay={0}>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block h-full">
                <div className="bg-card rounded-xl p-8 border border-border/50 shadow-sm hover:shadow-md transition-shadow h-full text-center">
                  <div className="w-14 h-14 rounded-xl bg-[hsl(142,70%,41%)]/10 flex items-center justify-center mx-auto mb-5">
                    <MessageCircle className="w-7 h-7 text-[hsl(142,70%,41%)]" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground mb-4">Canal principal de consultas</p>
                  <Button variant="whatsapp" size="sm" className="w-full">Escribinos</Button>
                </div>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <a href="tel:01144626974" className="block h-full">
                <div className="bg-card rounded-xl p-8 border border-border/50 shadow-sm hover:shadow-md transition-shadow h-full text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <Phone className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">Teléfono</h3>
                  <p className="text-sm text-muted-foreground mb-4">011 4462-6974</p>
                  <Button variant="outline" size="sm" className="w-full">Llamar</Button>
                </div>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={0.16}>
              <a href="https://instagram.com/bruser_electricidad" target="_blank" rel="noopener noreferrer" className="block h-full">
                <div className="bg-card rounded-xl p-8 border border-border/50 shadow-sm hover:shadow-md transition-shadow h-full text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <Instagram className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">Instagram</h3>
                  <p className="text-sm text-muted-foreground mb-4">@bruser_electricidad</p>
                  <Button variant="outline" size="sm" className="w-full">Seguinos</Button>
                </div>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <LocationSection />
      <CTASection />
    </Layout>
  );
};

export default Contacto;
