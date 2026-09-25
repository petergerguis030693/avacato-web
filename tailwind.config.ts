import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B1C2C",
        "navy-deep": "#061018",
        gold: "#C9A227",
        "gold-bright": "#E4C65A",
        cream: "#F4EFE6",
        ink: "#1A1A1A",
        muted: "#8A93A0",
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
