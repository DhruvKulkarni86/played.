import React from "react";
import Header from "./components/Header/Header";
import Mode from "./components/Mode/Mode";
import { CssBaseline, Stack, ThemeProvider } from "@mui/material";
import primary from "./theme/primary";

const App = () => {
	return (
		<ThemeProvider theme={primary}>
			<CssBaseline />
			<Stack
				sx={{
					backgroundColor: "back.main",
					minHeight: "100vh",
					maxWidth: "100vw",
					// justifyContent: "center",
				}}
			>
				<Header />
				<Mode />
				{/* <Header /> */}
			</Stack>
		</ThemeProvider>
	);
};

export default App;
