import React from 'react'
import WrapperComponent from './components/WrapperComponent'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Product from './components/Product';

const router = createBrowserRouter([
  {
    path: "/",
    element:<WrapperComponent />,
    children: [
      {
        index: true,
        element: <Product />
      }
    ]
  },
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App