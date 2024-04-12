/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      blue: "#67D5FF",
      white: "#F4FBFF",
      black: "#1E1F1F",

      gray: "#464949",

      bg: "#141515",
    },
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 60s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-100%)" },
        },
      },
    },
    fontFamily: {
      satoshi: ["Satoshi"],
      sans: ["sans-serif"],
      display: ["scale-variable"],
    },
  },
  plugins: [],
};
