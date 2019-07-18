import { connect } from 'react-redux';
import VideoTile from './VideoTile';
import { setShowVideosState, setVideo } from '../actions';

const mapDispatchToProps = dispatch => ({
  onVideoClick: (videoId) => {
    dispatch(setShowVideosState(false));
    dispatch(setVideo(videoId));
  },
});

export default connect(null, mapDispatchToProps)(VideoTile);
