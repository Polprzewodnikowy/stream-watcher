import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Close } from '@material-ui/icons';
import { setChannel } from 'twitch/actions';
import { messages } from 'shared';
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
  closeStream: () => dispatch(setChannel(null)),
});

export default connect(null, mapDispatchToProps)(CloseStreamButton);
