export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '15px'
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1430px',
    },
    fontFamily: {
      primary: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#052A49',
        secondary: '#1BA8DF',
        backgrounds: '#F1F4F6',
        tertiary: '#084577'
      }
    },
  },
  plugins: [],
}