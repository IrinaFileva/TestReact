import { RootState } from 'app/provider/store';

export const getRequests = (state: RootState) =>
  Object.values(state.result.request);

export const getRequestById = (id?: string) => (state: RootState) =>
  id && id in state.result.request ? state.result.request[id] : null;
