import { Box, Card, Typography } from "@mui/material";
import React, { useContext } from "react";
import { StepContext } from "../../functions/StepContext";
import Confirmation from "../../pages/Confirmation/Confirmation";
import Landing from "../../pages/Landing/Landing";
import Error from "../../pages/Error/Error";
import Search from "../../pages/Search/Search";
import Progress from "../Progress/Progress";

const Mode = () => {
	const level = useContext(StepContext);
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
					borderColor: "txt.main",
					borderWidth: "4px",
					borderRadius: "5px",
					display: "flex",
					fontFamily: "Josefin Sans",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				{level === 0 ? (
					<Landing />
				) : level === 1 ? (
					<Search />
				) : level === 2 ? (
					<Confirmation />
				) : (
					<Error />
				)}
			</Card>
			<Progress />
		</Box>
	);
};

export default Mode;
