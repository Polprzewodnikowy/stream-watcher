import { combineReducers } from 'redux';
import twitch from 'twitch/reducers';
import sidebar from 'sidebar/reducers';

export default combineReducers({
  twitch,
  sidebar,
});
