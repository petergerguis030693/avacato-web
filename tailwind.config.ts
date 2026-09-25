import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary-rgb) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary-rgb) / <alpha-value>)",
        navy: "rgb(var(--color-primary-rgb) / <alpha-value>)",
        "navy-deep": "rgb(var(--color-footer-rgb) / <alpha-value>)",
        gold: "rgb(var(--color-secondary-rgb) / <alpha-value>)",
        "gold-bright": "rgb(var(--color-gold-hover-rgb) / <alpha-value>)",
        "gold-ink": "rgb(var(--color-gold-ink-rgb) / <alpha-value>)",
        cream: "rgb(var(--color-bg-rgb) / <alpha-value>)",
        ink: "rgb(var(--color-text-rgb) / <alpha-value>)",
        text: "rgb(var(--color-text-rgb) / <alpha-value>)",
        muted: "rgb(var(--color-muted-rgb) / <alpha-value>)",
        "on-dark": "rgb(var(--color-on-dark-rgb) / <alpha-value>)",
        "on-dark-muted": "rgb(var(--color-on-dark-muted-rgb) / <alpha-value>)",
        "surface-alt": "rgb(var(--color-bg-alt-rgb) / <alpha-value>)",
        footer: "rgb(var(--color-footer-rgb) / <alpha-value>)",
        whatsapp: "rgb(var(--color-whatsapp-rgb) / <alpha-value>)",
      },
      fontFamily: {
        cairo: ["var(--font-cairo)", "Tahoma", "Arial", "sans-serif"],
      },
      borderRadius: {
        card: "8px",
        btn: "9999px",
      },
    },
  },
  plugins: [],
};

export default config;
