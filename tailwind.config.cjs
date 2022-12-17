/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

	theme: {
		extend: {},
		colors: {
			base: "#E2B419",
			white: "#FFF",
		},
		fontFamily: {
			poppins: "Poppins",
		},
		backgroundImage: {
			"hero-bg": "url('./assets/Herobg.png')",
		},
	},
	plugins: [],
};
