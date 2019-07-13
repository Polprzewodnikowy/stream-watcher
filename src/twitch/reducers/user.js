import { buildActionReducers } from 'shared';
import {
  TWITCH_FETCH_USER,
  TWITCH_FETCH_USER_SUCCESS,
  TWITCH_FETCH_USER_ERROR,
  TWITCH_CLEAR_USER,
} from '../actionTypes';

const user = (state = {}, { type, payload }) => {
  switch (type) {
    case TWITCH_FETCH_USER_SUCCESS:
      return payload.data[0];
    case TWITCH_CLEAR_USER:
      return {};
    default:
      return state;
  }
};

const [
  isFetchingUser,
  fetchedUserSuccessfully,
] = buildActionReducers({
  start: TWITCH_FETCH_USER,
  success: TWITCH_FETCH_USER_SUCCESS,
  error: TWITCH_FETCH_USER_ERROR,
  clear: TWITCH_CLEAR_USER,
});

export {
  user,
  isFetchingUser,
  fetchedUserSuccessfully,
};
