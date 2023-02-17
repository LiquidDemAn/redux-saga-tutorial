import { configureStore, compose } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

const composeEnhancers =
	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({} as any)
		: compose;

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: rootReducer,
	devTools: composeEnhancers(),
	middleware: (gDM) => gDM().concat(logger, sagaMiddleware),
});
