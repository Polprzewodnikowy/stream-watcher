import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import loadTwitchPlayer from '../utils/loadTwitchPlayer'
import '../css/TwitchPlayer.css'

const useStyles = makeStyles({
  player: {
    display: 'flex',
    height: '100%',
    width: '100%',
  },
})

export default function TwitchPlayer({ stream, targetID = 'twitch-player' }) {
  const [player, setPlayer] = useState(null)
  const style = useStyles()

  const initPlayer = async () => {
    await loadTwitchPlayer()
    setPlayer(new window.Twitch.Player(targetID, { channel: stream }))
  }

  useEffect(() => {
    initPlayer()
  }, [])

  useEffect(() => {
    if (player) {
      player.setChannel(stream)
    }
  }, [stream])

  return (
    <div id={targetID} className={style.player} />
  )
}
