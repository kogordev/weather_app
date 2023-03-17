/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				// 'weather-primary': '#00668A',
				// 'weather-secondary': '#004E71',
				//
				'weather-primary': '#678983',
				'weather-secondary': '#E6DDC4',
				'city-card-skeleton-color': '#678983',
				'city-view-skeleton-color': '#E6DDC4',
				'font-color-primary': '#EFEFEF',
				'font-color-secondary': '#181D31',
			},
		},
		fontFamily: {
			Roboto: ['Roboto, sans-serif'],
		},
		container: {
			padding: '2rem',
			center: true,
		},
		screens: {
			sm: '640px',
			md: '768px',
		},
	},
	plugins: [],
};
