import { connect } from 'react-redux';
import { setSidebarState } from 'sidebar/actions';
import Channel from './Channel';
import { clearVideo, setChannel } from '../../actions';

const mapDispatchToProps = dispatch => ({
  changeChannel: (channel) => {
    dispatch(setSidebarState(false));
    dispatch(clearVideo());
    dispatch(setChannel(channel));
  },
});

export default connect(null, mapDispatchToProps)(Channel);
