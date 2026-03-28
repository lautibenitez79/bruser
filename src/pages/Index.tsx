import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/hero/HeroSection";
import { ProductsSection } from "@/components/ProductsSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProductsSection />
      <ReviewsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
