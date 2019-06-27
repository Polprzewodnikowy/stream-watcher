import { connect } from 'react-redux';
import {
  setChannel,
  toggleShowChatState,
  twitchLogin,
  twitchLogout,
} from 'twitch/actions';
import ActionButtons from './ActionButtons';

const mapStateToProps = ({ twitch: { token, showChat, user: { avatarUrl } } }) => ({
  avatarUrl,
  isLoggedIn: Boolean(token),
  showChat,
});

const mapDispatchToProps = dispatch => ({
  closeStream: () => dispatch(setChannel(null)),
  login: () => dispatch(twitchLogin()),
  logout: () => dispatch(twitchLogout()),
  toggleChat: () => dispatch(toggleShowChatState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActionButtons);
