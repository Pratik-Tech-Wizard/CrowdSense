/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: {
            blue: '#1E3A8A',
            orange: '#F97316',
          },
          electric: {
            blue: '#2563EB',
          },
          neon: {
            green: '#22C55E',
          },
          cyber: {
            purple: '#9333EA',
          },
          teal: {
            cyan: '#06B6D4',
          },
        },
        fontFamily: {
          montserrat: ['Montserrat', 'sans-serif'],
          inter: ['Inter', 'sans-serif'],
          poppins: ['Poppins', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };