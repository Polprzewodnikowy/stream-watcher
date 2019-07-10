import * as utils from '../utils';
import messages from '../messages';

export const buildActionCreator = (type, ...argsNames) => (...args) => {
  const action = { type };

  argsNames.forEach((argName, index) => {
    action[argsNames[index]] = args[index];
  });

  return action;
};

export const buildRequestActionCreator = options => (dispatch) => {
  const {
    baseAction,
    url,
    headers,
    query,
    transform,
    transformError,
  } = options;

  const actions = {
    start: () => baseAction && dispatch(buildActionCreator(baseAction, 'value')),
    success: payload => baseAction && dispatch(buildActionCreator(`${baseAction}_SUCCESS`, 'payload')(payload)),
    error: error => baseAction && dispatch(buildActionCreator(`${baseAction}_ERROR`, 'error')(error)),
  };

  actions.start();

  const fetchOptions = { headers };

  const urlWithQueryParams = !query ? url : `${url}?${utils.createQueryParameters(query)}`;
  const transformFunction = transform || (data => data);
  const transformErrorFunction = transformError || (error => error);

  const checkResponse = (response) => {
    if (!response.ok) {
      throw response;
    }
    return response.json();
  };

  const processData = (data) => {
    actions.success(data);
    return data;
  };

  const processErrors = (error) => {
    if (error instanceof Error) {
      actions.error({
        errorType: messages.en.errors.fetchErrorType,
        message: messages.en.errors.fetchErrorMessage(error.message, url),
      });
    } else {
      error.json()
        .then(transformErrorFunction)
        .then(actions.error);
    }
  };

  return fetch(urlWithQueryParams, fetchOptions)
    .then(checkResponse)
    .then(transformFunction)
    .then(processData)
    .catch(processErrors);
};
