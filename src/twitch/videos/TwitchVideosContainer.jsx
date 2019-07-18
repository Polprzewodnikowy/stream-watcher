import { connect } from 'react-redux';
import TwitchVideos from './TwitchVideos';
import { fetchVideos, clearVideos } from '../actions';

const mapStateToProps = ({
  twitch: {
    channel,
    followed,
    videos: {
      list,
      fetchedAll,
    },
    isFetchingVideos,
  },
}) => ({
  channel,
  followed,
  videos: list,
  fetchedAll,
  isLoading: isFetchingVideos,
});

const mapDispatchToProps = dispatch => ({
  clearData: () => dispatch(clearVideos()),
  fetchData: () => dispatch(fetchVideos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TwitchVideos);
