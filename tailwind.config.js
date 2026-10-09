/** Tailwind — Aurora dos Pássaros */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        ink: { 950: '#070c0e', 900: '#0b1316', 850: '#0f191d', 800: '#132126', 700: '#1c2e34', 600: '#2a4048' },
        gold: { 300: '#ecd6a4', 400: '#dfbf7e', 500: '#cfa55c', 600: '#b0883f' },
        emer: { 300: '#7fe0bd', 400: '#3fcf9a', 500: '#1fb07d', 600: '#14875f' },
        coral: { 400: '#f07a5c', 500: '#e8603f' },
        sand: { 100: '#f3ece3', 200: '#e7ddd0' },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      maxWidth: { site: '1180px' },
    },
  },
  plugins: [],
};
