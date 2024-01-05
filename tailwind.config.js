import { Inter } from 'next/font/google'
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
      fontWeight:{
          'fw-30':30,
          'fw-50':50,
          'fw-70':70,
          'fw-100':100,
      },
      fontFamily: {
        'm-sans': ['Merriweather Sans', 'sans-serif'],
      },
    },
    colors:{
        primary:"#0c5185",
        secondary:"#078ed0",
        accent:"#1f436f",
    },
  },
  plugins: [],
}
