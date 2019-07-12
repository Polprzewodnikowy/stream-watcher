import { chunk } from 'lodash';
import { buildActionCreator } from 'shared';
import { buildTwitchRequestActionCreator } from './common';
import { fetchGames } from './fetchGames';
import { TWITCH_STREAMS_URL } from '../constants';
import { TWITCH_FETCH_STREAMS, TWITCH_CLEAR_STREAMS } from '../actionTypes';
import { transformStreams } from '../transform';

export const clearStreams = buildActionCreator(TWITCH_CLEAR_STREAMS);

export const fetchStreams = () => (dispatch, getState) => {
  const { twitch: { followedIds: { list } } } = getState();

  if (list.length === 0) {
    return null;
  }

  return dispatch(buildTwitchRequestActionCreator({
    baseAction: TWITCH_FETCH_STREAMS,
    url: TWITCH_STREAMS_URL,
    query: chunk(list, 100).map(ids => ({ user_id: ids })),
    transform: transformStreams,
  }))
    .then(() => dispatch(fetchGames()));
};
