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

                black : {
                    DEFAULT    : 'hsl(var(--black))',
                    foreground : 'hsl(var(--black-foreground))',

                    500 : 'var(--black-500)',
                    200 : 'var(--black-200)'
                },

				background : 'var(--background)',
				foreground : 'var(--foreground)'
			},

            screens: {
                'xs'    : '375px',
                'lg'    : '1100px',
                'common': '992px',

                'landscapes@xs': { 'raw': `only screen and (max-height: 375px) and (orientation: landscape)` },
                'landscapes@md': { 'raw': `only screen and (max-height: 600px) and (orientation: landscape)` }
            },
		},
	},

	plugins: [],
}
