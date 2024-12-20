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
				foundation : {
                    DEFAULT    : 'hsl(var(--foundation))',
                    foreground : 'hsl(var(--foundation-foreground))',

                    secondary  : {
                        DEFAULT    : 'hsl(var(--foundation-secondary))',
                        foreground : 'hsl(var(--foundation-secondary-foreground))'
                    }
                },

				primary : {
                    DEFAULT    : 'var(--primary)',
                    foreground : 'var(--primary-foreground)',
                },

				muted : {
                    DEFAULT    : 'hsl(var(--muted))',
                    foreground : 'hsl(var(--muted-foreground))'
                },

				component : {
                    tooltip : {
                        DEFAULT    : 'hsl(var(--component-tooltip))',
                        foreground : 'hsl(var(--component-tooltip-foreground))'
                    },
                    popover : {
                        DEFAULT    : 'hsl(var(--component-popover))',
                        foreground : 'hsl(var(--component-popover-foreground))'
                    },
                    input : 'hsl(var(--component-input))'
                },

				background : 'var(--background)',
				foreground : 'var(--foreground)'
			},
		},
	},

	plugins: [],
}
