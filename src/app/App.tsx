import { RouterProvider } from 'react-router-dom';
import { router } from './provider/router';
import { Provider } from 'react-redux';
import { store } from './provider/store';
import './style/global.scss';

export const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};
