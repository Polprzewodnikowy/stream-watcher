import { rootReducer, persistenceConfiguration } from 'rootReducer';
import { getInitialState, enableStatePersistence } from './persistence';
import configureStore from './configureStore';

const initialState = getInitialState();
const store = configureStore(rootReducer, initialState);
enableStatePersistence(store, persistenceConfiguration);

export default store;
