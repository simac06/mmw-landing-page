/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
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
      display: ["Steps-Mono"],
      mono: ['"Kode Mono"'],
      sans: ["sans-serif"],
    },
  },
  plugins: [],
};
