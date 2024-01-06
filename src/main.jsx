import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home/Home.jsx'
import Login from './pages/login/login.jsx'
import Dashboard from './pages/dashboard/Dashboard.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux'
import { mainStore } from './redux/store.js'
import ErrorPage from './pages/errorpage/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/*",
    element: <ErrorPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={mainStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
