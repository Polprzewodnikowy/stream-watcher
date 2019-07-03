export const TWITCH_AUTHORIZATION_URL = 'https://id.twitch.tv/oauth2/authorize';

export const TWITCH_API_URL = 'https://api.twitch.tv/helix';

export const TWITCH_USERS_URL = `${TWITCH_API_URL}/users`;
export const TWITCH_USERS_FOLLOWS_URL = `${TWITCH_USERS_URL}/follows`;
export const TWITCH_STREAMS_URL = `${TWITCH_API_URL}/streams`;
export const TWITCH_GAMES_URL = `${TWITCH_API_URL}/games`;

export const TWITCH_PLAYER_URL = 'https://player.twitch.tv/js/embed/v1.js';
export const TWITCH_CHAT_URL = 'https://www.twitch.tv/embed/{{CHANNEL}}/chat?darkpopout';

export const TWITCH_PLAYER_ID = 'twitch-player-script';

export const DEFAULT_REFRESH_INTERVAL = 60 * 1000;

export const STREAM_LIVE = 'live';
export const STREAM_RERUN = 'rerun';
