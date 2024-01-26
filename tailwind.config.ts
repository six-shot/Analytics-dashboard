import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        plus_jakara_sans: ["var(--font-plusjakarasans)"],
        inter:["var(--font-inter)"]
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
