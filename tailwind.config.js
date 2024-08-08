/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: "var(--neutral-color)",
        t_color: "var(--font-color)"
      },

      boxShadow: {
        custom: "0px 2px 6px 1px rgba(0, 0, 0, 0.2)"
      }
    },
  },
  plugins: [],
}