import moment from 'moment';
import 'moment-duration-format';
import { utils, messages } from 'shared';
import {
  TWITCH_AUTHORIZATION_URL,
  TWITCH_CHAT_URL,
  TWITCH_PLAYER_SCRIPT_URL,
  TWITCH_PLAYER_SCRIPT_ID,
  TWITCH_STREAM_TYPE_LIVE,
} from './constants';

export const getTwitchClientID = () => process.env.REACT_APP_TWITCH_CLIENT_ID;
export const getRedirectUrl = () => `${new URL(window.location.href).origin}${utils.getPublicUrl()}`;
export const getAuthorizationUrl = () => `${TWITCH_AUTHORIZATION_URL}?${utils.createQueryParameters({
  client_id: getTwitchClientID(),
  redirect_uri: getRedirectUrl(),
  response_type: 'token',
})}`;

export const getChatUrl = (channel) => TWITCH_CHAT_URL.replace('%{channel}', channel);
export const getThumbnailUrl = (thumbnail, width, height) => thumbnail.replace('%{width}', width).replace('%{height}', height);

export const getDurationText = (duration) => moment.duration(`PT${duration}`.toUpperCase()).format('HH:mm:ss');
export const getViewCountText = (viewCount) => `${viewCount} ${messages.en.twitch.labels.views}`;
export const getPublishedAtText = (publishedAt) => moment(publishedAt).fromNow();

export const isStreamLive = (type) => type === TWITCH_STREAM_TYPE_LIVE;

export const loadTwitchPlayer = () => new Promise((resolve) => {
  const scriptExists = Boolean(document.getElementById(TWITCH_PLAYER_SCRIPT_ID));
  if (!scriptExists) {
    const script = document.createElement('script');
    script.setAttribute('src', TWITCH_PLAYER_SCRIPT_URL);
    script.setAttribute('id', TWITCH_PLAYER_SCRIPT_ID);
    script.addEventListener('load', resolve);
    document.body.appendChild(script);
  } else {
    resolve();
  }
});
