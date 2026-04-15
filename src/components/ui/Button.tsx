import { cn } from "../../lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg font-body transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        accent:
          "bg-accent text-accent-foreground border-2 border-primary/60 hover:shadow-[0_0_20px_rgba(18,79,237,0.28)] font-semibold",
        hero: "bg-accent text-accent-foreground border-2 border-primary/60 hover:shadow-[0_0_20px_rgba(18,79,237,0.28)] font-bold animate-pulse-glow",
        default:
          "bg-primary text-primary-foreground shadow-lg hover:scale-105",
        cosmic: "bg-primary text-primary-foreground font-semibold",
        outline:
          "border bg-card text-foreground hover:bg-muted",
        ghost: "hover:bg-accent/10 text-foreground",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        default: "h-12 px-6 text-base",
        lg: "h-14 px-10 text-lg",
        xl: "h-16 px-12 text-xl",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
