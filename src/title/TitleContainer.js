import { connect } from 'react-redux';
import { getChannelAvatarUrl, getChannelName, getStreamTitle } from 'twitch/selectors';
import Title from './Title';

const mapStateToProps = ({ twitch }) => ({
  avatarUrl: getChannelAvatarUrl(twitch),
  text: getChannelName(twitch),
  secondaryText: getStreamTitle(twitch),
});

export default connect(mapStateToProps)(Title);
