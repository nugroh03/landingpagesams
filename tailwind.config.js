module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        monts: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        blue: {
          50: '#fbfdfe',
          100: '#fbfdfe',
          200: '#d4e7f7',
          300: '#a5ccee',
          400: '#69aae2',
          500: '#2373b8',
          600: '#2370b4',
          700: '#2068a7',
          800: '#1f65a3',
          900: '#1c5b91',
        },
        green: {
          50: '#fdfefb',
          100: '#fbfdf7',
          200: '#e1f2c5',
          300: '#c6e68f',
          400: '#a6d850',
          500: '#8cc42c',
          600: '#7daf27',
          700: '#6e9a23',
          800: '#5f851e',
          900: '#456016',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
