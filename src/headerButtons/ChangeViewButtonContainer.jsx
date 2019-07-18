import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Videocam, VideocamOutlined } from '@material-ui/icons';
import { messages } from 'shared';
import { twitchActions } from 'twitch';
import ActionButton from './ActionButton';

const RefreshDataButton = ({ changeView, show, showVideos }) => (
  show && (
    <ActionButton
      icon
      tooltip={messages.en.actions.tooltips.showVideos}
      onClick={changeView}
    >
      {showVideos ? (
        <Videocam />
      ) : (
        <VideocamOutlined />
      )}
    </ActionButton>
  )
);

RefreshDataButton.propTypes = {
  changeView: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  showVideos: PropTypes.bool.isRequired,
};

const mapStateToProps = ({
  twitch: {
    channel,
    showVideos,
  },
}) => ({
  show: Boolean(channel),
  showVideos,
});

const mapDispatchToProps = dispatch => ({
  changeView: () => dispatch(twitchActions.toggleShowVideosState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RefreshDataButton);
