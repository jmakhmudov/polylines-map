import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import geometryReducer from './geometryReducer';
import { watcherSaga } from '../sagas/rootSaga';
import markersReducer from './markersReducer';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    geometry: geometryReducer,
    markers: markersReducer
  },
  middleware: [...middleware]
});

sagaMiddleware.run(watcherSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;