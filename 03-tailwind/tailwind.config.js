/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#ffffff',
          secondary: '#f8f9fa',
          text: {
            primary: '#212529',
            secondary: '#6c757d',
          },
          accent: '#007bff',
          accentHover: '#0056b3',
          border: '#dee2e6',
          card: '#ffffff',
          skeleton: '#e9ecef',
          skeletonHighlight: '#f8f9fa',
          rating: '#ffc107',
          tagNew: '#28a745',
          tagPromo: '#dc3545',
          badge: {
            bg: '#dc3545',
            text: '#ffffff',
          },
        },
        dark: {
          primary: '#121212',
          secondary: '#1e1e1e',
          text: {
            primary: '#f8f9fa',
            secondary: '#adb5bd',
          },
          accent: '#4dabf7',
          accentHover: '#339af0',
          border: '#444',
          card: '#1e1e1e',
          skeleton: '#2d2d2d',
          skeletonHighlight: '#3d3d3d',
          rating: '#ffd43b',
          tagNew: '#51cf66',
          tagPromo: '#ff6b6b',
          badge: {
            bg: '#ff6b6b',
            text: '#ffffff',
          },
        },
      },
      boxShadow: {
        'card-light': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'card-hover-light': '0 4px 8px rgba(0, 0, 0, 0.15)',
        'card-dark': '0 2px 4px rgba(0, 0, 0, 0.3)',
        'card-hover-dark': '0 4px 8px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}