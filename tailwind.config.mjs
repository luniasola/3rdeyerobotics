/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}'
	],

	darkMode: 'selector',

	theme: {
		extend: {
			fontFamily: {
				sans: [ 'var(--font-ibm-plex-sans)' ],
			},

			colors: {
				primary : {
                    DEFAULT    : 'var(--primary)',
                    foreground : 'var(--primary-foreground)',
                },

				background : 'var(--background)',
				foreground : 'var(--foreground)'
			},
		},
	},

	plugins: [],
}
