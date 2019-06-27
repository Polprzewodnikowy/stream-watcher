import { connect } from 'react-redux';
import { setChannel } from 'twitch/actions';
import ChannelListItem from './ChannelListItem';

const mapDispatchToProps = dispatch => ({
  changeChannel: channel => dispatch(setChannel(channel)),
});

export default connect(null, mapDispatchToProps)(ChannelListItem);
