import { connect } from 'react-redux';
import TwitchChat from './TwitchChat';

const mapStateToProps = ({ twitch: { channel } }) => ({ channel });

export default connect(mapStateToProps)(TwitchChat);
