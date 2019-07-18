export const sanitizeUrl = url => url.split('?')[0].split('#')[0].replace(/\/$/, '');

export const removeHashAndParametersFromUrl = () => window.history
  .replaceState(null, null, sanitizeUrl(window.location.href));

export const saveInLocalStorage = (key, value) => window.localStorage
  .setItem(key, JSON.stringify(value));

export const loadFromLocalStorage = (key) => {
  const value = window.localStorage.getItem(key);
  try {
    return JSON.parse(value);
  } catch (error) {
    window.localStorage.removeItem(key);
    return null;
  }
};

export const deleteInLocalStorage = key => window.localStorage.removeItem(key);

export const isString = object => typeof object === 'string';
export const isNumber = object => typeof object === 'number';
export const isArray = object => Array.isArray(object);

export const getPublicUrl = () => process.env.PUBLIC_URL;

export const getParamsFromHash = () => {
  const { hash } = window.location;
  if (hash.length) {
    const parameters = hash.replace('#', '').split('&');
    return parameters.reduce((prev, next) => {
      const [key, value] = next.split('=');
      return { ...prev, [key]: value };
    }, {});
  }
  return {};
};

export const createQueryParameters = (query = {}) => (
  Object
    .keys(query)
    .filter(key => (
      isString(query[key])
      || isNumber(query[key])
      || isArray(query[key])
    ))
    .map((key) => {
      const value = query[key];

      if (isString(value) || isNumber(value)) {
        return `${key}=${value}`;
      }

      if (isArray(value)) {
        return value.map(i => `${key}=${i}`).join('&');
      }

      return null;
    })
    .join('&')
);

export const createUrl = (url, query) => `${url}?${createQueryParameters(query)}`;

export const mergeBy = (sourceArray, ...options) => {
  if (options.length <= 1) {
    return sourceArray;
  }

  const identifier = options.pop();

  return sourceArray.map(arrayItem => ({
    ...arrayItem,
    ...options.reduce((result, next) => ({
      ...result,
      ...next.find(({ [identifier]: searchId }) => searchId === arrayItem[identifier]),
    }), {}),
  }));
};

const getDefaultValue = value => ((value && value !== 0) ? value : -1);
const sortBy = (array, id, dir) => array
  .sort((a, b) => getDefaultValue(dir ? a[id] : b[id]) - getDefaultValue(!dir ? a[id] : b[id]));
export const sortAscBy = (array, id) => sortBy(array, id, true);
export const sortDescBy = (array, id) => sortBy(array, id, false);
