import { connect } from 'react-redux';
import { fetchAll, saveToken, fetchStreams } from 'twitch/actions';
import TwitchLogic from './TwitchLogic';

const mapStateToProps = ({ twitch: { refreshInterval } }) => ({ refreshInterval });

const mapDispatchToProps = dispatch => ({
  fetchInitialData: () => dispatch(fetchAll()),
  refreshData: () => dispatch(fetchStreams()),
  saveToken: token => dispatch(saveToken(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TwitchLogic);
