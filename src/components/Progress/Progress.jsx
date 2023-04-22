import { motion, useSpring } from "framer-motion";
import { useContext } from "react";
import { StepContext } from "../../functions/StepContext";
import { Box } from "@mui/material";
const Progress = () => {
	const level = useContext(StepContext);
	const progressBarVariants = {
		initial: { width: "0%" },
		animate: {
			width: `${level}%`,
			transition: { type: "spring", stiffness: 100, damping: 10 },
		},
	};
	return (
		<>
			<Box
				variants={progressBarVariants}
				initial="initial"
				animate="animate"
				component={motion.div}
			></Box>
		</>
	);
};

export default Progress;
