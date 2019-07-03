import { connect } from 'react-redux';
import { utils } from 'shared';
import TwitchLogic from './TwitchLogic';
import { fetchAll, fetchStreams, saveToken } from '../actions';

const mapStateToProps = ({ twitch: { refreshInterval } }) => ({ refreshInterval });

const mapDispatchToProps = dispatch => ({
  clearUrl: () => utils.removeHashAndParametersFromUrl(),
  fetchInitialData: () => dispatch(fetchAll()),
  getToken: () => utils.getParamsFromHash().access_token,
  refreshData: () => dispatch(fetchStreams()),
  saveToken: token => dispatch(saveToken(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TwitchLogic);
