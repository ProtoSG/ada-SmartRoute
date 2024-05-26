/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#F06000",
        bg: {
          100: "#242529",
          200: "#37373F",
        },
        text: "#E0E0E0",
      },
    },
  },
  plugins: [],
};
