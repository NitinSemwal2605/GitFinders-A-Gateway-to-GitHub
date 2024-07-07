import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2196F3',
        dark: {
          primary: '#2A2D34',
          secondary: '#212529',
        },
        light: '#E7ECEF',
      },
    },
  },
  plugins: [daisyui],
};
