/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	safelist: [
		{
			pattern: /(bg|text|border(-b|-t)?|from|to)-(background|accent.)/,
			variants: ["hover"],
		},
		{
			pattern: /text-(left|center|right)/,
		},
		{
			pattern: /xs|sm|base|lg|[2-9]?xl/,
		},
		{
			pattern: /rounded-(l|r)-lg/,
		},
		{
			pattern: /bg-gradient-to-(l|r)/,
		},
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				main: "var(--main)",
				accent0: "var(--accent0)", // turquoise
				accent1: "var(--accent1)", // purple
				accent2: "var(--accent2)", // dark green
				background2: "var(--background2)",
			},
			boxShadow: {
				image: "0px 0px 10px",
			},
			fontFamily: {
				oswald: ["Oswald", "sans-serif"],
				"roboto-condensed": ["Roboto Condensed", "sans-serif"],
				"babas-neue": ["Bebas Neue", "sans-serif"],
			},
		},
	},
	plugins: [],
};
