import headlessuiPlugin from '@headlessui/tailwindcss'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontSize: {
			xs: ['0.75rem', { lineHeight: '1rem' }],
			sm: ['0.875rem', { lineHeight: '1.5rem' }],
			base: ['1rem', { lineHeight: '1.5rem' }],
			lg: ['1.125rem', { lineHeight: '2rem' }],
			xl: ['1.25rem', { lineHeight: '2rem' }],
			'2xl': ['1.5rem', { lineHeight: '2.5rem' }],
			'3xl': ['2rem', { lineHeight: '2.5rem' }],
			'4xl': ['2.5rem', { lineHeight: '3rem' }],
			'5xl': ['3rem', { lineHeight: '3.5rem' }],
			'6xl': ['4rem', { lineHeight: '1' }],
			'7xl': ['5rem', { lineHeight: '1' }],
			'8xl': ['6rem', { lineHeight: '1' }],
			'9xl': ['8rem', { lineHeight: '1' }],
		},
		extend: {
			borderRadius: {
				'4xl': '2rem',
				'5xl': '2.5rem',
			},
			fontFamily: {
				sans: 'var(--font-inter)',
				display: 'var(--font-dm-sans)',
			},
			maxWidth: {
				'2xl': '40rem',
			},
			animation: {
				'bounce-slow': 'bounce 2s infinite',
				'float-music': 'float-music 3s ease-in-out infinite',
				'note-float-left': 'note-float-left 2s ease-out infinite',
				'note-float-right': 'note-float-right 2s ease-out infinite',
			},
			keyframes: {
				'float-music': {
					'0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
					'50%': { transform: 'translateY(-20px) rotate(10deg)' },
				},
				'note-float-left': {
					'0%': { transform: 'translate(0, 0) scale(1)', opacity: '0' },
					'50%': { transform: 'translate(-10px, -50px) scale(1.2)', opacity: '1' },
					'100%': { transform: 'translate(-20px, -100px) scale(1)', opacity: '0' },
				},
				'note-float-right': {
					'0%': { transform: 'translate(0, 0) scale(1)', opacity: '0' },
					'50%': { transform: 'translate(10px, -50px) scale(1.2)', opacity: '1' },
					'100%': { transform: 'translate(20px, -100px) scale(1)', opacity: '0' },
				},
			},
		},
	},
	plugins: [headlessuiPlugin],
}
