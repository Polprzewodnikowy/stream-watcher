import { connect } from 'react-redux';
import { utils } from 'shared';
import TwitchLogic from './TwitchLogic';
import {
  fetchAll,
  fetchStreams,
  saveToken,
  clearVideos,
  fetchVideos,
} from '../actions';

const mapStateToProps = ({
  twitch: {
    channel,
    refreshInterval,
  },
}) => ({
  channel,
  refreshInterval,
});

const mapDispatchToProps = (dispatch) => ({
  clearUrl: () => utils.removeHashAndParametersFromUrl(),
  fetchInitialData: () => dispatch(fetchAll()),
  getToken: () => {
    const parameters = utils.getParamsFromHash();
    return parameters.access_token;
  },
  refreshData: () => dispatch(fetchStreams()),
  refreshVideos: () => {
    dispatch(clearVideos());
    dispatch(fetchVideos());
  },
  saveToken: (token) => dispatch(saveToken(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TwitchLogic);
