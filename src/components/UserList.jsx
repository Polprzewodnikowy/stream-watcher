import React, { useContext } from 'react'
import { MenuItem } from '@material-ui/core'
import { TwitchContext } from '../context/TwitchContext'
import User from './User'

export default function UserList() {
  const { userFollows, liveStreams, setSelectedStream } = useContext(TwitchContext)
  
  const follows = userFollows.map(user => { return { ...user, viewer_count: -1 } })
  const streams = follows
    .map((user) => 
      Object.assign(user, liveStreams.find(live => live.user_id === user.id))
    )
    .sort((a, b) =>
      b.viewer_count - a.viewer_count
    )
  
  return streams.map((user, key) => (
    <MenuItem button onClick={() => setSelectedStream(user.login)} key={key}>
      <User user={user} />
    </MenuItem>
  ))
}
