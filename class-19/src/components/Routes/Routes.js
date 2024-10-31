import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../../Root';
import Home from '../../pages/Home';
import Products from '../../pages/Products';
import Cart from '../../pages/Cart';
import ProductSingle from '../ProductSingle';

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <p>This is 404 pages</p>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/product/:id",
        element: <ProductSingle />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  }
])

export default Routes;