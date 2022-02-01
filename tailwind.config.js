module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor:{
      'primary' : '#ff6a00',
      'secondaray' : '#e35300',
      'white'   : '#ffffff',
      'black'  : '#000000',
      'pink'  : '#fe4164',
      'facebook' : '#3c59aa',
      'gray'  : '#d7dbdd',
    },
    gradientColorStops: theme => ({
      ...theme('colors'),
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
