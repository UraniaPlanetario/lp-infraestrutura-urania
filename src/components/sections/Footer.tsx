import { cn } from "../../lib/utils";
import { Phone, Mail, Globe } from "lucide-react";

const currentYear = new Date().getFullYear();

const PHONE_NUMBER = "+55 48 96136-0622";
const WHATSAPP_URL = "https://wa.me/5548961360622";
const EMAIL = "urania@uraniaplanetario.com.br";
const WEBSITE = "https://uraniaplanetario.com.br";

export function Footer() {
  const handleWhatsAppClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    try {
      const opened = window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
      if (!opened) throw new Error("Blocked");
    } catch {
      try {
        await navigator.clipboard.writeText(PHONE_NUMBER);
        alert(`Número copiado! ${PHONE_NUMBER}`);
      } catch {
        alert(`Por favor, copie manualmente: ${PHONE_NUMBER}`);
      }
    }
  };

  return (
    <footer id="footer" className="relative bg-background py-7 md:py-7">
      {/* Decorative overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-primary/5" />

      {/* Container */}
      <div className="relative z-10 w-full px-[5%] lg:px-[6%] xl:px-[8%]">
        {/* Top divider */}
        <div className="border-t border-border/60 mb-2 md:mb-5" />

        {/* Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-3 md:gap-4 items-center">
          {/* Col 1 — Logo */}
          <div className="flex justify-start sm:justify-center lg:justify-start">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded hover:opacity-80 transition-opacity duration-300"
              aria-label="Voltar ao topo"
            >
              <img
                src="/logo-urania.png"
                alt="URÂNIA Logo"
                className="h-9 sm:h-11 md:h-14 w-auto"
              />
            </a>
          </div>

          {/* Col 2 — Tagline */}
          <div className="text-center">
            <p className="text-[10px] sm:text-sm text-muted-foreground italic leading-tight sm:leading-relaxed">
              Aqui o céu
              <span className="sm:hidden">
                <br />
              </span>{" "}
              não é o limite
            </p>
          </div>

          {/* Col 3 — Contact icons */}
          <div className="flex justify-end sm:justify-center lg:justify-end space-x-2.5 sm:space-x-3 md:space-x-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              aria-label="WhatsApp"
              className={cn(
                "p-1.5 sm:p-2 md:p-2.5 rounded-lg",
                "text-foreground hover:text-primary hover:scale-110",
                "transition-all duration-300"
              )}
            >
              <Phone className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              aria-label="E-mail"
              className={cn(
                "p-1.5 sm:p-2 md:p-2.5 rounded-lg",
                "text-foreground hover:text-primary hover:scale-110",
                "transition-all duration-300"
              )}
            >
              <Mail className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            </a>
            <a
              href={WEBSITE}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website"
              className={cn(
                "p-1.5 sm:p-2 md:p-2.5 rounded-lg",
                "text-foreground hover:text-primary hover:scale-110",
                "transition-all duration-300"
              )}
            >
              <Globe className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            </a>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="border-t border-border/60 pt-3 md:pt-3 mt-3 md:mt-5">
          <p className="text-[10px] sm:text-xs text-muted-foreground text-center leading-relaxed">
            Urânia Labs &copy; {currentYear} – Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
