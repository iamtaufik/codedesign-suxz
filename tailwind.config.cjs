/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      // backgroundImage: {
      //   'bg-start': "url('/assets/bg-start.svg')",
      // },
    },
    colors: {
      primary: '#8C82FC',
      secondary: '#44E4C9',
      dark: '#22293E',
      white: '#fff',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '30px',
        lg: '144px',
      },
    },
  },
  plugins: [],
};
