import { combineReducers } from 'redux';
import { SIDEBAR_SET_STATE } from './actionTypes';

const isOpen = (state = false, action) => {
  switch (action.type) {
    case SIDEBAR_SET_STATE:
      return action.state;
    default:
      return state;
  }
};

export default combineReducers({
  isOpen,
});
