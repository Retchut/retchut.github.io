/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			colors: {
				background: "#0C1618",
				titles: "#004643",
				accent: "#D1AC00",
				main: "#FAF4D3",
				secondary: "#F6BE9A",

				background1: "#040510",
				titles1: "#6392d8",
				accent1: "#9ec0dc",
				main1: "#e5e6df",
				secondary1: "#d1d3d9",
				other1: "#737681",

				background2: "#25283b",
				titles2: "#6392d8",
				accent2: "#91958b",
				main2: "#e5e6df",
				secondary2: "#95cffb",
				other2: "#737681"
			},
			fontFamily: {
				oswald: ["Oswald", "sans-serif"],
				"roboto-condensed": ["Roboto Condensed", "sans-serif"],
				"babas-neue": ["Bebas Neue", "sans-serif"]
			}
		}
	},
	plugins: []
};
