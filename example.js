const SpotifyAppStats = require("./index");

(async () => {
  const spotifyAppStats = new SpotifyAppStats();
  await spotifyAppStats.init();
  await spotifyAppStats.login(
    "<your_spotify_username>",
    "<your_spotify_password>"
  );
  const stats = await spotifyAppStats.getStats("<your_application_id>");
  spotifyAppStats.destroy();
  console.log(stats);
})();
