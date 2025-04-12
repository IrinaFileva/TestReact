import { createBrowserRouter } from 'react-router-dom';
import { CreateRequests } from 'pages/create-request';
import { DetailRequests } from 'pages/detail-request';
import { Layout } from 'pages/layout';
import { Requests } from 'pages/requests';
import { Path } from 'shared';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: Path.REQUESTS,
        element: <Requests />,
      },
      {
        path: Path.NEW,
        element: <CreateRequests />,
      },
      {
        path: Path.ID,
        element: <DetailRequests />,
      },
    ],
  },
]);
