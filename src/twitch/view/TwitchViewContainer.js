import { connect } from 'react-redux';
import TwitchView from './TwitchView';

const mapStateToProps = ({ twitch: { showVideos } }) => ({ showVideos });

export default connect(mapStateToProps)(TwitchView);
