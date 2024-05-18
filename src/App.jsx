import React from 'react'
import WrapperComponent from './components/WrapperComponent'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<WrapperComponent />,
    children: [
      {
        index: true,
        element: <h1>Product</h1>
      }
    ]
  },
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App