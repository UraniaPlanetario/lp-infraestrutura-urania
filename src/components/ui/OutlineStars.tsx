import { useMemo } from "react";

interface OutlineStarsProps {
  count?: number;
}

export function OutlineStars({ count = 12 }: OutlineStarsProps) {
  const stars = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      // Só laterais (0-14% e 86-98%)
      const left =
        Math.random() < 0.5
          ? Math.random() * 14
          : 86 + Math.random() * 12;
      const top = 5 + Math.random() * 90;
      const size = 14 + Math.random() * 10;
      const opacity = 0.12 + Math.random() * 0.13;
      const rotation = Math.random() * 360;
      const delay = Math.random() * 3;

      return { id: i, left, top, size, opacity, rotation, delay };
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
          fill="none"
          stroke="hsl(280, 65%, 50%)"
          strokeWidth="2"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}
