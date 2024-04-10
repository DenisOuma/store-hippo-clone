import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"primary-color": "#283470",
				"secondary-color": "#15A29C",
			},
			fontFamily: {
				body: ["Nunito"],
			},
			screens: {
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1536px",
			},
		},
		container: {
			center: true,
			padding: {
				DEFAULT: "2rem",
				sm: "2rem",
				lg: "4rem",
				xl: "5rem",
			},
		},
	},
	plugins: [],
};
export default config;
