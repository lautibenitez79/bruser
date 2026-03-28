import { Layout } from "@/components/Layout";
import { AboutSection } from "@/components/AboutSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { CTASection } from "@/components/CTASection";
import { ScrollReveal } from "@/components/ScrollReveal";

const Nosotros = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-brand-warm">
        <div className="max-w-7xl mx-auto section-padding">
          <ScrollReveal>
            <p className="text-sm font-semibold tracking-widest uppercase text-brand-gray mb-3">Sobre nosotros</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 leading-[1.08]">
              Electricidad Bruser
            </h1>
            <p className="text-muted-foreground max-w-xl text-lg">
              Tu casa de electricidad de confianza en Buenos Aires. Especialistas en materiales eléctricos e iluminación.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <AboutSection />
      <ReviewsSection />
      <CTASection />
    </Layout>
  );
};

export default Nosotros;
