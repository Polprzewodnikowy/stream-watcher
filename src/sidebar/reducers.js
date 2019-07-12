import { combineReducers } from 'redux';
import { SIDEBAR_SET_STATE } from './actionTypes';

const isOpen = (state = false, { type, open }) => {
  switch (type) {
    case SIDEBAR_SET_STATE:
      return open;
    default:
      return state;
  }
};

export default combineReducers({
  isOpen,
});
