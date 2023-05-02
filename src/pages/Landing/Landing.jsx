import { Stack, Typography, Button } from "@mui/material";
import Login from "../../components/Buttons/Login";

const Landing = ({ step, nextStp }) => {
	let hash = window.location.hash;

	return (
		<Stack gap={0} sx={{ alignItems: "center", margin: "auto" }}>
			{!hash && (
				<>
					<Typography variant="h3">Welcome to Played</Typography>
					<Typography
						variant="body1"
						sx={{ fontSize: "18px", fontWeight: "Medium" }}
					>
						Login with Spotify to get started
					</Typography>
					<Login />
				</>
			)}
			{hash && (
				<Button
					onClick={nextStp}
					variant="contained"
					sx={{ width: "100%" }}
				>
					Next
				</Button>
			)}
		</Stack>
	);
};

export default Landing;
