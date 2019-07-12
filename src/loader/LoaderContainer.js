import { connect } from 'react-redux';
import { isInitialLoading } from 'twitch/selectors';
import Loader from './Loader';

const mapStateToProps = ({ twitch }) => ({ isLoading: isInitialLoading(twitch) });

export default connect(mapStateToProps)(Loader);
