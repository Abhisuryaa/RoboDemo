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
        bg: {
          base: "#ffffff",
          surface: "#ffffff",
        },
        text: {
          primary: "#0a0a0a",
          secondary: "#3a3a3a",
          muted: "#7a7a7a",
        },
        accent: "#1a1a1a",
      },
      fontFamily: {
        display: ["var(--font-syne)"],
        body: ["var(--font-dm-sans)"],
      },
      backgroundImage: {
        "shimmer-gradient": "linear-gradient(45deg, rgba(255,255,255,0) 25%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 75%)",
      },
      animation: {
        "shimmer": "shimmer 5s infinite",
        "ticker": "ticker 30s linear infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { "background-position": "-200% 0" },
          "100%": { "background-position": "200% 0" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
