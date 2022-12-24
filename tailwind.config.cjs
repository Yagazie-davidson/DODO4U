/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

	theme: {
		extend: {},
		screens: {
			tablet: "640px",
			// => @media (min-width: 640px) { ... }

			laptop: "1024px",
			// => @media (min-width: 1024px) { ... }

			desktop: "1280px",
			// => @media (min-width: 1280px) { ... }
		},
		colors: {
			base: "#E2B419",
			white: "#FFF",
		},
		fontFamily: {
			poppins: "Poppins",
			Josefin: "Josefin Sans",
			roboto: "Roboto",
		},
		textDecorationColor: {
			base: "#E2B419",
		},
		backgroundImage: {
			"hero-bg": "url('./assets/Herobg.png')",
			"bg-ellipse": "url('./assets/Ellipse.png')",
		},
		borderColor: {
			base: "#E2B419",
		},
		gridTemplateColumns: {
			auto: "repeat(auto-fit, minmax(200, 1fr))",
		},
	},
	plugins: [],
};
