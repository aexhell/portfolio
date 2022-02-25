const colors = require('tailwindcss/colors')

module.exports = {
  content: [],
  theme: {
    colors: {
      black: colors.black,
      violet: colors.violet,
      gray: colors.gray,
      indigo: colors.indigo
    },
    extend: {
      colors: {
        white: '#ffffff',
        midnight: {
          100: '#272130',
          200: '#2d2638',
          300: '#433B50',
          400: '#635676',
          500: '#8875A5',
          600: '#B9A0DF',
          700: '#C2AFDF',
          800: '#CCBEE1',
          900: '#E5D3FF'
        }
      },
      fontFamily: {
        sans: ['IBM Plex Mono', 'Fira Code', 'sans-serif']
      }
    }
  },
  plugins: []
}
