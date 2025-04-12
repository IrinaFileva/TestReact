import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RequestSchema } from '../types';
import { getStore, Request } from 'shared';

const request = getStore() || {};

const initialState: RequestSchema = {
  request,
};

export const requestSlice = createSlice({
  name: 'request',
  initialState,
  reducers: {
    addRequest(state: RequestSchema, { payload }: PayloadAction<Request>) {
      state.request = { ...state.request, [payload.id]: payload };
    },
    deleteRequest(state: RequestSchema, { payload }: PayloadAction<Request>) {
      const newState = { ...state.request };
      delete newState[payload.id];

      state.request = newState;
    },
    editRequest(state: RequestSchema, { payload }: PayloadAction<Request>) {
      state.request = { ...state.request, [payload.id]: payload };
    },
  },
});

export const { reducer: requestReducer } = requestSlice;

export const { addRequest, deleteRequest, editRequest } = requestSlice.actions;
