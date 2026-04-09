/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--foreground))",
        primary: "hsl(var(--primary))",
        "primary-glow": "hsl(var(--primary-glow))",
        "primary-foreground": "hsl(0 0% 100%)",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(229 35% 6%)",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
        destructive: "hsl(var(--destructive))",
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "badge-glow": {
          "0%, 100%": { boxShadow: "0 0 10px rgba(234, 179, 8, 0.12)" },
          "50%": { boxShadow: "0 0 34px rgba(234, 179, 8, 0.54)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 8px rgba(234, 179, 8, 0.15)" },
          "50%": { boxShadow: "0 0 18px rgba(234, 179, 8, 0.25)" },
        },
        orbital: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        starfield: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100px)" },
        },
      },
      animation: {
        twinkle: "twinkle 2s ease-in-out infinite",
        float: "float 5s ease-in-out infinite",
        "badge-glow": "badge-glow 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 24s ease-in-out infinite",
        orbital: "orbital 20s linear infinite",
        starfield: "starfield 50s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
