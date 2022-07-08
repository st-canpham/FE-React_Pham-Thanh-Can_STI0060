import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import appReducer from './app.reducers';
import appMiddleware from './app.middlewares';

const middleware = createSagaMiddleware();
const store = createStore(appReducer, applyMiddleware(middleware, logger));
middleware.run(appMiddleware);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;