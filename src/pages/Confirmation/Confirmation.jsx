import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const url = import.meta.env.VITE_BACK_URL;

const Confirmation = ({ goBack, home }) => {
	const [title, setTitle] = useState("");
	const [loading, setLoading] = useState(false);
	const [res, setRes] = useState("");
	console.log("RRR", res);

	let songs = localStorage.getItem("songs");
	let at = localStorage.getItem("accessToken");
	let uid = localStorage.getItem("uid");
	console.log("Songs", songs);

	const playData = {
		songIds: JSON.parse(songs),
		accessToken: at,
		clientId: uid,
		playlistName: title,
	};

	const createPlaylist = () => {
		setLoading(true);
		axios.post(url, playData).then((res) => {
			console.log("RESSE", res);
			if (res.status === 200) {
				setRes(res.data.playID);
			} else {
				setRes("error");
			}
		});
	};

	return (
		<Stack
			gap={2}
			sx={{
				alignItems: "center",
				padding: 2,
				minHeight: "90%",
			}}
		>
			<TextField
				id="search"
				variant="outlined"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				placeholder="Enter Playlist Name..."
				size="small"
				// sx={{ alignSelf: "flex-start" }}
			/>
			<Stack direction="row" gap={2}>
				<Button
					disabled={loading}
					onClick={createPlaylist}
					variant="contained"
				>
					Create Playlist
				</Button>
				<Button disabled={loading} onClick={goBack} variant="contained">
					back
				</Button>
			</Stack>

			{res !== "" ? (
				<>
					{res !== "error" ? (
						<Stack direction="column" gap={2}>
							<Typography variant="body1">
								Playlist Created Successfully!
							</Typography>
							<Button
								variant="contained"
								href={`https://open.spotify.com/playlist/${res}`}
							>
								Listen Now
							</Button>
							<Button variant="contained" onClick={home}>
								Create New Playlist
							</Button>
						</Stack>
					) : (
						<Typography variant="body2">Error</Typography>
					)}
				</>
			) : (
				""
			)}
		</Stack>
	);
};

export default Confirmation;
