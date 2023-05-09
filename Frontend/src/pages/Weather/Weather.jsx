import {
	Stack,
	Typography,
	Select,
	InputLabel,
	FormControl,
} from "@mui/material";
import { MenuItem } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import SuggestCard from "../../components/SuggestCard/SuggestCard";

const url = "https://api.openweathermap.org/data/2.5/weather";
const spotifyApi = new SpotifyWebApi({
	clientId: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
});

const Weather = () => {
	const accessToken = localStorage.getItem("accessToken");

	const [st, setSt] = useState("");
	const [weather, setWeather] = useState("");
	console.log("ST", st);
	const [playlists, setPlaylists] = useState([]);
	const [obj, setObj] = useState();
	console.log("OOOO", obj);
	// leh, jaipur, Vadodara,
	console.log("PLAY DATA", playlists);
	useEffect(() => {
		if (!accessToken) return;
		spotifyApi.setAccessToken(accessToken);
	}, [accessToken]);

	useEffect(() => {
		spotifyApi.getUserPlaylists().then((res) => {
			setPlaylists(
				res.body.items.map((p) => {
					return {
						id: p.id,
						name: p.name,
						href: p.href,
						img: p.images[0].url,
					};
				})
			);
		});
	}, [accessToken]);

	const fetchWeather = (event) => {
		setSt(event.target.value);
	};

	useEffect(() => {
		if (!st) return setSt("");
		axios
			.get(`${url}?q=${st}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`)
			.then((res) => {
				console.log("WE", res.data.weather[0].main);
				setWeather(res.data.weather[0].main);
			});
	}, [st]);

	useEffect(() => {
		playSuggest();
	}, [weather]);

	const playSuggest = () => {
		if (!weather) return setWeather("");
		if (weather === "Clear" || weather === "Smoke") {
			console.log("CALLED 2");
			setObj(playlists.find((p) => p.name === "Samaaj"));
			// console.log("SUGGEST", obj);
		}
		if (
			weather === "Rain" ||
			weather === "Thunderstorm" ||
			weather === "Drizzle"
		) {
			setObj(playlists.find((p) => p.name === "O.1"));

			// let obj = playlists.find((p) => p.name === "O.1");
			// console.log("SUGGEST", obj);
		}
		if (weather === "Snow" || weather === "Clouds") {
			setObj(playlists.find((p) => p.name === "Ghazals"));

			// let obj = playlists.find((p) => p.name === "Ghazals");
			// console.log("SUGGEST", obj);
		}
	};

	return (
		<Stack
			gap={2}
			sx={{ alignItems: "center", padding: 2, minHeight: "90%" }}
		>
			<Typography variant="h4">Playlist Suggestions</Typography>
			<FormControl sx={{ width: "30%" }}>
				<InputLabel>Select your city</InputLabel>
				<Select
					value={st}
					onChange={fetchWeather}
					label="Select your city"
				>
					<MenuItem value="Leh">Leh</MenuItem>
					<MenuItem value="Ahmedabad">Ahmedabad</MenuItem>
					<MenuItem value="Vadodara">Vadodara</MenuItem>
					<MenuItem value="Kansas City">Kansas City</MenuItem>
				</Select>
			</FormControl>
			{obj && <SuggestCard obj={obj} />}
		</Stack>
	);
};

export default Weather;
