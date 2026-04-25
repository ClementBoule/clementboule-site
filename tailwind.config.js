/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cb: {
          sarcelle: '#1FB8B0',
          'sarcelle-deep': '#0F7B75',
          terracotta: '#E85D2F',
          cardinal: '#C8102E',
          rose: '#FBC8D8',
          sauge: '#8BA88E',
          'sauge-deep': '#4F6A52',
          sable: '#FBF4DD',
          encre: '#2A2A2A',
          'encre-soft': '#4A4A4A',
        },
        navy: { 900: '#0B1120', 800: '#0F1A2E', 700: '#162236' },
        slate: { 50: '#F8FAFC' },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        anton: ['Anton', 'Arial Black', 'sans-serif'],
        marker: ['"Permanent Marker"', 'cursive'],
      },
    },
  },
  plugins: [],
}
