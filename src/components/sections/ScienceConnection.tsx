import { OutlineStars } from "../ui/OutlineStars";
import { Satellite, User, Radio } from "lucide-react";

const connections = [
  {
    icon: Satellite,
    title: "Conexão Global",
    subtitle: "Webinars com a NASA",
    description:
      "Diálogos exclusivos com profissionais do Kennedy Space Center Visitor Complex, trazendo a fronteira da ciência espacial diretamente para o cotidiano escolar.",
    highlight: "Mensal",
  },
  {
    icon: User,
    title: "Observação Guiada",
    subtitle: "Prof. Dr. Marcos Calil",
    description:
      "Lives de análise técnica do céu com o astrônomo observacional referência no Brasil. Rigor científico ao vivo, semana após semana.",
    highlight: "Semanal",
  },
  {
    icon: Radio,
    title: "Interação ao Vivo",
    subtitle: "Especialistas e astronautas",
    description:
      "Espaço aberto para perguntas dos alunos com cientistas, pesquisadores e astronautas. A sala de aula deixa de ter parede.",
    highlight: "Sob demanda",
  },
];

export function ScienceConnection() {
  return (
    <section
      id="pilar-autoridade-cientifica"
      className="relative bg-white py-16 md:py-20 overflow-hidden"
    >
      <OutlineStars count={10} />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-14">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[10px] sm:text-xs font-heading font-bold tracking-[0.2em] uppercase text-primary/70 mb-3">
            Pilar 3 · Autoridade Científica
          </p>
          <h2 className="font-heading font-bold tracking-tight text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
            A ciência de verdade entra na sua{" "}
            <span className="text-accent">sala de aula</span>.
          </h2>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Não é divulgação científica de palco. É contato direto com quem{" "}
            <span className="text-slate-900 font-medium">faz</span> ciência:
            profissionais da NASA, astrônomos observacionais e astronautas que
            já estiveram no espaço.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {connections.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border-2 border-primary/40 bg-primary/[0.03] p-4 sm:p-5 md:p-6 transition-shadow duration-200 hover:shadow-md"
            >
              {/* Badge de frequência */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon
                    className="h-6 w-6 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {item.highlight}
                </span>
              </div>

              <h3 className="font-heading font-semibold text-slate-800 text-lg sm:text-xl">
                {item.title}
              </h3>
              <p className="text-sm font-medium text-primary mt-0.5">
                {item.subtitle}
              </p>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
