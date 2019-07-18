import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import {
  makeStyles,
  Fade,
  CircularProgress,
  LinearProgress,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  linear: {
    width: '100%',
  },
  overlay: {
    width: '100%',
    height: '100%',
    top: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.grey[900],
  },
}));

const Loader = ({
  isLoading,
  position,
  variant,
  zIndex,
}) => {
  const styles = useStyles();

  const getLoaderVariant = useCallback(() => (
    <div className={styles[variant]} style={{ position, zIndex, top: position === 'sticky' ? 0 : null }}>
      {{
        inline: (<CircularProgress color="inherit" />),
        linear: (<LinearProgress color="secondary" />),
        overlay: (<CircularProgress color="inherit" />),
      }[variant]}
    </div>
  ), [styles, position, variant, zIndex]);

  return (
    <Fade mountOnEnter unmountOnExit in={isLoading}>
      {getLoaderVariant()}
    </Fade>
  );
};

Loader.defaultProps = {
  isLoading: false,
  position: null,
  variant: 'inline',
  zIndex: null,
};

Loader.propTypes = {
  isLoading: PropTypes.bool,
  position: PropTypes.oneOf([null, 'fixed', 'absolute', 'sticky']),
  variant: PropTypes.oneOf(['inline', 'overlay', 'linear']),
  zIndex: PropTypes.number,
};

export default Loader;
