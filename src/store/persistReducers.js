// 'storage' uses the storage mechanism according to the ambient (browser, react naive, etc)
// For the browser it uses the localstorage, for native it uses asyncstorage
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

// The whitelist paramater receives the name of the reducers to save information
export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'gobarber',
      storage,
      whitelist: ['auth', 'user'],
    },
    reducers
  );

  return persistedReducer;
};
