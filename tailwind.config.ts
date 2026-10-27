import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          600: "#0284c7",
          800: "#075985",
          900: "#0c4a6e",
        },
        jungle: { 50: "#f0fdf4", 600: "#16a34a", 800: "#166534" },
        sand: { 50: "#fdfbf7", 100: "#f7f3eb", 400: "#d97706", 500: "#b45309" },
      },

      fontFamily: {
        sans: ["var(--font-poppins)", "Arial", "sans-serif"],
      },
      boxShadow: { glow: "0 16px 50px rgba(2,132,199,.18)" },
    },
  },
  plugins: [],
};
export default config;
