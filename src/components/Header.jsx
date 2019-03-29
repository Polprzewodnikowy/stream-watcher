import React, { useContext } from 'react'
import { AppBar, IconButton, Toolbar } from "@material-ui/core"
import { Menu } from "@material-ui/icons"
import { makeStyles } from '@material-ui/styles'
import { AppContext } from '../context/AppContext'

const useStyles = makeStyles({
  appBar: {
    maxWidth: '100vw',
  },
})

export default function Header({ children }) {
  const { openMenu, setOpenMenu } = useContext(AppContext)
  const styles = useStyles()

  return (
    <AppBar position='sticky' className={styles.appBar}>
      <Toolbar variant='dense'>
        <IconButton color="inherit" onClick={() => setOpenMenu(!openMenu)}>
          <Menu />
        </IconButton>
        {children}
      </Toolbar>
    </AppBar>
  )
}
