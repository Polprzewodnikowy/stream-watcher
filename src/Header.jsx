import React from 'react';
import { AppBar, Avatar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  appBar: {
    maxWidth: '100vw'
  },
  title: {
    flexGrow: 1,
    marginLeft: '16px'
  },
  avatar: {
    marginLeft: '8px'
  }
});

export default function Header({ channel, children, displayStatus, setDrawerOpen }) {
  const style = useStyles();

  return (
    <AppBar position='sticky' className={style.appBar}>
      <Toolbar variant='dense'>
        <IconButton color="inherit" onClick={setDrawerOpen}>
          <Menu />
        </IconButton>
        {channel && <Avatar src={channel.logo} className={style.avatar} />}
        <Typography variant='h6' className={style.title} noWrap>
          {channel ? channel.displayName : 'Stream Watcher'}
          {displayStatus && channel && ` - ${channel.status}`}
        </Typography>
        {children}
      </Toolbar>
    </AppBar>
  );
}
