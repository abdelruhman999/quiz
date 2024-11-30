/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '480px', // نقطة توقف جديدة
        '3xl': '1600px', // نقطة توقف جديدة
      },
    },
  },
  plugins: [],
}