import { buildActionCreator } from 'shared';
import { buildTwitchRequestActionCreator } from './common';
import { TWITCH_GAMES_URL } from '../constants';
import { TWITCH_FETCH_GAMES, TWITCH_CLEAR_GAMES } from '../actionTypes';
import { transformGames, filterAndTransformGameIds } from '../transform';

export const clearGames = buildActionCreator(TWITCH_CLEAR_GAMES);

export const fetchGames = () => (dispatch, getState) => {
  const { twitch: { streams: { list }, games } } = getState();

  const ids = filterAndTransformGameIds(list, games);

  if (ids.length === 0) {
    return null;
  }

  return dispatch(buildTwitchRequestActionCreator({
    baseAction: TWITCH_FETCH_GAMES,
    url: TWITCH_GAMES_URL,
    query: { id: ids, first: 100 },
    transform: transformGames,
  }));
};
