import { Star } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const reviews = [
  { name: "Martín R.", text: "Excelente atención. Siempre me asesoran bien y tienen todo lo que necesito para las obras.", rating: 5 },
  { name: "Carolina P.", text: "Muy buen local, variedad de productos y precios competitivos. Recomendado para electricistas.", rating: 5 },
  { name: "Diego L.", text: "Hace años compro ahí. Son serios, te orientan si no sabés y el stock es muy completo.", rating: 4 },
  { name: "Lucía M.", text: "Fui a comprar lámparas LED y me ayudaron a elegir las mejores para mi casa. Gran servicio.", rating: 5 },
  { name: "Fernando G.", text: "Buenos precios en cables y llaves térmicas. El personal sabe del tema y atiende rápido.", rating: 4 },
  { name: "Analía V.", text: "Siempre encuentro lo que busco. Atención rápida y buenas marcas. Mi proveedor de confianza.", rating: 5 },
];

export const ReviewsSection = () => {
  return (
    <section id="resenas" className="py-24 lg:py-32 bg-brand-warm">
      <div className="max-w-7xl mx-auto section-padding">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase text-brand-gray mb-3">Reseñas</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
                <Star className="w-5 h-5 fill-primary/50 text-primary" />
              </div>
              <span className="text-muted-foreground">4/5 — +400 opiniones</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <ScrollReveal key={review.name} delay={i * 0.07}>
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50 h-full flex flex-col">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                  {[...Array(5 - review.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-border" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground flex-1 mb-4">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-semibold text-secondary-foreground">
                    {review.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <span className="text-sm font-medium text-foreground">{review.name}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
