import { Request } from 'shared';

const STORAGE_KEY = 'request-local-store';

export const addToStore = (payload: Request) => {
  const parsedStore = getStore();

  let result: Record<string, Request> = { [payload.id]: payload };

  if (parsedStore) {
    result = { ...parsedStore, ...result };
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(result));
};

export const getStore = (): Record<string, Request> | undefined => {
  const store = localStorage.getItem(STORAGE_KEY);
  if (!store) return;

  return JSON.parse(store);
};

export const removeFromStore = (id: string) => {
  const parsedStore = getStore();

  if (parsedStore && id in parsedStore) {
    delete parsedStore[id];

    localStorage.setItem(STORAGE_KEY, JSON.stringify(parsedStore));
  }
};
