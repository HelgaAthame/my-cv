import type { Config } from "tailwindcss";

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
      },
      keyframes: {
        glitter: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "25%": { transform: "scale(1.6)", opacity: "1" },
          "50%": { transform: "scale(0.8)", opacity: "0" },
          "75%": { transform: "scale(1.6)", opacity: "1" },
          "100%": { transform: "scale(0.8)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
