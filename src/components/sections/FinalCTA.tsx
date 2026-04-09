import { StarryBackground } from "../ui/StarryBackground";
import { Calendar } from "lucide-react";
import { AGENDAMENTO_URL } from "../../lib/constants";

export function FinalCTA() {
  return (
    <section
      id="agendar"
      className="relative bg-background py-20 md:py-28 overflow-hidden"
    >
      <StarryBackground count={80} />

      {/* Glow central */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 md:px-8 lg:px-14 text-center">
        {/* Headline */}
        <h2 className="font-heading font-bold tracking-tight text-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
          A próxima geração precisa olhar pro{" "}
          <span className="text-accent">céu</span> novamente.
        </h2>

        {/* Subheadline */}
        <p className="mt-6 md:mt-8 text-base md:text-lg text-foreground/75 leading-relaxed max-w-2xl mx-auto">
          Conversa direta com o nosso time.{" "}
          <span className="text-foreground font-medium">
            Sem proposta padronizada, sem compromisso.
          </span>{" "}
          A gente entende a sua escola e desenha o que faz sentido.
        </p>

        {/* CTA grande */}
        <div className="mt-10 md:mt-12">
          <a
            href={AGENDAMENTO_URL}
            className="inline-flex items-center justify-center gap-3 h-16 px-10 md:px-14 rounded-lg bg-primary text-primary-foreground font-heading font-bold text-lg md:text-xl shadow-xl shadow-primary/40 hover:scale-105 hover:shadow-primary/60 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Calendar className="h-6 w-6" aria-hidden="true" />
            Agendar videochamada
          </a>
          <p className="mt-4 text-xs sm:text-sm text-foreground/50">
            15 minutos · Sem compromisso · Diretamente com nosso time
          </p>
        </div>
      </div>
    </section>
  );
}
