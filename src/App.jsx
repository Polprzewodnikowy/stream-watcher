import React, { useContext, useEffect, useState } from 'react';
import { Divider, Grid, IconButton, MenuItem, MenuList, SwipeableDrawer } from '@material-ui/core';
import { Close, ChatSharp } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import { Context, SET_CHANNEL, SET_USERNAME, SET_SHOW_CHAT } from './ContextProvider';
import Channel from './Channel';
import Header from './Header';
import TwitchPlayer from './TwitchPlayer';
import UserInput from './UserInput';
import { getChannels } from './twitchApi';
import TwitchChat from './TwitchChat';

const useStyles = makeStyles({
  app: {
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateRows: 'auto 1fr'
  },
  list: {
    width: '400px',
    maxWidth: '400px'
  },
  player: {
    width: '100%'
  },
  chat: {
    minWidth: '335px'
  }
});

export default function App() {
  const style = useStyles();

  const { state, dispatch } = useContext(Context);

  const [channelList, setChannelList] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const setChannel = (channel) => {
    dispatch({ type: SET_CHANNEL, payload: channel })
  }

  const setUsername = (username) => {
    dispatch({ type: SET_USERNAME, payload: username })
  }

  const toggleShowChat = () => {
    dispatch({ type: SET_SHOW_CHAT, payload: !state.showChat });
  }

  const fetchChannelList = () => {
    if (state.username) {
      getChannels(state.username)
        .then(list => {
          setChannelList(list)
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    fetchChannelList();
    const interval = 60000;
    const timer = setInterval(fetchChannelList, interval);
    return () => {
      clearInterval(timer);
    }
  }, [state.username]);

  const ChannelList = ({ list }) => (
    list.map(
      (channel, key) => (
        <MenuItem button key={key} onClick={() => setChannel(channel)}>
          <Channel channel={channel} />
        </MenuItem>
      )
    )
  );

  return (
    <div className={style.app}>
      <SwipeableDrawer open={drawerOpen} onOpen={() => setDrawerOpen(true)} onClose={() => setDrawerOpen(false)}>
        <Header channel={state.channel} setDrawerOpen={() => setDrawerOpen(false)} />
        <MenuList className={style.list}>
          <MenuItem button={false}>
            <UserInput username={state.username} setUsername={setUsername} />
          </MenuItem>
          <Divider />
          <ChannelList list={channelList} />
        </MenuList>
      </SwipeableDrawer>
      <Header displayStatus channel={state.channel} setDrawerOpen={() => setDrawerOpen(true)}>
        {
          state.channel &&
          <>
            <IconButton onClick={toggleShowChat}><ChatSharp /></IconButton>
            <IconButton onClick={() => setChannel(null)}><Close /></IconButton>
          </>
        }
      </Header>
      <Grid container wrap='nowrap'>
        {
          state.channel &&
          <Grid item className={style.player}>
            <TwitchPlayer channel={state.channel} />
          </Grid>
        }
        {
          state.channel && state.showChat &&
          <Grid item className={style.chat}>
            <TwitchChat channel={state.channel} />
          </Grid>
        }
      </Grid>
    </div>
  );
}
