/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	safelist: [
		{
			pattern: /(bg|text|border)-scheme1(background|accent.)/,
			variants: ["hover"]
		}
	],
	theme: {
		extend: {
			colors: {
				scheme1background: "#0C1618",
				scheme1main: "#FAF4D3",
				scheme1accent0: "#D1AC00", // yellow
				scheme1accent1: "#09f755", // green
				scheme1accent2: "#95cffb", // blue
				scheme1accent3: "#F6BE9A", // pink
				scheme1background2: "#3d4546",

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
