import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";


export const HeroSlide = ({ slide }: any) => {
  return (
    <div className="relative min-h-[85vh] flex items-center overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={slide.image}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-gradient opacity-85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto section-padding py-24 w-full">
        <div className="max-w-2xl">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white mb-6"
          >
            {slide.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg text-white/70 mb-8"
          >
            {slide.description}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20, filter: "blur(4px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col sm:flex-row gap-3" > 
            <a href={slide.link} target="_blank" rel="noopener noreferrer"> 
                <Button variant="whatsapp" size="lg" className="text-base px-8"> 
                    {slide.button} <ArrowRight className="w-4 h-4 ml-1" /> 
                </Button>
            </a> 
            <Link to="/productos">
                <Button variant="hero" size="lg" className="text-base px-8 border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10"> 
                    Ver productos 
                </Button> 
            </Link> 
          </motion.div>
        </div>
      </div>
    </div>
  );
};