import { StarryBackground } from "../ui/StarryBackground";
import { BookOpen, Star, Wifi, ArrowRight } from "lucide-react";

const phases = [
  {
    number: "01",
    label: "Pré-evento",
    title: "Curadoria e Repertório",
    description:
      "Oficinas online para professores e materiais pedagógicos que preparam o terreno intelectual antes da imersão. Seu time chega no dia do planetário com domínio do conteúdo.",
    icon: BookOpen,
    accent: "border-muted-foreground/40",
    iconColor: "text-muted-foreground",
    iconBg: "bg-muted",
  },
  {
    number: "02",
    label: "Dia do Planetário",
    title: "Imersão Cognitiva",
    description:
      "Sessões conduzidas por planetaristas com linguagem adaptada ao nível de cada turma. A ciência não é narrada — é vivida.",
    icon: Star,
    accent: "border-primary/60",
    iconColor: "text-primary",
    iconBg: "bg-primary/20",
  },
  {
    number: "03",
    label: "Pós-evento",
    title: "A Fronteira Digital",
    description:
      "Webinars com especialistas, lives de observação e conteúdos de aprofundamento. A jornada continua no digital, garantindo fixação e expansão do conhecimento.",
    icon: Wifi,
    accent: "border-accent/60",
    iconColor: "text-accent",
    iconBg: "bg-accent/15",
  },
];

export function Journey() {
  return (
    <section id="pilar-engajamento-continuo" className="relative bg-background py-16 md:py-20 overflow-hidden">
      <StarryBackground count={60} />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-14">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[10px] sm:text-xs font-heading font-bold tracking-[0.2em] uppercase text-accent mb-3">
            Pilar 2 · Engajamento Contínuo
          </p>
          <h2 className="font-heading font-bold tracking-tight text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
            Antes, durante e depois.{" "}
            <span className="block mt-1 md:mt-2">
              A jornada não acaba quando o domo{" "}
              <span className="text-accent">desmonta</span>.
            </span>
          </h2>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-foreground/75 leading-relaxed max-w-2xl mx-auto">
            A imersão é só o pico. A Urânia ativa a curiosidade dos alunos{" "}
            <span className="text-foreground font-medium">antes</span> da nossa
            chegada e mantém a conversa científica viva{" "}
            <span className="text-foreground font-medium">depois</span>.
            Espectadores passivos viram comunidade engajada.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Linha conectora (desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-muted-foreground/20 via-primary/40 to-accent/40 -translate-y-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            {phases.map((phase, index) => (
              <div key={phase.number} className="relative">
                {/* Seta entre cards (mobile) */}
                {index < phases.length - 1 && (
                  <div className="flex justify-center py-2 lg:hidden">
                    <ArrowRight className="h-5 w-5 text-muted-foreground/40 rotate-90" aria-hidden="true" />
                  </div>
                )}

                <div
                  className={`relative backdrop-blur-sm border-2 ${phase.accent} bg-card/80 rounded-lg p-4 sm:p-5 md:p-6 h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/7`}
                >
                  {/* Número + Label */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-heading font-bold text-muted-foreground/40">
                      {phase.number}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {phase.label}
                    </span>
                  </div>

                  {/* Ícone */}
                  <div
                    className={`mb-3 flex h-12 w-12 items-center justify-center rounded-lg ${phase.iconBg}`}
                  >
                    <phase.icon
                      className={`h-6 w-6 ${phase.iconColor}`}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Conteúdo */}
                  <h3 className="font-heading font-semibold text-foreground text-lg sm:text-xl">
                    {phase.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
