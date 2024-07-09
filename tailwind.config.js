/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"pri": "#FFE1DB",
				"sec": "#D9D9D9",
				"ter": "#F6F5F5",
				// "other": "#0F1035"
			},
			fontFamily: {
				"inika": ["Inika", "mono"]
			},
			backgroundSize: {
				"size-200": "200% 100%",
				"size-200-vert": "100% 200%"
			}
		},
	},
	plugins: [],
}
