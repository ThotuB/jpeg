/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: 'var(--color-primary)',
				secondary: 'var(--color-secondary)',

				retro: {
					'1': 'var(--color-retro-1)',
					'2': 'var(--color-retro-2)',
					'3': 'var(--color-retro-3)',
					'4': 'var(--color-retro-4)',
					'5': 'var(--color-retro-5)',
					'6': 'var(--color-retro-6)',
					'7': 'var(--color-retro-7)',
				},

				'cb-blue': '#8054FF',
				'cb-green': '#80AC00',

				'cr-red': '#FF2480',
				'cr-green': '#00DB80',
			},
			keyframes: {
				'terminal': {
					'0%, 100%': { opacity: 1 },
					'50%': { opacity: 0 },
				}
			},
			animation: {
				'terminal': 'terminal 1s cubic-bezier(0.8, 0.5, 0.2, 0.5) infinite',
			},
			fontFamily: {
				bit: ['RuneScape UF', 'Helvetica']
			},
			screens: {
				'mxs': { 'max': '639px' },
				'msm': { 'max': '767px' },
				'mmd': { 'max': '1023px' },
				'mlg': { 'max': '1279px' },
				'mxl': { 'max': '1535px' },
			}
		},
	},
	plugins: [],
}
