import { StarryBackground } from "../ui/StarryBackground";
import { Video, MapPin, Users, Calendar } from "lucide-react";
import { AGENDAMENTO_URL } from "../../lib/constants";

const stats = [
  { icon: MapPin, number: "20", label: "Estados atendidos" },
  { icon: Users, number: "+2.000.000", label: "Alunos impactados" },
  { icon: Calendar, number: "10", label: "Anos transformando escolas" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-background overflow-hidden"
    >
      <StarryBackground count={120} />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 md:px-8 lg:px-14 pt-16 md:pt-20 pb-16 md:pb-20 w-full text-center">
        {/* Microtexto institucional */}
        <p className="text-[10px] sm:text-xs font-heading font-medium tracking-[0.2em] uppercase text-foreground/70 mb-4 md:mb-6">
          Urânia Planetários e Observatórios
        </p>

        {/* Headline manifesto */}
        <h1 className="font-heading font-bold tracking-tight text-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
          A Urânia <span className="text-accent">não faz eventos.</span>
          <span className="block mt-2 md:mt-3">
            Construímos a 1ª{" "}
            <span className="text-primary">Infraestrutura de Educação Espacial</span>{" "}
            do Brasil.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 md:mt-8 text-base md:text-lg text-foreground/75 leading-relaxed max-w-2xl mx-auto">
          A infraestrutura definitiva para educação espacial e científica na sua
          escola. Um ecossistema completo que transforma conceitos abstratos em{" "}
          <span className="text-foreground font-medium">
            memória visual e impacto intelectual duradouro
          </span>
          .
        </p>

        {/* Stats inline */}
        <div className="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.08] px-3 sm:px-4 py-1.5 sm:py-2 backdrop-blur-sm"
            >
              <stat.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
              <span className="text-sm sm:text-base font-bold text-accent">
                {stat.number}
              </span>
              <span className="text-[11px] sm:text-xs text-foreground/70">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Mídia central — vídeo institucional */}
        <div className="mt-10 md:mt-14 mx-auto w-full max-w-3xl">
          <div className="relative aspect-video rounded-2xl border-2 border-primary/50 bg-card/40 backdrop-blur-sm overflow-hidden flex items-center justify-center">
            {/* Glow */}
            <div className="absolute -inset-1 rounded-2xl bg-primary/20 blur-2xl -z-10" />
            <div className="text-center p-6">
              <div className="mx-auto mb-4 h-16 w-16 md:h-20 md:w-20 rounded-full bg-primary/20 flex items-center justify-center">
                <Video className="h-8 w-8 md:h-10 md:w-10 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">
                {`{{video-hero-institucional}}`}
              </p>
              <p className="text-xs text-muted-foreground/60 mt-1">
                Placeholder — substituir com vídeo institucional (15-30s)
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 md:mt-12">
          <a
            href={AGENDAMENTO_URL}
            className="inline-flex items-center justify-center gap-2 h-14 px-8 md:px-12 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-base md:text-lg shadow-lg shadow-primary/30 hover:scale-105 hover:shadow-primary/50 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Agendar conversa com a Urânia
          </a>
          <p className="mt-3 text-xs text-foreground/50">
            15 minutos · Sem compromisso · Diretamente com nosso time
          </p>
        </div>
      </div>
    </section>
  );
}
