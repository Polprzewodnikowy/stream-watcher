import React, { useContext } from 'react'
import { Grid, withTheme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { AppContext } from '../context/AppContext'
import { TwitchContext } from '../context/TwitchContext'
import Header from './Header'
import Title from './Title'
import Actions from './Actions'
import SideMenu from './SideMenu'
import TwitchPlayer from './TwitchPlayer'
import TwitchChat from './TwitchChat'

const getStyles = (theme) => ({
  app: {
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    }
  },
  gridPlayer: {
    width: '100%',
  },
  gridChat: {
    flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
      maxWidth: '335px',
    },
  },
  gridHideChat: {
    display: 'none',
  },
  playerWrapperOutside: {
    height: '100%',
    [theme.breakpoints.down('xs')]: {
      height: 0,
      overflow: 'hidden',
      paddingTop: '56.25%',
      position: 'relative',
    },
  },
  playerWrapperInside: {
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('xs')]: {
      position: 'absolute',
      top: 0,
      left: 0,
    },
  },
})

function App({ theme }) {
  const { showChat } = useContext(AppContext)
  const { selectedStream } = useContext(TwitchContext)
  const useStyles = makeStyles(getStyles(theme))
  const styles = useStyles()

  return (
    <div className={styles.app}>
      <Header>
        <Title showStatus />
        <Actions />
      </Header>
      <Grid container className={styles.gridContainer}>
        <Grid sm item className={styles.gridPlayer}>
          <div className={styles.playerWrapperOutside}>
            <div className={styles.playerWrapperInside}>
              {selectedStream && <TwitchPlayer stream={selectedStream} />}
            </div>
          </div>
        </Grid>
        <Grid sm item className={showChat ? styles.gridChat : styles.gridHideChat}>
          {selectedStream && <TwitchChat stream={selectedStream} />}
        </Grid>
      </Grid>
      <SideMenu />
    </div>
  )
}

export default withTheme()(App)
