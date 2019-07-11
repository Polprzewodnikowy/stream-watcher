import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const configureStore = (rootReducer, initialState) => {
  const enhancers = [
    applyMiddleware(thunk),
  ];

  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers,
  );

  return store;
};

export default configureStore;
