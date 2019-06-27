import { connect } from 'react-redux';
import TwitchView from './TwitchView';

const mapStateToProps = ({
  twitch: { channel, showChat },
}) => ({
  showTwitch: Boolean(channel),
  showChat,
});

export default connect(mapStateToProps)(TwitchView);
