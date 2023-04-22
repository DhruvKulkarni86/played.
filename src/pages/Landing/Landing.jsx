import { Stack, Typography } from "@mui/material";
import Login from "../../components/Buttons/Login";

const Landing = () => {
	return (
		<Stack gap={0} sx={{ alignItems: "center" }}>
			<Typography variant="h3">Welcome to Played</Typography>
			<Typography
				variant="body1"
				sx={{ fontSize: "18px", fontWeight: "Medium" }}
			>
				Login with Spotify to get started
			</Typography>
			<Login />
		</Stack>
	);
};

export default Landing;
