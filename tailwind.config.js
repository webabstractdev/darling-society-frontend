module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			sans: ["Inter", "sans-serif"],
			serif: ["DM Serif Display", "serif"],
		},
		extend: {
			backgroundImage: {
				"bg-mobile": "url('/bg-mobile.png')",
				"bg-desktop": "url('/bg-desktop.png')",
				"mission-1": "url('/mission-1.png')",
				"mission-2": "url('/mission-2.png')",
			},
			colors: {
				"base-black": "#2C2F32",
				butter: "#FCF3E9",
				eggplant: "#E1D5DF",
				"base-gray": "#F9F9F9",
			},
		},
	},
	plugins: [],
};
