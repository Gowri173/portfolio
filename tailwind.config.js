/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: {
          900: '#ffffff',
          800: '#fffbfb',
        },
        accent: {
          red: '#ef4444',
          orange: '#ff8c00',
          fire: '#ff4500',
          gold: '#ffd166',
        },
        customText: {
          white: '#4a1c1c',
          muted: '#6b2d2d',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'orbit-slow': 'spin 120s linear infinite',
        'orbit-medium': 'spin 80s linear infinite',
        'orbit-fast': 'spin 40s linear infinite',
      },
    },
  },
  plugins: [],
}

