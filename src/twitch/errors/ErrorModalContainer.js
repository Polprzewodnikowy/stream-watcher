import { connect } from 'react-redux';
import ErrorModal from './ErrorModal';
import { clearErrors } from '../actions';

const mapStateToProps = ({ twitch: { errors } }) => {
  const {
    user,
    followed,
    streams,
    games,
  } = errors;

  const firstError = user || followed || streams || games;

  return {
    error: firstError,
    isModalVisible: Boolean(firstError),
  };
};

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorModal);
