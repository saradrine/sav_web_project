/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'lg': '2.5rem',
      },
      boxShadow: {
        'custom-lg': '0 10px 20px rgba(0, 0, 0, 0.15)',
        'custom-md': '1px 2px 15px rgba(0, 0, 0, 0.2)',
        'custom-sm': '1px 2px 5px rgba(0, 0, 0, 0.15)',
      },
      fontSize: {
        'custom-lg': '1.05rem',
        'custom-md': '.9rem',
        'custom-sm': '.75rem',
      },
      spacing: {
        '22': '5.5rem',
      },
      colors: {
        'custom-green': '#039388',
        'custom-light-green': '#e5f3f0',
        'custom-yellow': '#efb20c',
        'custom-light-yellow': '#fffae8',
        'custom-red': '#ea3b2e',
        'custom-light-red': '#FFEBEE',
        'custom-gray': '#868686',
        'custom-light-gray': '#f6f6f6',
        'custom-blue': '#1886e0',
        'custom-light-blue': '#f4f9ff',
      },
    },
  },
  plugins: [],
}

