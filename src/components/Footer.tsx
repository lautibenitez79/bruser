import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import logoBruser from "@/assets/logo-bruser.png";

export const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <img src={logoBruser} alt="Electricidad Bruser" className="h-8 w-auto" />
            </Link>
            <p className="text-sm text-secondary-foreground/50 max-w-xs">
              Tu casa de electricidad en Buenos Aires. Materiales eléctricos e iluminación LED.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-secondary-foreground text-sm mb-4">Páginas</h4>
            <nav className="space-y-2">
              {[
                { label: "Inicio", to: "/" },
                { label: "Productos", to: "/productos" },
                { label: "Nosotros", to: "/nosotros" },
                { label: "Contacto", to: "/contacto" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-sm text-secondary-foreground/50 hover:text-secondary-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-display font-semibold text-secondary-foreground text-sm mb-4">Contacto</h4>
            <div className="space-y-2 text-sm text-secondary-foreground/50">
              <p>Av. Vélez Sarsfield 549, Buenos Aires</p>
              <p>011 4462-6974</p>
              <a
                href="https://instagram.com/bruser_electricidad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-secondary-foreground transition-colors"
              >
                <Instagram className="w-4 h-4" />
                @bruser_electricidad
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-secondary-foreground/10 text-center text-xs text-secondary-foreground/40">
          © {new Date().getFullYear()} Electricidad Bruser. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};
