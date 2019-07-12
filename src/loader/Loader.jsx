import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles, LinearProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  loader: {
    position: 'absolute',
    width: '100%',
    zIndex: theme.zIndex.progress,
  },
}));

const LoaderProgress = withStyles({
  root: {
    height: '1px',
  },
})(LinearProgress);

const Loader = ({ isLoading }) => {
  const styles = useStyles();

  return (
    <div className={styles.loader}>
      {isLoading && <LoaderProgress color="secondary" variant="query" />}
    </div>
  );
};

Loader.defaultProps = {
  isLoading: false,
};

Loader.propTypes = {
  isLoading: PropTypes.bool,
};

export default Loader;
