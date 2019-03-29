import React, { useContext } from 'react'
import { MenuList, SwipeableDrawer } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { AppContext } from '../context/AppContext'
import Header from './Header'
import Title from './Title'
import UserList from './UserList'

const useStyles = makeStyles({
  menuList: {
    width: '400px',
    maxWidth: '400px',
  },
})

export default function SideMenu() {
  const { openMenu, setOpenMenu } = useContext(AppContext)
  const styles = useStyles()

  return (
    <SwipeableDrawer
      open={openMenu}
      onOpen={() => setOpenMenu(true)}
      onClose={() => setOpenMenu(false)}
    >
      <Header>
        <Title />
      </Header>
      <MenuList className={styles.menuList}>
        <UserList />
      </MenuList>
    </SwipeableDrawer>
  )
}
