/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '0 4px 6px -1px rgba(255, 0, 0, 0.5)', // Kırmızı gölge
      },
      colors: {
        primary: "#891",
        blue: {
          950: "#17275c"
        },
      },
    },
  },
  plugins: [],
  darkMode:"selector"
}
