import { Box, Typography } from "@mui/material";
import React from "react";

const Header = () => {
	return (
		<Box
			sx={{
				alignSelf: "flex-start",
				justifySelf: "flex-start",
				height: "fit-content",
				display: "flex",
			}}
		>
			{/* <Typography
				variant="h1"
				sx={{
					fontWeight: "medium",
					alignSelf: { sm: "flex-start", xs: "center" },
					cursor: "default",
					background: "rgb(0, 255, 162)",
					WebkitBackgroundClip: "text",
					WebkitTextFillColor: "transparent",
					fontFamily: "Yeseva One",
					fontSize: { xs: 40, sm: 50, md: 50 },
				}}
			>
				Played.
			</Typography> */}
		</Box>
	);
};

export default Header;
