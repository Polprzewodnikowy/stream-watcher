import React, { createContext, useState, useEffect } from 'react'
import { getUserByToken, getUsersFollows, getUsersById, getStreams, getGames, getUsersByLogin, redirectToLoginPage } from '../api/TwitchApi'
import { getParametersFromHash } from '../utils/getParametersFromHash'

export const TwitchContext = createContext()

export function TwitchContextProvider({ children }) {
  const [userToken, setUserToken] = useState(localStorage.getItem('token') || null)
  const [userInfo, setUserInfo] = useState(null)
  const [userFollows, setUserFollows] = useState([])
  const [liveStreams, setLiveStreams] = useState([])
  const [streamUserInfo, setStreamUserInfo] = useState(null)
  const [streamInfo, setStreamInfo] = useState(null)
  const [selectedStream, setSelectedStream] = useState(localStorage.getItem('stream') || null)

  const login = () => {
    redirectToLoginPage()
  }

  const logout = () => {
    setSelectedStream(null)
    setUserToken(null)
    localStorage.removeItem('stream')
    localStorage.removeItem('token')
  }

  const value = {
    userInfo,
    userFollows,
    liveStreams,
    streamUserInfo,
    streamInfo,
    selectedStream,
    setSelectedStream,
    login,
    logout,
  }

  const refreshUserData = async () => {
    if (userToken) {
      const [info] = await getUserByToken(userToken)
      const follows = await getUsersFollows(info.id, userToken)
      const users = await getUsersById(follows.map(item => item.to_id), userToken)
      setUserInfo(info)
      setUserFollows(users)
    } else {
      setUserInfo(null)
      setUserFollows([])
    }
  }

  const resfreshLiveStreams = async () => {
    if (userFollows.length) {
      const streams = await getStreams(userFollows.map(item => item.id), userToken)
      if (streams.length) {
        const games = await getGames(streams.map(stream => stream.game_id), userToken)
        const list = streams
          .map(stream =>
            Object.assign(stream, { game: games.find(game => game.id === stream.game_id) })
          )
        setLiveStreams(list)
      } else {
        setLiveStreams(streams)
      }
    } else {
      setLiveStreams([])
    }
  }

  const refreshSelectedStreamData = async () => {
    if (selectedStream) {
      const [user] = await getUsersByLogin([selectedStream], userToken)
      const [stream] = await getStreams([user.id], userToken)
      setStreamUserInfo(user)
      setStreamInfo(stream)
      localStorage.setItem('stream', selectedStream)
    } else {
      setStreamUserInfo(null)
      setStreamInfo(null)
      localStorage.removeItem('stream')
    }
  }

  useEffect(() => {
    const { access_token } = getParametersFromHash()
    if (access_token) {
      setUserToken(access_token)
      localStorage.setItem('token', access_token)
    }
  }, [])

  useEffect(() => {
    refreshUserData()
  }, [userToken])

  useEffect(() => {
    resfreshLiveStreams()
    const timer = setInterval(resfreshLiveStreams, 60000)
    return () => { clearInterval(timer) }
  }, [userFollows])

  useEffect(() => {
    refreshSelectedStreamData()
    const timer = setInterval(refreshSelectedStreamData, 60000)
    return () => { clearInterval(timer) }
  }, [selectedStream])

  return (
    <TwitchContext.Provider value={value}>
      {children}
    </TwitchContext.Provider>
  )
}
