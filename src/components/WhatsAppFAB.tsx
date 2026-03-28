import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5401144626974?text=Hola%2C%20quiero%20consultar%20sobre%20materiales%20eléctricos";

export const WhatsAppFAB = () => {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[hsl(142,70%,41%)] rounded-full flex items-center justify-center shadow-lg shadow-[hsl(142,70%,41%)]/30 hover:shadow-xl active:scale-95 transition-all"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-[hsl(0,0%,100%)]" />
    </motion.a>
  );
};
