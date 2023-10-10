/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	safelist: [
		{
			pattern: /(bg|text|border(-b|-t)?|from|to)-(background|accent.)/,
			variants: ["hover"]
		},
		{
			pattern: /text-(left|center|right)/
		},
		{
			pattern: /xs|sm|base|lg|[2-9]?xl/
		},
		{
			pattern: /rounded-(l|r)-lg/
		},
		{
			pattern: /bg-gradient-to-(l|r)/
		}
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				main: "var(--main)",
				accent0: "var(--accent0)", // blue
				accent1: "var(--accent1)", // green
				accent2: "var(--accent2)", // yellow
				accent3: "var(--accent3)", // pink
				background2: "var(--background2)",

				scheme2background: "var(--scheme2background)",
				scheme2main: "var(--scheme2main)",
				scheme2accent0: "var(--scheme2accent0)",
				scheme2accent1: "var(--scheme2accent1)",
				scheme2accent2: "var(--scheme2accent2)",
				scheme2accent3: "var(--scheme2accent3)",

				scheme3background: "var(--scheme3background)",
				scheme3main: "var(--scheme3main)",
				scheme3accent0: "var(--scheme3accent0)",
				scheme3accent1: "var(--scheme3accent1)",
				scheme3accent2: "var(--scheme3accent2)",
				scheme3accent3: "var(--scheme3accent3)"
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
