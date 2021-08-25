import {applyMiddleware, createStore, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import reducers from './reducers';
import rootSaga from './saga';
import {AsyncStorage} from 'react-native';
import logger from 'redux-logger';
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
// if (__DEV__) middleware.push(logger);
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}
const enhancer = [applyMiddleware(...middleware)];
window.devToolsExtension && enhancer.push(window.devToolsExtension());

const persistConfig = {
  storage: AsyncStorage,
  key: 'Muzik',
  blacklist: [],
  // debounce: 500
};
const persistedReducer = persistReducer(persistConfig, reducers);
export const store = createStore(persistedReducer, {}, compose(...enhancer));
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
