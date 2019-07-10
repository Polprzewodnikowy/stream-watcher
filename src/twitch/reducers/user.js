import { TWITCH_FETCH_USER_SUCCESS, TWITCH_CLEAR_USER } from '../actionTypes';

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

export default user;
