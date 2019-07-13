import { connect } from 'react-redux';
import { Delay } from 'shared';
import Loader from './Loader';

const mapStateToProps = ({
  twitch: {
    isFetchingUser,
    isFetchingFollowedIds,
    isFetchingFollowed,
    isFetchingStreams,
    streams,
    isFetchingGames,
    games,
  },
}) => ({
  delayKey: 'isLoading',
  delayValue: (
    isFetchingUser
    || isFetchingFollowedIds
    || isFetchingFollowed
    || (isFetchingStreams && !streams.length)
    || (isFetchingGames && !games.length)
  ),
});

export default connect(mapStateToProps)(Delay(Loader));
