import { uniqBy } from 'lodash';
import { TWITCH_FETCH_FOLLOWED_USERS_SUCCESS, TWITCH_CLEAR_FOLLOWED_USERS } from '../actionTypes';

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

export default followed;
