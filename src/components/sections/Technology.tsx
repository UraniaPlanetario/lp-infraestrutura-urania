import { StarryBackground } from "../ui/StarryBackground";
import {
  Monitor,
  Maximize,
  Award,
  Projector,
  Globe,
  Waves,
  Dna,
  Bone,
} from "lucide-react";

const specs = [
  {
    icon: Projector,
    label: "Projeção 360°",
    description: "Domo inflável com cobertura imersiva completa",
  },
  {
    icon: Monitor,
    label: "Resolução 4K",
    description: "Experiência cinematográfica de alta fidelidade visual",
  },
  {
    icon: Maximize,
    label: "Sem obras",
    description: "Estrutura portátil, instalação rápida na sua escola",
  },
  {
    icon: Award,
    label: "Padrão internacional",
    description: "Qualidade de referência mundial em difusão científica",
  },
];

const axes = [
  {
    icon: Globe,
    title: "Cosmologia e Astronomia",
    description: "A compreensão do Universo, do sistema solar às galáxias distantes.",
    color: "text-purple-300",
    border: "border-purple-400/40",
    bg: "bg-purple-500/[0.06]",
  },
  {
    icon: Waves,
    title: "Biologia Marinha",
    description: "Uma imersão nas profundezas do oceano e seus ecossistemas.",
    color: "text-blue-300",
    border: "border-blue-400/40",
    bg: "bg-blue-500/[0.06]",
  },
  {
    icon: Dna,
    title: "Anatomia Humana",
    description: "O funcionamento sistêmico e a complexidade do corpo humano.",
    color: "text-rose-300",
    border: "border-rose-400/40",
    bg: "bg-rose-500/[0.06]",
  },
  {
    icon: Bone,
    title: "Paleontologia",
    description: "A história da Terra e a evolução das espécies.",
    color: "text-amber-300",
    border: "border-amber-400/40",
    bg: "bg-amber-500/[0.06]",
  },
];

export function Technology() {
  return (
    <section
      id="pilar-imersao-fisica"
      className="relative py-16 md:py-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, hsl(229 35% 6%) 0%, hsl(270 25% 10%) 50%, hsl(229 35% 6%) 100%)",
      }}
    >
      <StarryBackground count={50} />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-14">
        {/* Cabeçalho do Pilar */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[10px] sm:text-xs font-heading font-bold tracking-[0.2em] uppercase text-accent mb-3">
            Pilar 1 · Imersão Física
          </p>
          <h2 className="font-heading font-bold tracking-tight text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
            A quadra da escola vira um{" "}
            <span className="text-accent">portal pro cosmos</span>.
          </h2>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-foreground/75 leading-relaxed max-w-2xl mx-auto">
            Nossa frota de domos fulldome 4K transforma qualquer espaço escolar
            em um centro de difusão científica de padrão internacional.{" "}
            <span className="text-foreground font-medium">
              Em horas. Sem obras. Sem reformas.
            </span>
          </p>
        </div>

        {/* Bloco Tecnologia: Imagem + Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-14 md:mb-20">
          {/* Placeholder imagem */}
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-2xl border-2 border-primary/60 bg-card/40 backdrop-blur-sm overflow-hidden flex items-center justify-center">
              <div className="text-center p-6">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <Projector className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">
                  {`{{foto-domo-quadra-escola}}`}
                </p>
                <p className="text-xs text-muted-foreground/60 mt-1">
                  Placeholder — substituir com foto real do domo
                </p>
              </div>
              <div className="absolute -inset-1 rounded-2xl bg-primary/15 blur-xl -z-10" />
            </div>
          </div>

          {/* Specs */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex items-start gap-3 rounded-lg border border-primary/30 bg-primary/10 p-3 md:p-4 transition-colors duration-200 hover:bg-primary/15"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                    <spec.icon
                      className="h-5 w-5 text-accent"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground text-sm sm:text-base">
                      {spec.label}
                    </h3>
                    <p className="mt-0.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {spec.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sub-bloco: Eixos de Exploração */}
        <div>
          <div className="text-center mb-8 md:mb-10">
            <h3 className="font-heading font-bold tracking-tight text-foreground text-xl sm:text-2xl md:text-3xl">
              Quatro áreas do saber,{" "}
              <span className="text-accent">uma única experiência</span>.
            </h3>
            <p className="mt-2 text-sm md:text-base text-foreground/60">
              O mesmo domo, múltiplos universos de exploração.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {axes.map((axis) => (
              <div
                key={axis.title}
                className={`rounded-lg border-2 ${axis.border} ${axis.bg} backdrop-blur-sm p-4 sm:p-5 text-center transition-all duration-200 hover:scale-[1.02]`}
              >
                <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-card/60">
                  <axis.icon
                    className={`h-5 w-5 ${axis.color}`}
                    aria-hidden="true"
                  />
                </div>
                <h4 className="font-heading font-semibold text-foreground text-sm sm:text-base">
                  {axis.title}
                </h4>
                <p className="mt-1.5 text-xs sm:text-sm text-foreground/60 leading-relaxed">
                  {axis.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
