import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import AboutMe from './AboutMe';
import MyTown from './MyTown';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/', element: <AboutMe />,
  },
  {
    path: '/MyTown', element: <MyTown />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
