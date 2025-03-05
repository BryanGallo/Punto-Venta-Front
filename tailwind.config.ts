import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'aquamarine': {
          '50': '#e9fff7',
          '100': '#c9ffeb',
          '200': '#98ffdd',
          '300': '#57fecf',
          '400': '#30f3c2',
          '500': '#00d9a5',
          '600': '#00b288',
          '700': '#008e71',
          '800': '#00705a',
          '900': '#005c4c',
          '950': '#00342c',
        },
      },
      backgroundImage:{
        "auth":"url('/grafico.svg')"
      }
    },
  },
  plugins: [],
} satisfies Config;
