import { connect } from 'react-redux';
import TwitchPlayer from './TwitchPlayer';

const mapStateToProps = ({ twitch: { channel } }) => ({ channel });

export default connect(mapStateToProps)(TwitchPlayer);
