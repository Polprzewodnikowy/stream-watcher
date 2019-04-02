import React, { useContext } from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { AppContext } from '../context/AppContext'
import { TwitchContext } from '../context/TwitchContext'
import Header from './Header'
import Title from './Title'
import Actions from './Actions'
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
})

export default function App() {
  const { showChat } = useContext(AppContext)
  const { selectedStream } = useContext(TwitchContext)
  const styles = useStyles()

  return (
    <div className={styles.app}>
      <Header>
        <Title showStatus />
        <Actions />
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
