import { FaSpotify } from "react-icons/fa";
import { Button, Stack, Typography } from "@mui/material";

const Login = () => {
	return (
		<Button
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
