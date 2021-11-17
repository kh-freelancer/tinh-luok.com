module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor:{
      'primary' : '#ff6a00',
      'secondaray' : '#e35300',
      'white'   : '#ffffff'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
