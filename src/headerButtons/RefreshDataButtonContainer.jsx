import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Refresh } from '@material-ui/icons';
import { messages } from 'shared';
import { twitchActions } from 'twitch';
import ActionButton from './ActionButton';

const RefreshDataButton = ({ refreshData }) => (
  <ActionButton
    icon
    tooltip={messages.en.actions.tooltips.refreshData}
    onClick={refreshData}
  >
    <Refresh />
  </ActionButton>
);

RefreshDataButton.propTypes = {
  refreshData: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  refreshData: () => {
    dispatch(twitchActions.clearAll());
    dispatch(twitchActions.fetchAll());
  },
});

export default connect(null, mapDispatchToProps)(RefreshDataButton);
