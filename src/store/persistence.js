import { throttle, pick } from 'lodash';
import { utils } from 'shared';

const LOCAL_STORAGE_STATE_KEY = 'state';

export const getInitialState = () => utils.loadFromLocalStorage(LOCAL_STORAGE_STATE_KEY) || {};

export const enableStatePersistence = (store, configuration) => store
  .subscribe(throttle(
    () => utils.saveInLocalStorage(LOCAL_STORAGE_STATE_KEY, pick(store.getState(), configuration)),
    100,
  ));
