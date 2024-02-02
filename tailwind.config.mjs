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
        secondary: {
          50: "#fffee7",
          100: "#fffcc1",
          200: "#fff686",
          300: "#ffe841",
          400: "#ffd60d",
          500: "#ebb700",
          600: "#d19100",
          700: "#a66702",
          800: "#89500a",
          900: "#74410f",
          950: "#442104",
        },
      },
    },
  },
  plugins: [typography],
};
