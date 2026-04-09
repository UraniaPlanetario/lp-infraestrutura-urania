import { useMemo } from "react";

interface StarryBackgroundProps {
  count?: number;
}

export function StarryBackground({ count = 70 }: StarryBackgroundProps) {
  const stars = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      // 70% nas bordas (0-20% e 80-100%), 30% no miolo
      const isBorder = Math.random() < 0.7;
      const left = isBorder
        ? Math.random() < 0.5
          ? Math.random() * 20
          : 80 + Math.random() * 20
        : 20 + Math.random() * 60;
      const top = Math.random() * 100;

      // Cores: 25% branca, 25% dourado, 50% amarelo claro
      const colorRoll = Math.random();
      const color =
        colorRoll < 0.25
          ? "#ffffff"
          : colorRoll < 0.5
            ? "#EAB308"
            : "#FDE68A";

      const size = 1 + Math.random() * 2;
      const opacity = 0.1 + Math.random() * 0.4;
      const delay = Math.random() * 3;
      const duration = 1.5 + Math.random() * 1;

      return { id: i, left, top, color, size, opacity, delay, duration };
    });
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full animate-twinkle will-change-transform"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: star.size,
            height: star.size,
            backgroundColor: star.color,
            opacity: star.opacity,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
