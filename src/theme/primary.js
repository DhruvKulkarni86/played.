import { createTheme } from "@mui/material";

const primary = createTheme({
	palette: {
		back: {
			main: "#004466",
		},
		txt: {
			main: "rgb(0, 255, 162)",
		},
		spotify: {
			main: "#1ed760",
		},
	},
	typography: {
		fontFamily: ["Rajdhani", "Dongle", "Yeseva One", "Josefin Sans"],
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 600,
	},
});

export default primary;
