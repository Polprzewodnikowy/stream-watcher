import React from 'react';
import { Avatar, Grid, ListItemText, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  dimAvatar: {
    filter: 'grayscale(100%) brightness(50%)'
  }
});

export default function Channel({ channel }) {
  const style = useStyles();

  const { displayName, game, logo, streamType, viewers } = channel;
  let liveIcon = '';
  let avatarClassName = '';

  switch (streamType) {
    case 'live':
      liveIcon = '🔴';
      break;
    case 'rerun':
      liveIcon = '🔵';
      break;
    default:
      avatarClassName = style.dimAvatar;
  }

  const primaryText = (
    <Typography>{displayName}</Typography>
  );

  const secondaryText = (
    <Grid container spacing={8} justify='space-between' wrap='nowrap'>
      <Grid item zeroMinWidth>
        <Typography color='textSecondary' noWrap>{game}</Typography>
      </Grid>
      <Grid item>
        <Typography color='textSecondary'>{liveIcon} {(viewers >= 0) && viewers}</Typography>
      </Grid>
    </Grid>
  );

  return (
    <>
      <Avatar className={avatarClassName} src={logo} />
      <ListItemText disableTypography primary={primaryText} secondary={secondaryText} />
    </>
  );
}
