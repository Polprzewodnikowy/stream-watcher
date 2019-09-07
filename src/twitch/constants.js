export const TWITCH_AUTHORIZATION_URL = `${process.env.REACT_APP_TWITCH_MOCK_SERVER_URL || 'https://id.twitch.tv'}/oauth2/authorize`;

export const TWITCH_API_URL = `${process.env.REACT_APP_TWITCH_MOCK_SERVER_URL || 'https://api.twitch.tv'}/helix`;

export const TWITCH_USERS_URL = `${TWITCH_API_URL}/users`;
export const TWITCH_USERS_FOLLOWS_URL = `${TWITCH_USERS_URL}/follows`;
export const TWITCH_STREAMS_URL = `${TWITCH_API_URL}/streams`;
export const TWITCH_GAMES_URL = `${TWITCH_API_URL}/games`;
export const TWITCH_VIDEOS_URL = `${TWITCH_API_URL}/videos`;

export const TWITCH_PLAYER_SCRIPT_URL = 'https://player.twitch.tv/js/embed/v1.js';
export const TWITCH_CHAT_URL = 'https://www.twitch.tv/embed/%{channel}/chat?darkpopout';

export const TWITCH_PLAYER_SCRIPT_ID = 'twitch-player-script';

export const TWITCH_DEFAULT_REFRESH_INTERVAL = 60 * 1000;

export const TWITCH_STREAM_TYPE_LIVE = 'live';
