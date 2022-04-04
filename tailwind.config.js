module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      '1/3': '40%',
    },
    extend: {
      colors: {
        forbg : '#EFEFEF',
        primaryColor : '#008ae6',
        secendaryColor : '#33adff',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['odd', 'even']
    },
  },
  plugins: [],
}
