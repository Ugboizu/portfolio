/** @type {import('tailwindcss').Config} */
export default {
	content: [
	  "./index.html",
	  './src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
	  extend: {
		boxShadow: {
		  black: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
		},
		colors: {
		  lightHover: '#fcf4ff',
		  darkHover: '#2a004a',
		  darkTheme: '#11001F',
		},
		fontFamily: {
		  outfit: ['Outfit', 'sans-serif'],
		  ovo: ['Ovo', 'serif'],
		  lovers: ['Lovers Quarrel', 'cursive'],
		  piedra: ['Piedra', 'serif'],

		},
		gridTemplateColumns: {
			'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
		}
	  },
	},
	variants: {
	  extend: {
		boxShadow: ['hover'],
	  },
	},
	darkMode: 'selector',
	plugins: [],
  };