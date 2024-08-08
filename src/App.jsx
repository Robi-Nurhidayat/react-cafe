import React from 'react'
import WrapperComponent from './components/WrapperComponent'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Product from './components/Product';
import HomeAdmin from './admin/pages/HomeAdmin';
import Login from './auth/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element:<WrapperComponent />,
    children: [
      {
        index: true,
        element: <Product />
      },
    ]
  },
  {
    path: "/admin",
    element: <HomeAdmin />
  },
  {
    path: "/login",
    element: <Login />
  }
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App