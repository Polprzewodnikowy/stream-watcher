import { connect } from 'react-redux';
import TwitchErrorModal from './TwitchErrorModal';
import { clearErrors } from '../actions';

const mapStateToProps = ({ twitch: { errors } }) => {
  const {
    user,
    followedIds,
    followed,
    streams,
    games,
  } = errors;

  const firstError = user || followedIds || followed || streams || games;

  return {
    error: firstError,
    isModalVisible: Boolean(firstError),
  };
};

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TwitchErrorModal);
