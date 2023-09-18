/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	safelist: [
		{
			pattern: /(bg|text|border)-(background|accent.)/,
			variants: ["hover"]
		}
	],
	theme: {
		extend: {
			colors: {
				background: "#0C1618",
				main: "#FAF4D3",
				accent0: "#95cffb", // blue
				accent1: "#09f755", // green
				accent2: "#D1AC00", // yellow
				accent3: "#F6BE9A", // pink
				background2: "#3d4546",

				scheme2background: "#040510",
				scheme2main: "#e5e6df",
				scheme2accent0: "#9ec0dc",
				scheme2accent1: "#6392d8",
				scheme2accent2: "#d1d3d9",
				scheme2accent3: "#737681",

				scheme3background: "#25283b",
				scheme3main: "#e5e6df",
				scheme3accent0: "#91958b",
				scheme3accent1: "#6392d8",
				scheme3accent2: "#95cffb",
				scheme3accent3: "#737681"
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
