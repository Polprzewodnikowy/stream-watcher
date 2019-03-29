import React from 'react'

export default function TwitchChat({ stream }) {
  return (
    <iframe
      style={{ display: 'flex' }}
      title='twitch-chat'
      frameBorder='0'
      src={`https://www.twitch.tv/embed/${stream}/chat?darkpopout`}
    />
  )
}
