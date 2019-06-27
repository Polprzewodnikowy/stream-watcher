import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from 'rootReducer';

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk),
  ),
);

export default store;
