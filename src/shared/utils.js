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
