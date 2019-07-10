import devStore from './store.dev';
import prodStore from './store.prod';

const getStore = () => {
  if (process.env.NODE_ENV === 'development') {
    return devStore;
  }
  if (process.env.NODE_ENV === 'production') {
    return prodStore;
  }
  return null;
};

const store = getStore();

export default store;
