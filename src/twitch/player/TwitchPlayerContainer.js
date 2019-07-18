import { connect } from 'react-redux';
import TwitchPlayer from './TwitchPlayer';

const mapStateToProps = ({ twitch: { channel, video } }) => ({ channel, video });

export default connect(mapStateToProps)(TwitchPlayer);
