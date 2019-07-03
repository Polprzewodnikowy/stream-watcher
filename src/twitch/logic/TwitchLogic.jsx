import PropTypes from 'prop-types';
import { useEffect } from 'react';

const TwitchLogic = ({
  clearUrl,
  fetchInitialData,
  getToken,
  refreshData,
  refreshInterval,
  saveToken,
}) => {
  useEffect(() => {
    const token = getToken();
    if (token) {
      saveToken(token);
      clearUrl();
    }
  }, [getToken, saveToken, clearUrl]);

  useEffect(() => {
    fetchInitialData();
  }, [fetchInitialData]);

  useEffect(() => {
    const interval = setInterval(refreshData, refreshInterval);
    return () => {
      clearInterval(interval);
    };
  }, [refreshData, refreshInterval]);

  return null;
};

TwitchLogic.propTypes = {
  clearUrl: PropTypes.func.isRequired,
  fetchInitialData: PropTypes.func.isRequired,
  getToken: PropTypes.func.isRequired,
  refreshData: PropTypes.func.isRequired,
  refreshInterval: PropTypes.number.isRequired,
  saveToken: PropTypes.func.isRequired,
};

export default TwitchLogic;
