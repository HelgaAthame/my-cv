import type { Config } from "tailwindcss/types/config";
import gridAreas from "@savvywombat/tailwindcss-grid-areas";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        glitter: "glitter 8s ease-in infinite",
        fly1: "flyUpDown 6s ease-in-out infinite alternate",
        fly2: "flyUpDown 7s ease-in-out infinite alternate",
        fly3: "flyUpDown 8s ease-in-out infinite alternate",
        fly4: "flyUpDown 9s ease-in-out infinite alternate",
        fly5: "flyUpDown 10s ease-in-out infinite alternate",
      },
      keyframes: {
        glitter: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "25%": { transform: "scale(1.6)", opacity: "1" },
          "50%": { transform: "scale(0.8)", opacity: "0" },
          "75%": { transform: "scale(1.6)", opacity: "1" },
          "100%": { transform: "scale(0.8)", opacity: "0" },
        },
        flyUpDown: {
          "0%": { transform: "translateY(-25%)", opacity: "40%" },
          "50%": { transform: "translateY(25%)", opacity: "100%" },
          "100%": { transform: "translateY(-25%)", opacity: "40%" },
        },
      },
      fontFamily: {
        onest: ["var(--font-onest)"],
      },
      boxShadow: {
        glow: "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4), 0 0 40px rgba(255, 255, 255, 0.2)",
      },
      dropShadow: {
        glow: [
          "0 0 10px rgba(255, 255, 255, 0.8)",
          "0 0 20px rgba(255, 255, 255, 0.6)",
          "0 0 30px rgba(255, 255, 255, 0.4)",
        ],
        smallglow: "0 0 5px rgba(255, 255, 255, 0.5)",
      },
    },
  },
  plugins: [gridAreas],
};
export default config;
