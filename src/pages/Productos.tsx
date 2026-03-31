import { Link } from "react-router-dom";
import { Cable, Lightbulb, Wrench, LayoutGrid, ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CTASection } from "@/components/CTASection";

const categories = [
  {
    icon: Cable,
    slug: "material-electrico",
    title: "Material Eléctrico",
    description: "Cables, llaves térmicas, disyuntores, tableros y fusibles de primeras marcas.",
    items: ["Cables unipolares y multipolares", "Llaves térmicas y diferenciales", "Disyuntores", "Tableros eléctricos", "Fusibles NH y cilíndricos", "Borneras y conectores"],
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Lightbulb,
    slug: "Lamparas",
    title: "Lamparas",
    description: "Lámparas LED, reflectores, tubos y artefactos para todo tipo de espacios.",
    items: ["Lámparas LED de bajo consumo", "Reflectores LED para exterior", "Tubos LED T8", "Artefactos de iluminación", "Dicroicas y spots", "Tiras LED y fuentes"],
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Lightbulb,
    slug: "Iluminación",
    title: "Iluminación",
    description: "Embutir, Semi Embutir, Iluminación de Techo, Iluminación de Pared, Iluminación de Exterior, Accesorios de Iluminación",
    items: ["Embutir, Semi Embutir", "Iluminación de Techo", "Iluminación de Pared", "Iluminación de Exterior", "Accesorios de Iluminación"],
    color: "bg-primary/10 text-primary",
  },
  {
    icon: LayoutGrid,
    slug: "instalacion",
    title: "Instalación",
    description: "Caños, cajas, canaletas y todo lo necesario para la instalación eléctrica.",
    items: ["Caños de PVC y metálicos", "Cajas de embutir y exterior", "Canaletas de PVC", "Precintos y accesorios", "Tapas y bastidores", "Módulos y placas"],
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Wrench,
    slug: "herramientas",
    title: "Herramientas",
    description: "Herramientas e insumos profesionales para electricistas.",
    items: ["Pinzas aisladas", "Destornilladores buscapolo", "Cintas aisladora y vulcanizante", "Multímetros", "Pelacables", "Insumos complementarios"],
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Cable,
    slug: "llave-de-luz",
    title: "Llaves de Luz",
    description: "Jeluz, Sica, Cambre",
    items: ["Jeluz Mito", "Jeluz Verona", "Jeluz Platinum", "Jeluz Regina", "Sica Life", "Cambre XXI", "Cambre XXII", "Cambre Bauhaus", "Cambre Arte"],
    color: "bg-primary/10 text-primary",
  },
];

const Productos = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-brand-warm">
        <div className="max-w-7xl mx-auto section-padding">
          <ScrollReveal>
            <p className="text-sm font-semibold tracking-widest uppercase text-brand-gray mb-3">Catálogo</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 leading-[1.08]">
              Nuestros productos
            </h1>
            <p className="text-muted-foreground max-w-xl text-lg">
              Amplio stock de materiales eléctricos de primeras marcas con asesoramiento técnico incluido.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="space-y-20">
            {categories.map((cat, i) => (
              <ScrollReveal key={cat.slug} delay={i * 0.05}>
                <div className="grid lg:grid-cols-2 gap-10 items-start" id={cat.slug}>
                  <div>
                    <div className={`w-14 h-14 rounded-xl ${cat.color} flex items-center justify-center mb-5`}>
                      <cat.icon className="w-7 h-7" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                      {cat.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {cat.description}
                    </p>
                    <a
                      href="https://wa.me/5401144626974?text=Hola%2C%20quiero%20consultar%20sobre%20materiales%20eléctricos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline underline-offset-4 transition-colors"
                    >
                      Consultá precios
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                  <div className="bg-card rounded-xl p-6 border border-border/50 shadow-sm">
                    <h3 className="text-sm font-semibold text-brand-gray uppercase tracking-wider mb-4">Productos destacados</h3>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {cat.items.map((item) => (
                        <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Productos;
