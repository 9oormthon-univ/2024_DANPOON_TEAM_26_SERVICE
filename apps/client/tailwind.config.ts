import type { Config } from "tailwindcss";

const config: Config = {
  important: true,
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        kakao: "#FEE500",
        selected: "#787878",
        "not-selected": "#D9D9D9",
        primary: "#8A1B22",
        secondary: "#5A85AD",
        inactive: "#ADBED0",
      },
      fontSize: {
        caption: "8px",
      },
      screens: {
        "2xl": "1512px",
      },
      maxWidth: {
        "2xl": "1512px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      height: {
        "fit-height": "calc(100vh - 233px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
