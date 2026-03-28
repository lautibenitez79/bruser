import { ScrollReveal } from "./ScrollReveal";
import { ShieldCheck, Users, Award } from "lucide-react";

const values = [
  { icon: ShieldCheck, title: "Confianza", desc: "Años de experiencia en el rubro respaldados por más de 400 reseñas positivas." },
  { icon: Users, title: "Asesoramiento", desc: "Te ayudamos a elegir el material correcto para tu proyecto, sin importar su tamaño." },
  { icon: Award, title: "Calidad", desc: "Trabajamos con las mejores marcas del mercado para garantizar durabilidad y seguridad." },
];

export const AboutSection = () => {
  return (
    <section id="nosotros" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <ScrollReveal direction="left">
            <p className="text-sm font-semibold tracking-widest uppercase text-brand-gray mb-3">Sobre nosotros</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Más que una casa de electricidad
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              En <strong className="text-foreground">Electricidad Bruser</strong> somos especialistas en materiales eléctricos 
              e iluminación. Desde nuestro local en Av. Vélez Sarsfield 549, atendemos a electricistas, técnicos, empresas 
              y particulares con la misma dedicación.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nuestro diferencial es el asesoramiento técnico personalizado: no solo te vendemos el material, 
              te ayudamos a encontrar la mejor solución para tu proyecto.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="space-y-6">
              {values.map((v) => (
                <div key={v.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <v.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">{v.title}</h3>
                    <p className="text-sm text-muted-foreground">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
