module.exports = {
  purge: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        leafy: {
          light: '#e6f5f2',
          DEFAULT: '#548c71',
          dark: '#d7eae4'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
