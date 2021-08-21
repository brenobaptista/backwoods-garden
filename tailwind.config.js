module.exports = {
  purge: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
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
