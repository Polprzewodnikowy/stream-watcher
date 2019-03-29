const API_URL = 'https://api.twitch.tv/helix'
const CLIENT_ID = process.env.REACT_APP_TWITCH_CLIENT_ID

async function fetchData(query, token) {
  const headers = {
    headers: {
      'Client-ID': CLIENT_ID,
    }
  }
  if (token) {
    headers.headers['Authorization'] = `Bearer ${token}`
  }
  const { data } = await fetch(`${API_URL}/${query}`, headers).then(response => response.json())
  return data
}

function sanitizeUrl(url) {
  return url.split('?')[0].split('#')[0].replace(/\/$/, "")
}

export function redirectToLoginPage() {
  const currentLocation = sanitizeUrl(window.location.href)
  window.location.href = `https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${CLIENT_ID}&redirect_uri=${currentLocation}`
}

export async function getUserByToken(token) {
  const query = `users`
  return await fetchData(query, token)
}

export async function getUsersById(ids, token) {
  const userList = ids.map(user => `id=${user}`).join('&')
  const query = `users?${userList}&first=100`
  return await fetchData(query, token)
}

export async function getUsersByLogin(logins, token) {
  const userList = logins.map(user => `login=${user}`).join('&')
  const query = `users?${userList}&first=100`
  return await fetchData(query, token)
}

export async function getUsersFollows(id, token) {
  const query = `users/follows?from_id=${id}&first=100`
  return await fetchData(query, token)
}

export async function getStreams(ids, token) {
  const idList = ids.map(id => `user_id=${id}`).join('&')
  const query = `streams?${idList}&first=100`
  return await fetchData(query, token)
}

export async function getGames(ids, token) {
  const idList = ids.map(id => `id=${id}`).join('&')
  const query = `games?${idList}`
  return await fetchData(query, token)
}
