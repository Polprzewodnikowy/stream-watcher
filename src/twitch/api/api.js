import { sanitizeUrl } from 'shared/utils';
import { TWITCH_API_URL } from 'twitch/constants';
import { getTwitchClientID, getAuthorizationUrl } from 'twitch/utils';

const fetchData = async (query, token) => {
  const options = { headers: { 'Client-ID': getTwitchClientID() } };

  if (token) {
    options.headers.Authorization = `Bearer ${token}`;
  }

  const { data } = await fetch(`${TWITCH_API_URL}/${query}`, options).then(response => response.json());

  return data;
};

export const redirectToLoginPage = () => {
  const currentLocation = sanitizeUrl(window.location.href);
  window.location.href = getAuthorizationUrl(getTwitchClientID(), currentLocation);
};

export const getTokenFromHash = () => {
  const { hash } = window.location;
  if (hash.length) {
    const parameters = hash.replace('#', '').split('&');
    const data = parameters.reduce((prev, next) => {
      const [key, value] = next.split('=');
      return { ...prev, [key]: value };
    }, {});
    return data.access_token;
  }
  return null;
};

export const getUserByToken = async (token) => {
  const query = 'users';
  return fetchData(query, token);
};

export const getUsersById = async (ids, token) => {
  const userList = ids.map(user => `id=${user}`).join('&');
  const query = `users?${userList}&first=100`;
  return fetchData(query, token);
};

export const getUsersByLogin = async (logins, token) => {
  const userList = logins.map(user => `login=${user}`).join('&');
  const query = `users?${userList}&first=100`;
  return fetchData(query, token);
};

export const getUsersFollows = async (id, token) => {
  const query = `users/follows?from_id=${id}&first=100`;
  return fetchData(query, token);
};

export const getStreams = async (ids, token) => {
  const idList = ids.map(id => `user_id=${id}`).join('&');
  const query = `streams?${idList}&first=100`;
  return fetchData(query, token);
};

export const getGames = async (ids, token) => {
  const idList = ids.map(id => `id=${id}`).join('&');
  const query = `games?${idList}`;
  return fetchData(query, token);
};
