import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Close, ArrowBack } from '@material-ui/icons';
import { messages } from 'shared';
import { twitchActions } from 'twitch';
import ActionButton from './ActionButton';

const { tooltips } = messages.en.actions;

const CloseStreamButton = ({
  closeStreamOrVideo,
  show,
  tooltip,
  icon,
}) => (
  show && (
    <ActionButton
      icon
      tooltip={tooltip}
      onClick={closeStreamOrVideo}
    >
      {{
        close: (<Close />),
        back: (<ArrowBack />),
      }[icon]}
    </ActionButton>
  )
);

CloseStreamButton.propTypes = {
  closeStreamOrVideo: PropTypes.func.isRequired,
  icon: PropTypes.oneOf(['close', 'back']),
  show: PropTypes.bool.isRequired,
  tooltip: PropTypes.string.isRequired,
};

const mapStateToProps = ({ twitch: { channel, video } }) => ({ channel, video });

const mapDispatchToProps = dispatch => ({
  closeStream: () => {
    dispatch(twitchActions.clearChannel());
    dispatch(twitchActions.setShowVideosState(false));
  },
  closeVideo: () => {
    dispatch(twitchActions.clearVideo());
    dispatch(twitchActions.setShowVideosState(false));
  },
});

const mergeProps = ({ channel, video }, { closeStream, closeVideo }) => ({
  closeStreamOrVideo: () => {
    if (video) {
      closeVideo();
    } else {
      closeStream();
    }
  },
  icon: (video && 'back') || (channel && 'close') || null,
  tooltip: video ? tooltips.closeVideo : tooltips.closeStream,
  show: Boolean(video || channel),
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(CloseStreamButton);
