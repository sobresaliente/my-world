/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
	theme: {
		extend: {
            fontFamily: {
                rowdies: ['Rowdies', '-apple-system', 'cursive'],
                classic: ['Times New Roman', 'sans-serif'],
                rubik: ['Rubik', 'sans-serif']
            },
            colors: {
                'dark-primary': '#f8fafc',
                'dark-secondary': '#0ea5e9',
                'dark-bg-primary':'#27272a',
                'dark-bg-secondary': '#52525b'
            }
        },
	},
	plugins: [],
}
