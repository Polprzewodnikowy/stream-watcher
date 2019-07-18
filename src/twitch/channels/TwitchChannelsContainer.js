import { connect } from 'react-redux';
import TwitchChannels from './TwitchChannels';
import { getChannels, getSelectedChannel } from '../selectors';

const mapStateToProps = ({ twitch }) => ({
  channels: getChannels(twitch),
  selectedChannel: getSelectedChannel(twitch),
});

export default connect(mapStateToProps)(TwitchChannels);
