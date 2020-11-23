# Spotify App Stats

This library lets you fetch your Spotify app stats from Spotify's developer site programmatically.

## How to

You need to use the Spotify credentials for the owner of the app. Make sure you don't leak the password committing it to a public repository, and use secret environment variables instead.

You find the application id navigating to https://developer.spotify.com/dashboard/applications, clicking on the application you are interested, and taking the last bit of the URL. For a URL like https://developer.spotify.com/dashboard/applications/04dca0de1c4e4aca88cc615ac23581be the application id is `04dca0de1c4e4aca88cc615ac23581be`.

```js
const SpotifyAppStats = require("@jmperez/spotify-app-stats");

(async () => {
  const spotifyAppStats = new SpotifyAppStats();
  await spotifyAppStats.init();
  await spotifyAppStats.login("username", "password");
  const stats = await spotifyAppStats.getStats("application_id");
  spotifyAppStats.destroy();
  console.log(stats);
})();
```

The stats will have a similar format to this:

```json
{
  "dau": [
    { "date": "2020-06-29", "number_of_daus": 314 },
    { "date": "2020-06-30", "number_of_daus": 282 },
    { "date": "2020-07-01", "number_of_daus": 276 },
    { "date": "2020-07-02", "number_of_daus": 289 },
    { "date": "2020-07-03", "number_of_daus": 325 },
    { "date": "2020-07-04", "number_of_daus": 269 },
    { "date": "2020-07-05", "number_of_daus": 257 },
    { "date": "2020-07-06", "number_of_daus": 291 },
    { "date": "2020-07-07", "number_of_daus": 297 },
    { "date": "2020-07-08", "number_of_daus": 263 },
    { "date": "2020-07-09", "number_of_daus": 290 },
    { "date": "2020-07-10", "number_of_daus": 320 },
    { "date": "2020-07-11", "number_of_daus": 261 },
    { "date": "2020-07-12", "number_of_daus": 238 },
    { "date": "2020-07-13", "number_of_daus": 300 },
    { "date": "2020-07-14", "number_of_daus": 317 },
    { "date": "2020-07-15", "number_of_daus": 382 },
    { "date": "2020-07-16", "number_of_daus": 333 },
    { "date": "2020-07-17", "number_of_daus": 304 },
    { "date": "2020-07-18", "number_of_daus": 291 },
    { "date": "2020-07-19", "number_of_daus": 311 },
    { "date": "2020-07-20", "number_of_daus": 351 },
    { "date": "2020-07-21", "number_of_daus": 339 },
    { "date": "2020-07-22", "number_of_daus": 290 },
    { "date": "2020-07-23", "number_of_daus": 306 },
    { "date": "2020-07-24", "number_of_daus": 334 },
    { "date": "2020-07-25", "number_of_daus": 273 },
    { "date": "2020-07-26", "number_of_daus": 274 },
    { "date": "2020-07-27", "number_of_daus": 333 },
    { "date": "2020-07-28", "number_of_daus": 337 }
  ],
  "mau": [
    { "date": "2020-06-29", "number_of_maus": 5202 },
    { "date": "2020-06-30", "number_of_maus": 5196 },
    { "date": "2020-07-01", "number_of_maus": 5194 },
    { "date": "2020-07-02", "number_of_maus": 5190 },
    { "date": "2020-07-03", "number_of_maus": 5209 },
    { "date": "2020-07-04", "number_of_maus": 5200 },
    { "date": "2020-07-05", "number_of_maus": 5196 },
    { "date": "2020-07-06", "number_of_maus": 5210 },
    { "date": "2020-07-07", "number_of_maus": 5216 },
    { "date": "2020-07-08", "number_of_maus": 5193 },
    { "date": "2020-07-09", "number_of_maus": 5189 },
    { "date": "2020-07-10", "number_of_maus": 5194 },
    { "date": "2020-07-11", "number_of_maus": 5194 },
    { "date": "2020-07-12", "number_of_maus": 5151 },
    { "date": "2020-07-13", "number_of_maus": 5172 },
    { "date": "2020-07-14", "number_of_maus": 5220 },
    { "date": "2020-07-15", "number_of_maus": 5306 },
    { "date": "2020-07-16", "number_of_maus": 5338 },
    { "date": "2020-07-17", "number_of_maus": 5330 },
    { "date": "2020-07-18", "number_of_maus": 5349 },
    { "date": "2020-07-19", "number_of_maus": 5380 },
    { "date": "2020-07-20", "number_of_maus": 5437 },
    { "date": "2020-07-21", "number_of_maus": 5480 },
    { "date": "2020-07-22", "number_of_maus": 5466 },
    { "date": "2020-07-23", "number_of_maus": 5458 },
    { "date": "2020-07-24", "number_of_maus": 5459 },
    { "date": "2020-07-25", "number_of_maus": 5482 },
    { "date": "2020-07-26", "number_of_maus": 5482 },
    { "date": "2020-07-27", "number_of_maus": 5529 },
    { "date": "2020-07-28", "number_of_maus": 0 }
  ],
  "endpoints": [
    { "endpoint": "/v1/playlists/<playlist-id>/tracks", "days": [Array] },
    { "endpoint": "/v1/me/tracks", "days": [Array] },
    {
      "endpoint": "/v1/users/<username>/playlists/<playlist-id>/tracks",
      "days": [Array]
    },
    { "endpoint": "/v1/users/<username>/playlists", "days": [Array] },
    { "endpoint": "/v1/me", "days": [Array] }
  ],
  "total_requests": [
    { "date": "2020-06-29", "number_of_requests": 71565 },
    { "date": "2020-06-30", "number_of_requests": 72256 },
    { "date": "2020-07-01", "number_of_requests": 53315 },
    { "date": "2020-07-02", "number_of_requests": 22298 },
    { "date": "2020-07-03", "number_of_requests": 85267 },
    { "date": "2020-07-04", "number_of_requests": 68736 },
    { "date": "2020-07-05", "number_of_requests": 63188 },
    { "date": "2020-07-06", "number_of_requests": 84165 },
    { "date": "2020-07-07", "number_of_requests": 87114 },
    { "date": "2020-07-08", "number_of_requests": 62112 },
    { "date": "2020-07-09", "number_of_requests": 59252 },
    { "date": "2020-07-10", "number_of_requests": 93852 },
    { "date": "2020-07-11", "number_of_requests": 49616 },
    { "date": "2020-07-12", "number_of_requests": 63348 },
    { "date": "2020-07-13", "number_of_requests": 55169 },
    { "date": "2020-07-14", "number_of_requests": 73339 },
    { "date": "2020-07-15", "number_of_requests": 67275 },
    { "date": "2020-07-16", "number_of_requests": 73587 },
    { "date": "2020-07-17", "number_of_requests": 55189 },
    { "date": "2020-07-18", "number_of_requests": 62868 },
    { "date": "2020-07-19", "number_of_requests": 70360 },
    { "date": "2020-07-20", "number_of_requests": 72152 },
    { "date": "2020-07-21", "number_of_requests": 92881 },
    { "date": "2020-07-22", "number_of_requests": 83735 },
    { "date": "2020-07-23", "number_of_requests": 80332 },
    { "date": "2020-07-24", "number_of_requests": 73998 },
    { "date": "2020-07-25", "number_of_requests": 58472 },
    { "date": "2020-07-26", "number_of_requests": 87560 },
    { "date": "2020-07-27", "number_of_requests": 124465 },
    { "date": "2020-07-28", "number_of_requests": 0 }
  ],
  "map_data": {
    "last_known_date": "2020-07-27",
    "locations": [
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object]
    ]
  }
}
```

## Applications

There are several ways yoou could leverage this data:

- Creating a public dashboard so anyone can see the stats for your app. See [Spotify Dedup' Stats](https://spotify-dedup.com/stats) as an example.
- Integrating the data in a personal dashboard
- Storing the data so you can get more than 30 days worth of stats, which is what Spotify's developer site shows today.
