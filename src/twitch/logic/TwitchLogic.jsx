import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { removeHashAndParametersFromUrl } from 'shared/utils';
import { getTokenFromHash } from 'twitch/api';

const TwitchLogic = ({
  fetchInitialData,
  refreshData,
  refreshInterval,
  saveToken,
}) => {
  useEffect(() => {
    const token = getTokenFromHash();
    if (token) {
      saveToken(token);
      removeHashAndParametersFromUrl();
    }
  }, [saveToken]);

  useEffect(() => {
    fetchInitialData();
  }, [fetchInitialData]);

  useEffect(() => {
    const interval = setInterval(refreshData, refreshInterval);
    return () => {
      clearInterval(interval);
    };
  }, [refreshData, refreshInterval]);

  return <div />;
};

TwitchLogic.propTypes = {
  fetchInitialData: PropTypes.func.isRequired,
  refreshData: PropTypes.func.isRequired,
  refreshInterval: PropTypes.number.isRequired,
  saveToken: PropTypes.func.isRequired,
};

export default TwitchLogic;
