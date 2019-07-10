import { connect } from 'react-redux';
import { getChannelList, getChannel } from 'twitch/selectors';
import ChannelList from './ChannelList';

const mapStateToProps = ({ twitch }) => ({
  selectedChannel: getChannel(twitch),
  channels: getChannelList(twitch),
});

export default connect(mapStateToProps)(ChannelList);
