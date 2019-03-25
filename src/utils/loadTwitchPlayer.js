const TWITCH_PLAYER_URL = 'https://player.twitch.tv/js/embed/v1.js';
const TWITCH_PLAYER_ID = 'twitch-player-script';

export default function loadTwitchPlayer() {
  return new Promise(resolve => {
    const existingScript = document.getElementById(TWITCH_PLAYER_ID);

    if (!existingScript) {
      const script = document.createElement('script');
      script.setAttribute('src', TWITCH_PLAYER_URL);
      script.setAttribute('id', TWITCH_PLAYER_ID);
      script.addEventListener('load', resolve);
      document.body.appendChild(script);
    }

    if (existingScript) {
      resolve();
    }
  });
};
