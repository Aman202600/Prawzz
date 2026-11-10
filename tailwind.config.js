/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#0d381e',
          DEFAULT: '#194D33',
          dark: '#113523',
          light: '#236946',
        },
        cream: {
          50: '#FEFCF9',
          100: '#FDFBF7',
          200: '#F8F4EC',
          300: '#F0E9DC',
          400: '#E4D8C4',
          DEFAULT: '#FAF7F0',
        },
        terracotta: {
          50: '#FFF5F2',
          100: '#FFE8E1',
          200: '#FFD3C4',
          300: '#FCAE95',
          400: '#F77F5B',
          500: '#E05A32',
          DEFAULT: '#E26D46',
          dark: '#C84E26',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -1px rgba(0, 0, 0, 0.05), 0 1px 3px -1px rgba(0, 0, 0, 0.03)',
        'soft-md': '0 8px 24px -4px rgba(0, 0, 0, 0.07), 0 3px 8px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 16px 36px -6px rgba(0, 0, 0, 0.09), 0 6px 16px -4px rgba(0, 0, 0, 0.05)',
        'soft-xl': '0 24px 48px -12px rgba(0, 0, 0, 0.12)',
      }
    },
  },
  plugins: [],
}

