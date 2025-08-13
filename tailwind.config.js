module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  corePlugins: {
    preflight: true, // Important pour les styles de base
  },
  theme: {
    extend: {},
  },
  plugins: [],
}