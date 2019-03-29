import React from 'react'
import { Avatar, Grid, ListItemText, Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  dimAvatar: {
    filter: 'grayscale(100%) brightness(50%)'
  }
})

export default function User({ user }) {
  const style = useStyles()

  const { display_name, profile_image_url, game, type, viewer_count } = user
  let icon = ''
  let avatarClassName = ''

  switch (type) {
    case 'live':
      icon = '🔴'
      break
    case 'rerun':
      icon = '🔵'
      break
    default:
      avatarClassName = style.dimAvatar
  }

  const primaryText = (
    <Typography variant='subtitle1'>{display_name}</Typography>
  )

  const secondaryText = (
    <Grid container spacing={8} justify='space-between' wrap='nowrap'>
      <Grid item zeroMinWidth>
        <Typography color='textSecondary' noWrap>{game && game.name}</Typography>
      </Grid>
      <Grid item>
        <Typography color='textSecondary'>{icon} {(viewer_count >= 0) && viewer_count}</Typography>
      </Grid>
    </Grid>
  )

  return (
    <>
      <Avatar className={avatarClassName} src={profile_image_url} />
      <ListItemText
        disableTypography
        primary={primaryText}
        secondary={type === 'live' || type === 'rerun' ? secondaryText : null}
      />
    </>
  )
}
