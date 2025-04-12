import { RouterProvider } from 'react-router-dom';
import { router } from './provider/router';
import './style/global.scss';

export const App = () => {
  return <RouterProvider router={router} />

};
