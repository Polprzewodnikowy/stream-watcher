import { utils } from 'shared';

export const createQueryParameters = (query = {}) => (
  Object
    .keys(query)
    .filter(key => (
      utils.isString(query[key])
      || utils.isNumber(query[key])
      || utils.isArray(query[key])
    ))
    .map((key) => {
      const value = query[key];

      if (utils.isString(value) || utils.isNumber(value)) {
        return `${key}=${value}`;
      }

      if (utils.isArray(value)) {
        return value.map(i => `${key}=${i}`).join('&');
      }

      return null;
    })
    .join('&')
);

export const buildActionCreator = (type, ...argsNames) => (...args) => {
  const action = { type };

  argsNames.forEach((argName, index) => {
    action[argsNames[index]] = args[index];
  });

  return action;
};

const checkResponse = (response) => {
  if (response.ok) {
    return response.json();
  }

  return response.json()
    .then(error => Promise.reject(error));
};

export const buildRequestActionCreator = options => (dispatch) => {
  const {
    baseAction,
    url,
    headers,
    query,
    transform,
  } = options;

  const actions = {
    start: () => baseAction && dispatch(buildActionCreator(baseAction, 'value')),
    success: payload => baseAction && dispatch(buildActionCreator(`${baseAction}_SUCCESS`, 'payload')(payload)),
    error: error => baseAction && dispatch(buildActionCreator(`${baseAction}_ERROR`, 'error')(error)),
  };

  actions.start();

  const fetchOptions = { headers };

  const urlWithQueryParams = !query ? url : `${url}?${createQueryParameters(query)}`;
  const transformFunction = transform || (data => data);

  return fetch(urlWithQueryParams, fetchOptions)
    .then(checkResponse)
    .then(transformFunction)
    .then((data) => {
      actions.success(data);
      return data;
    })
    .catch(error => actions.error(error));
};
