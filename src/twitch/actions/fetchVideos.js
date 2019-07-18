import { buildActionCreator } from 'shared';
import { buildTwitchRequestActionCreator } from './common';
import { TWITCH_VIDEOS_URL } from '../constants';
import { TWITCH_FETCH_VIDEOS, TWITCH_CLEAR_VIDEOS } from '../actionTypes';
import { transformVideos } from '../transform';
import { getSelectedChannel } from '../selectors';

export const clearVideos = buildActionCreator(TWITCH_CLEAR_VIDEOS);

export const fetchVideos = () => (dispatch, getState) => {
  const { twitch } = getState();

  const { userId } = getSelectedChannel(twitch);

  if (!userId) {
    return null;
  }

  const { videos: { cursor } } = twitch;

  return dispatch(buildTwitchRequestActionCreator({
    baseAction: TWITCH_FETCH_VIDEOS,
    url: TWITCH_VIDEOS_URL,
    query: { user_id: userId, first: 16, after: cursor },
    transform: transformVideos,
  }));
};
