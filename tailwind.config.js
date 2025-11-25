/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'Helvetica', 'sans-serif'],
        'inter': ['Inter', 'Helvetica', 'sans-serif'],
      },
      colors: {
        'prepstreak-primary': '#ef473a',
        'prepstreak-secondary': '#1e5f4d',
        'prepstreak-bg': '#f5ebe0',
        'prepstreak-dark': '#2b2622',
        'prepstreak-gray': '#6b6661',
      },
    },
  },
  plugins: [],
}
