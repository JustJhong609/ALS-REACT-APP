/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'als-blue': {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          700: '#1d4ed8',
          900: '#1e3a8a',
        },
        'als-yellow': {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        'als-red': {
          700: '#b91c1c',
        }
      }
    },
  },
  plugins: [],
}
