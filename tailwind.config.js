/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray-100': '#F0F2F4',
        'custom-gray-200': '#E6E6E6',
        'custom-gray-300': '#D3D8DF',
        'custom-gray-400': '#B5BEC9',
        'custom-gray-500': '#7A899E',
        'custom-green-100': '#DFFAFA',
        'custom-green': '#157A7A',
      }
    },
  },
  plugins: [],
}