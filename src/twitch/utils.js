import {
  TWITCH_PLAYER_ID,
  TWITCH_PLAYER_URL,
  TWITCH_CHAT_URL,
  TWITCH_AUTHORIZATION_URL,
  STREAM_LIVE,
  STREAM_RERUN,
} from './constants';

export const loadTwitchPlayer = () => new Promise((resolve) => {
  const scriptExists = Boolean(document.getElementById(TWITCH_PLAYER_ID));

  if (!scriptExists) {
    const script = document.createElement('script');
    script.setAttribute('src', TWITCH_PLAYER_URL);
    script.setAttribute('id', TWITCH_PLAYER_ID);
    script.addEventListener('load', resolve);
    document.body.appendChild(script);
  } else {
    resolve();
  }
});

export const getChatUrl = channel => TWITCH_CHAT_URL.replace('{{CHANNEL}}', channel);

export const getAuthorizationUrl = (clientID, redirectUri) => TWITCH_AUTHORIZATION_URL
  .replace('{{CLIENT_ID}}', clientID)
  .replace('{{REDIRECT_URI}}', redirectUri);

export const getTwitchClientID = () => process.env.REACT_APP_TWITCH_CLIENT_ID;

export const isStreamLive = type => type === STREAM_LIVE;
export const isStreamRerun = type => type === STREAM_RERUN;
export const isStreamLiveOrRerun = type => isStreamLive(type) || isStreamRerun(type);
