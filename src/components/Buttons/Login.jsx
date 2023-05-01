import { FaSpotify } from "react-icons/fa";
import { Button, Typography } from "@mui/material";

const Login = () => {
	const clientID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
	const redirect = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;
	const scopes = import.meta.env.VITE_SPOTIFY_SCOPES;

	const url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientID}&scope=${scopes}&redirect_uri=${redirect}`;

	return (
		<Button
			href={url}
			variant="contained"
			startIcon={<FaSpotify />}
			sx={{
				backgroundColor: "spotify.main",
				mt: 3,
				alignItems: "center",
				"&:hover": {
					backgroundColor: "back.main",
				},
			}}
		>
			<Typography variant="button" sx={{ mt: 0.5 }}>
				Login
			</Typography>
		</Button>
	);
};

export default Login;
