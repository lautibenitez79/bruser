import { Cable, Lightbulb, Wrench, LayoutGrid, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "./ScrollReveal";

const categories = [
  {
    icon: Cable,
    title: "Material Eléctrico",
    items: ["Cables de todo tipo", "Llaves térmicas", "Disyuntores", "Tableros eléctricos"],
    button: "Ver más cables.",
  },
  {
    icon: Lightbulb,
    title: "Iluminación",
    items: ["Lámparas LED", "Reflectores", "Tubos LED", "Artefactos de iluminación"],
    button: "Ver mas productos de iluminación.",
  },
  {
    icon: LayoutGrid,
    title: "Instalación",
    items: ["Caños y cajas eléctricas", "Canaletas", "Accesorios de montaje"],
    button: "Ver mas productos de instalación.",
  },
  {
    icon: Wrench,
    title: "Herramientas",
    items: ["Herramientas para electricistas", "Insumos profesionales"],
    button: "Ver mas herramientas.",
  },
];

export const ProductsSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-brand-warm">
      <div className="max-w-7xl mx-auto section-padding">
        <ScrollReveal>
          <p className="text-sm font-semibold tracking-widest uppercase text-brand-gray mb-3">Catálogo</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Todo para tu instalación eléctrica
          </h2>
          <p className="text-muted-foreground max-w-xl mb-16">
            Amplio stock de materiales eléctricos de primeras marcas. Asesoramiento técnico incluido.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 0.08}>
              <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow h-full border border-border/50">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <cat.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-3">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                    <li>
                      <span className="text-primary mt-0.5">•</span>
                          <Link 
                          to="/productos" className="text-sm m-2 hover:underline">
                            {cat.button}
                          </Link>
                    </li>
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-12">
            <Link
              to="/productos"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline underline-offset-4 transition-colors"
            >
              Ver catálogo completo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
