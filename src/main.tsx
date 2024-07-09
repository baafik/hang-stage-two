import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import './index.css';
import Router from './Router';




ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router />
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);
