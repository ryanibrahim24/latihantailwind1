/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}',
            './public/index.html',
],
  theme: {
    fontFamily: {
      'manrope': ['Manrope', 'sans-serif'],
    },
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1212px',
      },
    },
    extend: {
      colors: {
              'primary': '#8C82FC',
              'secondary': '#22293E',

            }
    },
  },
  plugins: [],
}

