import { Inter, Play } from 'next/font/google'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        play: ["Play", "sans-serif"],
        msans: ["Merriweather sans", "sans-serif"],
        
      },
    },
    colors:{
        primary:"#0c5185",
        secondary:"#078ed0",
        accent:"#1f436f",
        'blue':{
          100: '#dbeafe'
        }
    },
  },
  plugins: [],
}
