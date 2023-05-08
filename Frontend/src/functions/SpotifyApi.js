import axios from "axios";

const clientID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const redirect = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;
const scopes = import.meta.env.VITE_SPOTIFY_SCOPES;

const url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientID}&scope=${scopes}&redirect_uri=${redirect}`;

async function getAuth() {
	const { data } = await axios.get(url);
	return data;
}

export default getAuth;

// http://localhost:5173/#access_token=BQCeJaLGgOeaQRmuvxPtAyYQMYZjwy45JsnhFtwcFrxjXeGABO8UHmDUwHOU_Ycd3mgM9p08y3ljVoE5cpzewv9iGUQ1879RKFABvSwbD7yFJPmAC8pYctQc7kQaCaFJWNBUXqlMjzoi8RcpwUtB3nMCgGthMyNdotVT6sVYpBmjPdTrINmARziBTC9pRTHaqbQauG1mruUbayOEtc_3FG-9&token_type=Bearer&expires_in=3600
