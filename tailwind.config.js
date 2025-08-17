import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
	content: [
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-sans)"],
				mono: ["var(--font-mono)"],
			},
			colors: {
				tangelo: {
					DEFAULT: "#F55607",
					100: "#301101",
					200: "#612203",
					300: "#913304",
					400: "#c24506",
					500: "#f55607",
					600: "#f97635",
					700: "#fa9968",
					800: "#fcbb9a",
					900: "#fdddcd",
				},
				seal_brown: {
					DEFAULT: "#663826",
					100: "#140b07",
					200: "#28160f",
					300: "#3c2116",
					400: "#502c1e",
					500: "#663826",
					600: "#9b5539",
					700: "#c3795c",
					800: "#d7a692",
					900: "#ebd2c9",
				},
			},
		},
	},
	darkMode: "class",
	plugins: [heroui()],
};

module.exports = config;
