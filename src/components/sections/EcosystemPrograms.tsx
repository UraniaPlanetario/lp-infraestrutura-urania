import { OutlineStars } from "../ui/OutlineStars";
import { Telescope, Rocket, Smartphone, ArrowUpRight } from "lucide-react";
import { APP_URANIA_CLASS_URL } from "../../lib/constants";

const programs = [
  {
    icon: Telescope,
    name: "Clube Astronômico Urânia",
    tagline: "Astronomia o ano inteiro na sua escola",
    description:
      "Programa completo de 12 meses com telescópio, curso, encontros mensais e suporte contínuo. Transforma a curiosidade dos seus alunos em prática astronômica real.",
    cta: "Conhecer o Clube",
    href: "https://clube.uraniaplanetario.com.br/publico-geral",
  },
  {
    icon: Rocket,
    name: "Encontro com o Astronauta",
    tagline: "Don Thomas (NASA/KSC) ao vivo com educadores",
    description:
      "Encontro gratuito para professores em parceria com o Kennedy Space Center. Inspire hoje os cientistas do amanhã com quem já viveu o espaço.",
    cta: "Conhecer o evento",
    href: "https://encontro-com-astronauta.uraniaplanetario.com.br/",
  },
  {
    icon: Smartphone,
    name: "App Urânia Class",
    tagline: "A jornada espacial na palma da mão",
    description:
      "Aplicativo próprio que estende o conteúdo do planetário pra dentro da sala de aula. Materiais interativos, continuidade pedagógica e acompanhamento dos alunos no dia a dia.",
    cta: "Conhecer o App",
    href: APP_URANIA_CLASS_URL,
  },
];

export function EcosystemPrograms() {
  return (
    <section
      id="programas"
      className="relative bg-background py-16 md:py-20 overflow-hidden"
    >
      <OutlineStars count={12} />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-14">
        {/* Título */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-heading font-bold tracking-tight text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Faz parte deste{" "}
            <span className="text-primary">ecossistema</span>
          </h2>
          <p className="mt-3 text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
            A infraestrutura Urânia viabiliza programas que estendem a
            experiência espacial muito além do domo móvel.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {programs.map(({ icon: Icon, name, tagline, description, cta, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-lg border-2 border-primary/40 bg-primary/[0.06] p-5 sm:p-6 md:p-7 transition-all duration-300 hover:border-primary/70 hover:bg-primary/[0.10] hover:shadow-[0_0_30px_-5px_hsl(263,70%,60%/0.4)] hover:-translate-y-0.5"
            >
              {/* Header com ícone + arrow */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-lg bg-primary/15 ring-1 ring-primary/30">
                  <Icon className="h-6 w-6 md:h-7 md:w-7 text-primary" aria-hidden="true" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-primary/60 group-hover:text-accent group-hover:scale-110 transition-all duration-300" />
              </div>

              <h3 className="font-heading text-lg md:text-xl font-bold text-foreground mb-1">
                {name}
              </h3>
              <p className="text-sm font-medium text-accent mb-3">
                {tagline}
              </p>
              <p className="text-sm text-foreground/75 leading-relaxed mb-5">
                {description}
              </p>

              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                {cta}
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
