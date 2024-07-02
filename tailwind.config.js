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
      },
      fontSize: {
        'custom-lg': '1.05rem',
        'custom-md': '.9rem',
      },
      spacing: {
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
}

