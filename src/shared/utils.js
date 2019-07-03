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

export const getPublicURL = () => process.env.PUBLIC_URL;

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
