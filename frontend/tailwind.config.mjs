/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "##e0eeee",
          },
        },
      },
    },
    colors: {
      // blue: "#67D5FF",
      blue: "#c5fcfc",
      white: "#e0eeee",
      black: "#1E1F1F",

      gray: "#464949",
      content: "#9ea3a3",
      bg: "#121315",
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
      obviously_title: ["obviously-wide"],
      obviously_body: ["obviously"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
