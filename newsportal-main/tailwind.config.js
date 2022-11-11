/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        futura2: ["FUTURA21"],
        proxima: ["PROXIMALIGHT"],
        nunito: ["NUNITO"],
        nunitoSans: ["NUNITOSANS"],
        newsbt: ["NEWSBT"]
      },
      dropShadow: {
        '3xl': '0px 3px 2.5px rgba(0,0,0,0.35)',
        'container': '0px 1px 2.5px rgba(0,0,0,0.2)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar-hide'),
  ],
}