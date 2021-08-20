module.exports = {
  purge: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        leafy: {
          lighter: '#e6f5f2',
          light: '#d7eae4',
          DEFAULT: '#548c71',
          dark: '#345548'
        }
      },
      backgroundImage: () => ({
        'hero-desktop': "url('/images/hero-desktop.png')"
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
