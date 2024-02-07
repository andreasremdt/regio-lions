import theme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...theme.fontFamily.sans],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0, translate: "1.5rem 0" },
          "100%": { opacity: 1, translate: "0 0" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out forwards",
      },
      colors: {
        primary: {
          50: "#ebf7ff",
          100: "#d1eeff",
          200: "#aee1ff",
          300: "#76d1ff",
          400: "#35b6ff",
          500: "#078eff",
          600: "#0068ff",
          700: "#004fff",
          800: "#0041d7",
          900: "#00338d",
          950: "#062665",
        },
      },
    },
  },
  plugins: [typography],
};
