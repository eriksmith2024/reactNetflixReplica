/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'netflix': ['NetflixFont', 'sans-serif']
      },
      colors: {
        'brand-primary': '#e50914',
        'dark': '#232323',
        'dark-secondary': '#2d2d2d',
        'dark-tertiary': 'rgba(128, 128, 128, 0.7)',
        'text-primary': '#ffffff',
        'text-link': '#0071eb',
        'white-alpha-70': 'rgba(255, 255, 255, 0.7)',
      },
      screens: {
        'sm': '600px',
        'md': '960px',
        'lg': '1280px',
        'xl': '1920px',
      }
    },
  },
  plugins: [],
}

