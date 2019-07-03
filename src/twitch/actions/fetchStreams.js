import { buildActionCreator } from 'shared';
import { buildTwitchRequestActionCreator } from './common';
import { fetchGames } from './fetchGames';
import { TWITCH_STREAMS_URL } from '../constants';
import { TWITCH_FETCH_STREAMS, TWITCH_CLEAR_STREAMS } from '../actionTypes';
import { transformStreams } from '../transform';

export const clearStreams = buildActionCreator(TWITCH_CLEAR_STREAMS);

export const fetchStreams = () => (dispatch, getState) => {
  const { twitch: { followed } } = getState();

  if (followed.length <= 0) {
    return null;
  }

  const ids = followed.map(({ userId }) => userId);

  return dispatch(buildTwitchRequestActionCreator({
    baseAction: TWITCH_FETCH_STREAMS,
    url: TWITCH_STREAMS_URL,
    query: { user_id: ids, first: 100 },
    transform: transformStreams,
  }))
    .then(() => dispatch(fetchGames()));
};
