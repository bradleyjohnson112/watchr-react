import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/root';
import NoMatch from './components/noMatch';
import About from './components/about';
import Watchlist from './components/watchlist';
import './global.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NoMatch />,
    children: [
      {
        index: true, 
        element: <Watchlist />
      },
      {
        path: "about",
        element: <About />
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
