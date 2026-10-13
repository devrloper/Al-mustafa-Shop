import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { brand: "#D62828", forest: "#16865B", royal: "#2563EB" }, boxShadow: { soft: "0 12px 40px rgba(20,20,20,.07)" } } },
  plugins: []
};
export default config;