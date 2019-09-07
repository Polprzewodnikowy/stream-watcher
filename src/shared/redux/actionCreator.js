import * as utils from '../utils';
import messages from '../messages';

export const buildActionCreator = (type, ...argsNames) => (...args) => {
  const action = { type };

  argsNames.forEach((argName, index) => {
    action[argsNames[index]] = args[index];
  });

  return action;
};

export const buildRequestActionCreator = (options) => (dispatch) => {
  const {
    baseAction,
    url,
    headers,
    method = 'GET',
    mode = 'cors',
    contentType = 'application/json',
    body,
    query,
    transform,
    combine,
    transformError,
  } = options;

  const actions = {
    start: () => baseAction && dispatch(buildActionCreator(baseAction)()),
    success: (payload) => baseAction && dispatch(buildActionCreator(`${baseAction}_SUCCESS`, 'payload')(payload)),
    error: (error) => baseAction && dispatch(buildActionCreator(`${baseAction}_ERROR`, 'error')(error)),
  };

  actions.start();

  const fetchOptions = {
    headers: {
      ...headers,
      'Content-Type': contentType,
    },
    method,
    mode,
    body,
  };

  const isParallelQuery = utils.isArray(query);
  const urlWithQueryParams = (
    query && (
      isParallelQuery ? query.map((q) => utils.createUrl(url, q)) : utils.createUrl(url, query)
    )
  ) || (
    url
  );
  const transformFunction = transform || ((data) => data);
  const combineFunction = (isParallelQuery && combine) || ((data) => data);
  const transformErrorFunction = transformError || ((error) => error);

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

  const fetchAction = (fetchUrl) => fetch(fetchUrl, fetchOptions)
    .then(checkResponse)
    .then(transformFunction);

  return (
    isParallelQuery
      ? Promise.all(urlWithQueryParams.map((fetchUrl) => fetchAction(fetchUrl)))
      : fetchAction(urlWithQueryParams)
  )
    .then(combineFunction)
    .then(processData)
    .catch(processErrors);
};
