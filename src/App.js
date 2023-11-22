import React from 'react';
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from "./components/Products";
import Categories from "./components/Categories";
import Singleproductspage, { loadingproducts } from './components/Singleproductsdetail';
import Cart from "./components/Cart";
import Home from './components/Home';
import Footer from "./components/Footer";
import Search from "./components/Search"
import List from "./components/List"




const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      {
        index: true,
        element:(
          <React.Fragment>
            < Home/>
            <Products />
            <Footer />
           
          </React.Fragment>
        )  
        
      },
    
      {
        path: '/categories',
        element: <Categories />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/products/:id',
        element: <Singleproductspage />,
        loader: loadingproducts
      },
      {
        path: '/search',
        element: <Search />,
        loader: loadingproducts
      },
      {
        path: '/list',
        element: <List />,
      },
   
    ]
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;



