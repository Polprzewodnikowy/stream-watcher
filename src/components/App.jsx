import React, { useContext } from 'react'
import { Avatar, ButtonBase, IconButton, Tooltip, Grid } from '@material-ui/core'
import { ChatSharp, Close, Person } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import { AppContext } from '../context/AppContext'
import { TwitchContext } from '../context/TwitchContext'
import Header from './Header'
import Title from './Title'
import SideMenu from './SideMenu'
import TwitchPlayer from './TwitchPlayer'
import TwitchChat from './TwitchChat'

const useStyles = makeStyles({
  app: {
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
  },
  player: {
    width: '100%',
  },
  chat: {
    minWidth: '335px',
  },
  hideChat: {
    display: 'none',
  },
  avatar: {
    marginLeft: '8px'
  }
})

export default function App() {
  const { showChat, setShowChat } = useContext(AppContext)
  const { userInfo, selectedStream, setSelectedStream, login, logout } = useContext(TwitchContext)
  const styles = useStyles()

  return (
    <div className={styles.app}>
      <Header>
        <Title showStatus />
        <Tooltip title='Toggle chat'>
          <IconButton onClick={() => setShowChat(!showChat)}>
            <ChatSharp />
          </IconButton>
        </Tooltip>
        <Tooltip title='Close stream'>
          <IconButton onClick={() => setSelectedStream(null)}>
            <Close />
          </IconButton>
        </Tooltip>
        {!userInfo &&
        <Tooltip title='Login'>
          <IconButton onClick={() => login()}>
            <Person />
          </IconButton>
        </Tooltip>}
        {userInfo &&
        <Tooltip title='Logout'>
          <ButtonBase onClick={() => logout()}>
            <Avatar className={styles.avatar} src={userInfo.profile_image_url} />
          </ButtonBase>
        </Tooltip>}
      </Header>
      <Grid container wrap='nowrap'>
        <Grid item className={styles.player}>
          {selectedStream && <TwitchPlayer stream={selectedStream} />}
        </Grid>
        <Grid item className={showChat ? styles.chat : styles.hideChat}>
          {selectedStream && <TwitchChat stream={selectedStream} />}
        </Grid>
      </Grid>
      <SideMenu />
    </div>
  )
}
