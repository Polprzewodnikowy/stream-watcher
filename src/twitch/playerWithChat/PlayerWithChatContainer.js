import { connect } from 'react-redux';
import PlayerWithChat from './PlayerWithChat';

const mapStateToProps = ({
  twitch: {
    channel,
    showChat,
  },
}) => ({
  isVisible: Boolean(channel),
  showChat,
});

export default connect(mapStateToProps)(PlayerWithChat);
