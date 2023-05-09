import { Box, Button, Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import Confirmation from "../../pages/Confirmation/Confirmation";
import Landing from "../../pages/Landing/Landing";
import Error from "../../pages/Error/Error";
import Search from "../../pages/Search/Search";
import SpotifyWebApi from "spotify-web-api-node";
import Weather from "../../pages/Weather/Weather";

const spotifyApi = new SpotifyWebApi({
	clientId: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
});

const Mode = () => {
	const [step, setStep] = useState(0);

	const nextStp = () => {
		setStep(step + 1);
	};

	let hash = window.location.hash;
	const home = () => {
		// localStorage.clear();
		// window.location.replace("http://localhost:5173/");
		setStep(1);
	};

	const goBack = () => {
		setStep(step - 1);
	};

	const goWeather = () => {
		setStep(3);
	};

	// let hash = window.location.hash;
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
			// localStorage.clear();
			localStorage.setItem("accessToken", result.access_token);
			localStorage.setItem("expiresIn", result.expires_in);
			localStorage.setItem("tokenType", result.token_type);
		}
		// setStep(1);
	});

	const accessToken = localStorage.getItem("accessToken");
	useEffect(() => {
		if (!accessToken) return;
		// console.log("ACC");
		spotifyApi.setAccessToken(accessToken);
	}, [accessToken]);

	useEffect(() => {
		if (!accessToken) return;

		spotifyApi
			.getMe()
			.then((res) => {
				localStorage.setItem("uname", res.body.display_name);
				localStorage.setItem("uid", res.body.id);
			})
			.catch((err) => {
				console.log("ERRR", err);
			});
	}, [accessToken]);

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
					height: "36rem",
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
				{step === 0 && (
					<Landing nextStp={nextStp} goWeather={goWeather} />
				)}
				{step === 1 && <Search />}
				{step === 2 && <Confirmation goBack={goBack} home={home} />}
				{step === 3 && <Weather />}
				{step === 4 && <Error />}
				{step !== 0 && step !== 2 && (
					<Box
						sx={{
							alignSelf: "flex-end",
							width: "15%",
							px: 2,
							py: 0.5,
						}}
					>
						<Button
							onClick={nextStp}
							variant="contained"
							sx={{ width: "100%" }}
						>
							Next
						</Button>
					</Box>
				)}
			</Card>
		</Box>
	);
};

export default Mode;
