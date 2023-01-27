/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			sans: ['ui-sans-serif', 'system-ui'],
			serif: ['ui-serif', 'Georgia'],
			mono: ['ui-monospace', 'SFMono-Regular'],
			display: ['Oswald'],
			body: ['"Open Sans"'],
			rubik: ['Rubik Distressed', 'cursive'],
			anton: ['Anton'],
		},
		extend: {
			colors: {
				primary: '#FF6464',
				secondary: '#00A8CC',
				light: '#8695A4',
				dark: '#21243D',
			},
		},
	},
	plugins: [],
}
