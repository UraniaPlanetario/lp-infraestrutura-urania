import { useMemo } from "react";

interface OutlineStarsProps {
  count?: number;
}

export function OutlineStars({ count = 12 }: OutlineStarsProps) {
  const stars = useMemo(() => {
    // Paleta: amarelo + 2 tons de roxo
    const palette = [
      "hsl(45, 100%, 55%)",   // amarelo (accent)
      "hsl(270, 70%, 60%)",   // roxo claro
      "hsl(280, 55%, 42%)",   // roxo escuro
    ];
    return Array.from({ length: count }, (_, i) => {
      const left =
        Math.random() < 0.5
          ? Math.random() * 14
          : 86 + Math.random() * 12;
      const top = 5 + Math.random() * 90;
      // 30% menor: antes 14-24 → agora 10-17
      const size = 10 + Math.random() * 7;
      const opacity = 0.18 + Math.random() * 0.18;
      const rotation = Math.random() * 360;
      const delay = Math.random() * 3;
      // Distribuição: ~30% amarelas, ~35% roxo claro, ~35% roxo escuro
      const r = Math.random();
      const color = r < 0.3 ? palette[0] : r < 0.65 ? palette[1] : palette[2];

      return { id: i, left, top, size, opacity, rotation, delay, color };
    });
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 hidden md:block">
      {stars.map((star) => (
        <svg
          key={star.id}
          className="absolute animate-pulse"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            transform: `rotate(${star.rotation}deg)`,
            animationDelay: `${star.delay}s`,
            animationDuration: "3s",
          }}
          viewBox="0 0 24 24"
          fill={star.color}
          stroke="none"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}
