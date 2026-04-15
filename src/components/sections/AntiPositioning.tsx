import { OutlineStars } from "../ui/OutlineStars";
import { X, Check } from "lucide-react";

const oMercado = [
  "Tendas infláveis pontuais",
  "Eventos de um dia, esquecidos na semana seguinte",
  "Aluguel de equipamento sem suporte",
  "Entretenimento desconectado do currículo",
  "Sem continuidade, sem método, sem rigor",
];

const aUrania = [
  "Ecossistema completo e permanente",
  "Jornada estruturada pré, durante e pós-evento",
  "Frota própria de domos fulldome 4K",
  "Imersão científica com rigor técnico",
  "Memória visual e impacto intelectual duradouro",
];

export function AntiPositioning() {
  return (
    <section
      id="diferenca"
      className="relative bg-white py-16 md:py-20 overflow-hidden"
    >
      <OutlineStars count={14} />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 md:px-8 lg:px-14">
        {/* Cabeçalho */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[10px] sm:text-xs font-heading font-bold tracking-[0.2em] uppercase text-primary/70 mb-3">
            O que nos diferencia
          </p>
          <h2 className="font-heading font-bold tracking-tight text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
            O mercado aluga tendas.
            <span className="block mt-1 md:mt-2">
              Nós construímos um <span className="text-accent">ecossistema</span>.
            </span>
          </h2>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            O ensino de ciências foi reduzido a parágrafos de livro didático e
            maquetes de isopor. Para compensar, o mercado criou uma solução
            paliativa:{" "}
            <span className="text-slate-900 font-medium">
              tendas alugadas e atividades de um dia
            </span>
            . Isso não é ciência — é entretenimento isolado, esquecido assim que
            o equipamento vai embora.
          </p>
        </div>

        {/* Comparativo 2 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Coluna esquerda — O mercado */}
          <div className="rounded-lg border-2 border-slate-300 bg-slate-50 p-5 md:p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
              O mercado oferece
            </p>
            <ul className="space-y-3">
              {oMercado.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-slate-200">
                    <X className="h-3 w-3 text-slate-500" strokeWidth={3} />
                  </span>
                  <span className="text-sm md:text-base text-slate-500 line-through decoration-slate-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna direita — A Urânia */}
          <div className="rounded-lg border-2 border-primary/60 bg-primary/[0.05] p-5 md:p-6 shadow-md shadow-primary/10">
            <p className="text-xs font-bold uppercase tracking-wider text-primary mb-4">
              A Urânia entrega
            </p>
            <ul className="space-y-3">
              {aUrania.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/20">
                    <Check className="h-3 w-3 text-primary" strokeWidth={3} />
                  </span>
                  <span className="text-sm md:text-base text-slate-800 font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Frase de fechamento */}
        <div className="mt-10 md:mt-14 text-center">
          <p className="text-base md:text-xl font-heading italic text-slate-700 max-w-2xl mx-auto">
            "A próxima geração precisa olhar pro céu novamente — não com
            nostalgia, com{" "}
            <span className="text-purple-400 font-bold not-italic">método</span>."
          </p>
        </div>
      </div>
    </section>
  );
}
