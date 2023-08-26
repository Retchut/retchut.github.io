/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			colors: {
				scheme1background: "#0C1618",
				scheme1main: "#FAF4D3", // 3
				scheme1accent1: "#D1AC00", // yellow
				scheme1accent2: "#09f755", // green
				scheme1accent3: "#95cffb", // blue
				scheme1accent4: "#F6BE9A", // pink

				scheme1secondary: "#F6BE9A",

				scheme2background: "#040510",
				scheme2main: "#e5e6df",
				scheme2accent1: "#9ec0dc",

				scheme2secondary: "#d1d3d9",
				scheme2title: "#6392d8",
				scheme2other: "#737681",

				scheme3background: "#25283b",
				scheme3main: "#e5e6df",
				scheme3accent1: "#91958b",

				scheme3secondary: "#95cffb",
				scheme3title: "#6392d8",
				scheme3other: "#737681"
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
