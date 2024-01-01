import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home/Home.jsx'
import SingIn from './pages/sing-in/Sing-in.jsx'
import User from './pages/user/User.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/sing-in",
    element: <SingIn />
  },
  {
    path: "/user",
    element: <User />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
