import React from 'react';
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from "./components/Products";
import Categories from "./components/Categories";
import Categoriespage, { loadingCats } from './components/Categoriespage';
import Singleproductspage, { loadingproducts } from './components/Singleproductsdetail';
import Carts from "./components/carts";
import Home from './components/Home';
import Footer from "./components/Footer";
import Search from "./components/Search"




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
        element: <Carts />
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
        path: '/products/categories/:item',
        element: <Categoriespage />,
      }
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



