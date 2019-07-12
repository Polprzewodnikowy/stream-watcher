import { uniqBy } from 'lodash';
import { buildActionReducers } from 'shared';
import {
  TWITCH_FETCH_FOLLOWED_USERS,
  TWITCH_FETCH_FOLLOWED_USERS_SUCCESS,
  TWITCH_FETCH_FOLLOWED_USERS_ERROR,
  TWITCH_CLEAR_FOLLOWED_USERS,
} from '../actionTypes';

const followed = (state = [], { type, payload }) => {
  switch (type) {
    case TWITCH_FETCH_FOLLOWED_USERS_SUCCESS:
      return uniqBy([...state, ...payload.data], 'userId');
    case TWITCH_CLEAR_FOLLOWED_USERS:
      return [];
    default:
      return state;
  }
};

const [
  isFetchingFollowed,
  fetchedFollowedSuccessfully,
  fetchedFollowedInitial,
] = buildActionReducers({
  start: TWITCH_FETCH_FOLLOWED_USERS,
  success: TWITCH_FETCH_FOLLOWED_USERS_SUCCESS,
  error: TWITCH_FETCH_FOLLOWED_USERS_ERROR,
  clear: TWITCH_CLEAR_FOLLOWED_USERS,
});

export {
  followed,
  isFetchingFollowed,
  fetchedFollowedSuccessfully,
  fetchedFollowedInitial,
};
