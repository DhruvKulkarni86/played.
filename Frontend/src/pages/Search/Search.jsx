import { Box, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import TrackView from "../../components/TrackView/TrackView";

const spotifyApi = new SpotifyWebApi({
	clientId: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
});

const Search = () => {
	const accessToken = localStorage.getItem("accessToken");
	const [search, setSearch] = useState("");
	const [searchRes, setSearchRes] = useState([]);
	const [songs, setSongs] = useState([]);
	console.log("SONGSS", songs);

	useEffect(() => {
		localStorage.setItem("songs", JSON.stringify(songs));
	}, [songs]);

	useEffect(() => {
		if (!accessToken) return;
		spotifyApi.setAccessToken(accessToken);
	}, [accessToken]);

	useEffect(() => {
		if (!search) return setSearchRes([]);
		if (!accessToken) return;

		let cancel = false;
		spotifyApi.searchTracks(search).then((res) => {
			if (cancel) return;
			setSearchRes(
				res.body.tracks.items.map((track) => {
					const smallestAlbumImage = track.album.images.reduce(
						(smallest, image) => {
							if (image.height < smallest.height) return image;
							return smallest;
						},
						track.album.images[0]
					);

					return {
						artist: track.artists[0].name,
						title: track.name,
						uri: track.uri,
						albumUrl: smallestAlbumImage.url,
					};
				})
			);
		});

		return () => (cancel = true);
	}, [search, accessToken]);
	console.log("RES", searchRes);

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
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder="Search a song.."
				size="small"
				// sx={{ alignSelf: "flex-start" }}
			/>
			{searchRes.length !== 0 && (
				<Box
					sx={{ overflowY: "scroll", width: "100%", height: "100%" }}
				>
					<Stack
						spacing={2}
						className="tracks"
						sx={{
							// border: "2px solid red",
							minWidth: "100%",
							// height: "100%",
							// overflow: "scroll",
						}}
					>
						{/* {searchRes.length !== 0 && (
					<TrackView track={searchRes[0]} key={searchRes[0].uri} />
				)} */}
						{searchRes.map((track) => (
							<TrackView
								track={track}
								key={track.uri}
								setSongs={setSongs}
								songs={songs}
							/>
						))}
					</Stack>
				</Box>
			)}
		</Stack>
	);
};

export default Search;
