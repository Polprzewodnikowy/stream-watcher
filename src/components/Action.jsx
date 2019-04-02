import React from 'react'
import { IconButton, Tooltip, ButtonBase } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  buttonBase: {
    margin: '4px',
  },
})

export default function Action({ title, children, icon, onClick }) {
  const styles = useStyles()

  return (
    <Tooltip title={title}>
      {icon ?
      <IconButton onClick={onClick}>
        {children}
      </IconButton>
      :
      <ButtonBase onClick={onClick} className={styles.buttonBase}>
        {children}
      </ButtonBase>}
    </Tooltip>
  )
}
