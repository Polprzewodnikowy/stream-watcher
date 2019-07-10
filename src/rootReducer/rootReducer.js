import { combineReducers } from 'redux';
import sidebar from 'sidebar/reducers';
import twitch from 'twitch/reducers';

export default combineReducers({
  sidebar,
  twitch,
});
