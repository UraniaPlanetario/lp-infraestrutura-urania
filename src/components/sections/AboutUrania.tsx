import { OutlineStars } from "../ui/OutlineStars";
import {
  MapPin,
  Users,
  Calendar,
  Projector,
  Rocket,
  Globe,
  GraduationCap,
  Star,
} from "lucide-react";

const stats = [
  { icon: MapPin, number: "20", label: "Estados atendidos" },
  { icon: Users, number: "2.000.000+", label: "Alunos impactados" },
  { icon: Calendar, number: "10", label: "Anos de experiência" },
];

const ecosystem = [
  { icon: Projector, text: "Planetário Móvel com projeção fulldome 4K nas escolas" },
  { icon: Rocket, text: "Parceria com Kennedy Space Center Visitor Complex (NASA)" },
  { icon: Globe, text: "App Urânia Class para continuidade pedagógica" },
  { icon: GraduationCap, text: "Webinars com especialistas e lives de observação" },
  { icon: Star, text: "Observatório proprietário" },
];

export function AboutUrania() {
  return (
    <section
      id="quem-somos"
      className="relative bg-white py-16 md:py-20 overflow-hidden"
    >
      <OutlineStars count={14} />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 md:px-8 lg:px-14">
        {/* Título */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-heading font-bold tracking-tight text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Quem é a Urânia
          </h2>
          <p className="mt-3 text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            A 1ª Infraestrutura de Educação Espacial do Brasil. Uma{" "}
            <span className="text-slate-900 font-medium">
              década dedicada a transformar escolas em polos astronômicos permanentes
            </span>
            .
          </p>
        </div>

        {/* Card */}
        <div className="rounded-lg border-2 border-primary/40 bg-primary/[0.03] p-5 sm:p-6 md:p-8 transition-shadow duration-200 hover:shadow-md">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
            {/* Logo */}
            <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 ring-1 ring-primary/40 flex items-center justify-center mx-auto sm:mx-0">
              <img
                src="/logo-urania.png"
                alt="Urânia Planetários e Observatórios"
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
              />
            </div>

            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-heading text-xl md:text-2xl font-bold text-slate-900 mb-1">
                Urânia Planetários e Observatórios
              </h3>
              <p className="text-sm md:text-base text-slate-700 mb-4">
                Muito mais que um produto — um ecossistema completo de educação
                espacial para escolas, gestores e famílias.
              </p>

              <p className="text-xs font-bold text-primary uppercase tracking-wide mb-2">
                O ecossistema
              </p>
              <ul className="space-y-2 text-sm md:text-base text-slate-800 text-left">
                {ecosystem.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-2">
                    <Icon className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mt-6 pt-5 border-t border-primary/20">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center gap-1.5 mb-0.5">
                  <stat.icon className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary" />
                  <div className="text-base sm:text-lg md:text-xl font-bold text-accent">
                    {stat.number}
                  </div>
                </div>
                <div className="text-[10px] sm:text-xs text-slate-600 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
