import PropTypes from 'prop-types';
import React from 'react';
import { Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { messages } from 'shared';

const useStyles = makeStyles({
  avatar: {
    marginLeft: '8px',
  },
  text: {
    flexGrow: 1,
    marginLeft: '16px',
  },
});

const Title = ({
  avatarUrl,
  text,
  secondaryText,
  showFullTitle,
}) => {
  const styles = useStyles();

  return (
    <>
      {avatarUrl && <Avatar className={styles.avatar} src={avatarUrl} />}
      <Typography className={styles.text} noWrap variant="h6">
        {text || messages.en.app.title}
        {showFullTitle && secondaryText && ` - ${secondaryText}`}
      </Typography>
    </>
  );
};

Title.defaultProps = {
  avatarUrl: null,
  text: null,
  secondaryText: '',
  showFullTitle: false,
};

Title.propTypes = {
  avatarUrl: PropTypes.string,
  text: PropTypes.string,
  secondaryText: PropTypes.string,
  showFullTitle: PropTypes.bool,
};

export default React.memo(Title);
