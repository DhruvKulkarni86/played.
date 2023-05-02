import {
	Card,
	CardContent,
	CardMedia,
	IconButton,
	Stack,
	Typography,
	Box,
} from "@mui/material";
import { CgPlayListAdd, CgPlayListCheck } from "react-icons/cg";

const TrackView = ({ track, setSongs, songs }) => {
	return (
		<Card variant="elevation" elevation={3} sx={{ background: "#dfdfe1" }}>
			<CardContent
				sx={{
					display: "flex",
					justifyContent: "space-between",
					width: "100%",
				}}
			>
				<Box sx={{ display: "flex", gap: 2 }}>
					<CardMedia
						component="img"
						sx={{ width: 55 }}
						image={track.albumUrl}
					/>
					<Stack direction="column">
						<Typography variant="h5">{track.title}</Typography>
						<Typography variant="subtitle1">
							{track.artist}
						</Typography>
					</Stack>
				</Box>
				<IconButton onClick={() => setSongs([...songs, track.uri])}>
					{songs.includes(track.uri) ? (
						<CgPlayListCheck />
					) : (
						<CgPlayListAdd />
					)}
				</IconButton>
			</CardContent>
		</Card>
	);
};

export default TrackView;
