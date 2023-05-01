import { Box, Card, Snackbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Confirmation from "../../pages/Confirmation/Confirmation";
import Landing from "../../pages/Landing/Landing";
import Error from "../../pages/Error/Error";
import Search from "../../pages/Search/Search";
import Slide from "@mui/material/Slide";

const Mode = () => {
	// const [open, setOpen] = useState(false);
	const [step, setStep] = useState(0);

	// const handleClose = (event, reason) => {
	// 	if (reason === "clickaway") {
	// 		return;
	// 	}
	// 	setOpen(false);
	// };

	let hash = window.location.hash;
	let result = hash
		.substring(1)
		.split("&")
		.reduce(function (res, item) {
			var parts = item.split("=");
			res[parts[0]] = parts[1];
			return res;
		}, {});

	useEffect(() => {
		if (hash) {
			console.log("CALLED");
			localStorage.clear();
			localStorage.setItem("accessToken", result.access_token);
			localStorage.setItem("expiresIn", result.expires_in);
			localStorage.setItem("tokenType", result.token_type);
			setStep(1);
			// setOpen(true);
		}
	});

	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				minHeight: { md: "85vh", xs: "50vh" },
			}}
		>
			<Card
				variant="outlined"
				elevation={0}
				sx={{
					width: "50%",
					height: "30rem",
					borderColor: "spotify.main",
					borderWidth: "4px",
					borderRadius: "5px",
					display: "flex",
					flexDirection: "column",
					fontFamily: "Josefin Sans",
					// justifyContent: "center",
					// alignItems: "center",
				}}
			>
				{step === 0 && <Landing />}
				{step === 1 && <Search />}
				{step === 2 && <Confirmation />}
				{step === 3 && <Error />}
			</Card>
			{/* <Snackbar
				open={open}
				onClose={handleClose}
				autoHideDuration={3000}
				message="Welcome!"
			/> */}
		</Box>
	);
};

export default Mode;
