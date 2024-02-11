import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'body-bg': '#0a0a0a',
        'bg': '#101010',
        'text': '#EEEEEE',
        "primary": '#239DFF',
        'secondary': '#07FF1A'
      }
    },
  },
  plugins: [],
};
export default config;
