const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    content: [ 
      './src/**/*.html',
      './src/**/*.{js,jsx,ts,tsx}' 
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...defaultTheme.colors,
      custom: {
        'primary': '#45687b',
        'primary-create-lab': '#001726',
        'link-create-lab': '#194480'
      }
    },
    extend: {
      maxWidth: {
        'hub-container': '1124px',
        'indicator-name': '12rem'
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
