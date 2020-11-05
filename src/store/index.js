import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import loggerMiddleware from 'redux-logger';
import rootReducer from '../reducers';

const middleware =
  process.env.NODE_ENV === 'development'
    ? [loggerMiddleware, ...getDefaultMiddleware()]
    : [...getDefaultMiddleware()];

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: rootReducer,
    middleware,
    // preloadedState,
    devTools: true,
  });

  return store;
}
