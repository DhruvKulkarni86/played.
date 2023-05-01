import { Card, CardContent, CardMedia } from "@mui/material";

const TrackView = ({ track }) => {
	return (
		<Card elevation={3} sx={{}}>
			<CardContent>
				<CardMedia
					component="img"
					sx={{ width: 50 }}
					image={track.albumUrl}
				/>
				{track.title}
				{track.artist}
			</CardContent>
		</Card>
	);
};

export default TrackView;
