const AUTH_PROTOCOL = process.env.REACT_APP_TWITCH_AUTH_PROTOCOL || 'https';
const AUTH_HOST = process.env.REACT_APP_TWITCH_AUTH_HOST || 'id.twitch.tv';
const AUTH_PORT = process.env.REACT_APP_TWITCH_AUTH_PORT || '443';

const HELIX_PROTOCOL = process.env.REACT_APP_TWITCH_HELIX_PROTOCOL || 'https';
const HELIX_HOST = process.env.REACT_APP_TWITCH_HELIX_HOST || 'api.twitch.tv';
const HELIX_PORT = process.env.REACT_APP_TWITCH_HELIX_PORT || '443';

export const TWITCH_AUTHORIZATION_URL = `${AUTH_PROTOCOL}://${AUTH_HOST}:${AUTH_PORT}/oauth2/authorize`;
export const TWITCH_API_URL = `${HELIX_PROTOCOL}://${HELIX_HOST}:${HELIX_PORT}/helix`;

export const TWITCH_USERS_URL = `${TWITCH_API_URL}/users`;
export const TWITCH_USERS_FOLLOWS_URL = `${TWITCH_USERS_URL}/follows`;
export const TWITCH_STREAMS_URL = `${TWITCH_API_URL}/streams`;
export const TWITCH_GAMES_URL = `${TWITCH_API_URL}/games`;
export const TWITCH_VIDEOS_URL = `${TWITCH_API_URL}/videos`;

export const TWITCH_PLAYER_SCRIPT_URL = 'https://player.twitch.tv/js/embed/v1.js';
export const TWITCH_CHAT_URL = 'https://www.twitch.tv/embed/%{channel}/chat?parent=%{parent}&darkpopout';

export const TWITCH_PLAYER_SCRIPT_ID = 'twitch-player-script';

export const TWITCH_DEFAULT_REFRESH_INTERVAL = 60 * 1000;

export const TWITCH_STREAM_TYPE_LIVE = 'live';

export const PUBLIC_URL = process.env.PUBLIC_URL || '';
export const PUBLIC_DOMAIN = process.env.REACT_APP_PUBLIC_DOMAIN || 'localhost';
