import React from 'react'
import WrapperComponent from './components/WrapperComponent'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Product from './components/Product';
import HomeAdmin from './admin/pages/HomeAdmin';

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
  }
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App