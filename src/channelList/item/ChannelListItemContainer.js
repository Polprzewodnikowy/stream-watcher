import { connect } from 'react-redux';
import { twitchActions } from 'twitch';
import ChannelListItem from './ChannelListItem';

const mapDispatchToProps = dispatch => ({
  changeChannel: channel => dispatch(twitchActions.setChannel(channel)),
});

export default connect(null, mapDispatchToProps)(ChannelListItem);
