import {
  TWITCH_FETCH_USER_ERROR,
  TWITCH_FETCH_FOLLOWED_IDS_ERROR,
  TWITCH_FETCH_FOLLOWED_USERS_ERROR,
  TWITCH_FETCH_STREAMS_ERROR,
  TWITCH_FETCH_GAMES_ERROR,
  TWITCH_CLEAR_ERRORS,
} from '../actionTypes';

const errors = (state = {}, action) => {
  switch (action.type) {
    case TWITCH_FETCH_USER_ERROR:
      return { ...state, user: action.error };
    case TWITCH_FETCH_FOLLOWED_IDS_ERROR:
      return { ...state, followedIds: action.error };
    case TWITCH_FETCH_FOLLOWED_USERS_ERROR:
      return { ...state, followed: action.error };
    case TWITCH_FETCH_STREAMS_ERROR:
      return { ...state, streams: action.error };
    case TWITCH_FETCH_GAMES_ERROR:
      return { ...state, games: action.error };
    case TWITCH_CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
};

export default errors;
