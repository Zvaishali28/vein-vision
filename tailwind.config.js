/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./app/**/*.{js,ts,jsx,tsx}",
     "./pages/**/*.{js,ts,jsx,tsx}",
     "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Medical color scheme - Dark Navy & Lighter Blue Accents
        medical: {
          primary: '#2563eb', // Vibrant light blue for primary buttons and links
          secondary: '#1d4ed8', // Deeper blue for hover states
          accent: '#38bdf8', // Lighter sky blue highlight
          success: '#10b981', // Medical green
          warning: '#f59e0b', // Amber
          danger: '#ef4444', // Medical red
          light: '#0f1b3c', // Navy dark card/surface color
          dark: '#f8fafc', // Light text for readability on navy background
        },
        // Vascular theme colors
        vascular: {
          primary: '#3b82f6', // Accent blue
          secondary: '#1e3a8a', // Deep navy accent
          accent: '#38bdf8', // Sky blue
          light: '#0a1128', // Darkest Navy background
          dark: '#060b1a', // Deep midnight navy
          card: '#0f1b3c', // Navy card surface
          border: '#1e3a6b', // Navy border
        },
        navy: {
          950: '#060b1a',
          900: '#0a1128',
          850: '#0d1735',
          800: '#0f1b3c',
          750: '#14234e',
          700: '#192c61',
          600: '#1e3a8a',
          500: '#2563eb',
          400: '#38bdf8',
        }
      },
      fontFamily: {
        'medical': ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'medical': '0 4px 14px -1px rgba(0, 0, 0, 0.4), 0 2px 6px -1px rgba(0, 0, 0, 0.3)',
        'medical-lg': '0 10px 25px -3px rgba(0, 0, 0, 0.5), 0 4px 10px -2px rgba(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [],
}
