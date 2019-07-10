import { uniqBy } from 'lodash';
import { TWITCH_FETCH_GAMES_SUCCESS, TWITCH_CLEAR_GAMES } from '../actionTypes';

const games = (state = [], { type, payload }) => {
  switch (type) {
    case TWITCH_FETCH_GAMES_SUCCESS:
      return uniqBy([...payload.data, ...state], 'gameId');
    case TWITCH_CLEAR_GAMES:
      return [];
    default:
      return state;
  }
};

export default games;
