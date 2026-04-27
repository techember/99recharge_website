/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0056D2", // Vibrant App Blue
          light: "#3B82F6",
          dark: "#003E99",
        },
        secondary: {
          DEFAULT: "#F97316", // Brand Orange
          light: "#FB923C",
          dark: "#EA580C",
        },
        accent: {
          green: "#22C55E",
          red: "#EF4444",
        },
        darkblue: "#0D1B2A",
      },
    },
  },
  plugins: [],
}
