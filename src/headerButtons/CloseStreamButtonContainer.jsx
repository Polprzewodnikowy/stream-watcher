import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Close } from '@material-ui/icons';
import { messages } from 'shared';
import { twitchActions } from 'twitch';
import ActionButton from './ActionButton';

const CloseStreamButton = ({ closeStream }) => (
  <ActionButton
    icon
    tooltip={messages.en.actions.tooltips.closeStream}
    onClick={closeStream}
  >
    <Close />
  </ActionButton>
);

CloseStreamButton.propTypes = {
  closeStream: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  closeStream: () => dispatch(twitchActions.setChannel(null)),
});

export default connect(null, mapDispatchToProps)(CloseStreamButton);
