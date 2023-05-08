<?php
/*
Plugin Name: Spotify API
*/
require_once __DIR__ . '/vendor/autoload.php';

add_action('rest_api_init', function () {
    register_rest_route('spotify-api/v1', '/create-playlist', [
        'methods' => 'POST',
        'callback' => 'create_spotify_playlist',
    ]);
});

function create_spotify_playlist($request)
{
    $data = $request->get_json_params();

    $songIds = $data['songIds'];
    $accessToken = $data['accessToken'];
    $clientId = $data['clientId'];
    $playlistName = $data['playlistName'];

    $client = new \GuzzleHttp\Client();
    $response = $client->post('https://api.spotify.com/v1/users/' . $clientId . '/playlists', [
        'headers' => [
            'Authorization' => 'Bearer ' . $accessToken,
            'Content-Type' => 'application/json'
        ],
        'json' => [
            'name' => $playlistName
        ]
    ]);

    $playlistId = json_decode($response->getBody())->id;

    $response = $client->post('https://api.spotify.com/v1/playlists/' . $playlistId . '/tracks', [
        'headers' => [
            'Authorization' => 'Bearer ' . $accessToken,
            'Content-Type' => 'application/json'
        ],
        'json' => [
            'uris' => $songIds
        ]
    ]);

    // $res = $client->post('https://api.spotify.com/v1/playlists/' . $playlistId . '/images');
    // $img = json_decode($res->getBody())->url;

    // $response_json = json_decode($response->getBody());
    return array('playID' => $playlistId);
}

add_action('init', function () {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Authorization, Content-Type");
});
