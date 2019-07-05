import { utils } from 'shared';
import {
  TWITCH_AUTHORIZATION_URL,
  TWITCH_CHAT_URL,
  TWITCH_PLAYER_URL,
  TWITCH_PLAYER_ID,
  STREAM_LIVE,
  STREAM_RERUN,
} from './constants';

export const getTwitchClientID = () => process.env.REACT_APP_TWITCH_CLIENT_ID;

export const getRedirectURL = () => `${new URL(window.location.href).origin}${utils.getPublicURL()}`;

export const getAuthorizationUrl = () => `${TWITCH_AUTHORIZATION_URL}?${utils.createQueryParameters({
  client_id: getTwitchClientID(),
  redirect_uri: getRedirectURL(),
  response_type: 'token',
})}`;

export const getChatUrl = channel => TWITCH_CHAT_URL.replace('{{CHANNEL}}', channel);

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

export const isStreamLive = type => type === STREAM_LIVE;
export const isStreamRerun = type => type === STREAM_RERUN;
export const isStreamLiveOrRerun = type => isStreamLive(type) || isStreamRerun(type);
