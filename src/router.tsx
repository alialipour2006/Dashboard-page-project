import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Layout from './pages/Layout';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        //FIXME: whattt ??????
        path: '/داشبورد',
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
