import { combineReducers, configureStore } from '@reduxjs/toolkit/react';
import { requestReducer } from 'entities/request';

export const rootReducer = combineReducers({
  result: requestReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
