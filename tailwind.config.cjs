/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        martian: ['Martian Mono', 'monospace'],
        rowdies: ['Rowdies', '-apple-system', 'cursive'],
        classic: ['Times New Roman', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif']
      },
      colors: {
        header: '#3c51a199',
        'dark-primary': '#f8fafc',
        'dark-secondary': '#0059A2',
        'dark-accent': '#467ae7',
        'dark-bg-primary': '#0d1117',
        'dark-bg-secondary': '#1e293b',
        'dark-bg-accent': '#334155',
        'dark-text-primary': '#f8fafc',

        primary: '#f8fafc',
        secondary: '#2dd4bf',
        accent: '#00e8d3',
        'bg-primary': '#fff',
        'bg-secondary': '#0d9488',
        'bg-accent': '#0891b2',
        'text-primary': '#18181b'
      }
    }
  },
  plugins: []
};
