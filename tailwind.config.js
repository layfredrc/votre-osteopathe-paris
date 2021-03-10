module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./**/*.vue",
    'pages/**/*.vue'
    // "./components/*.vue",
    // "./**/*.html",
    // "./components/*.html",
    // "./**/*css",
    // "./components/*.css"
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': "#2d4d44",
        'medium-green': "#1F674A",
        'pale-green': " #B4CDBF"

      }

    },
  },
  variants: {},
  plugins: [],
}
