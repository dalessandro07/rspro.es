/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lato: ['var(--font-lato)'],
        roboto: ['var(--font-roboto)']
      },
      colors: {
        customBlack: '#1c1c1c',
        customRed: '#d14d5b'
      },
      fontSize: {
        '2.5xl': '1.625rem'
      }
    }
  },
  plugins: []
}
