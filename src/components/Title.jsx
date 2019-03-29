import React, { useContext } from 'react'
import { Avatar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { TwitchContext } from '../context/TwitchContext'

const useStyles = makeStyles({
  avatar: {
    marginLeft: '8px',
  },
  text: {
    flexGrow: 1,
    marginLeft: '16px',
  },
})

export default function Title({ showStatus = false }) {
  const { streamInfo, streamUserInfo } = useContext(TwitchContext)
  const styles = useStyles()
  
  return (
    <>
      {streamUserInfo && <Avatar src={streamUserInfo.profile_image_url} className={styles.avatar} />}
      <Typography className={styles.text} noWrap variant='h6'>
        {streamUserInfo ? streamUserInfo.display_name : 'Stream Watcher'}
        {showStatus && streamInfo && ` - ${streamInfo.title}`}
      </Typography>
    </>
  )
}
