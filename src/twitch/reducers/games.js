import { uniqBy } from 'lodash';
import { buildActionReducers } from 'shared';
import {
  TWITCH_FETCH_GAMES,
  TWITCH_FETCH_GAMES_SUCCESS,
  TWITCH_FETCH_GAMES_ERROR,
  TWITCH_CLEAR_GAMES,
} from '../actionTypes';

const games = (state = [], { type, payload }) => {
  switch (type) {
    case TWITCH_FETCH_GAMES_SUCCESS:
      return uniqBy([...state, ...payload.data], 'gameId');
    case TWITCH_CLEAR_GAMES:
      return [];
    default:
      return state;
  }
};

const [
  isFetchingGames,
  fetchedGamesSuccessfully,
] = buildActionReducers({
  start: TWITCH_FETCH_GAMES,
  success: TWITCH_FETCH_GAMES_SUCCESS,
  error: TWITCH_FETCH_GAMES_ERROR,
  clear: TWITCH_CLEAR_GAMES,
});

export {
  games,
  isFetchingGames,
  fetchedGamesSuccessfully,
};
