import { cn } from "../../lib/utils";

interface CosmicCardProps {
  variant?: "default" | "primary" | "accent";
  hover?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function CosmicCard({
  variant = "default",
  hover = true,
  className,
  children,
}: CosmicCardProps) {
  return (
    <div
      className={cn(
        "backdrop-blur-sm border rounded-lg p-4 md:p-5 lg:p-6 transition-all duration-300",
        "focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2",
        variant === "default" && "bg-card/80 border-border",
        variant === "primary" && "bg-primary/15 border-primary/40",
        variant === "accent" && "bg-accent/10 border-accent/40",
        hover && "hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/7 cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}
