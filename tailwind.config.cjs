/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
	theme: {
		extend: {
            fontFamily: {
                rowdies: ['Rowdies', '-apple-system', 'cursive'],
                classic: ['Times New Roman', 'sans-serif']
            }
        },
	},
	plugins: [],
}
