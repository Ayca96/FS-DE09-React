import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Main from "../pages/Main";
import NewProduct from "../pages/NewProduct";
import About from "../pages/About";
import ProductList from "../pages/ProductList";
import UpdateProduct from "../pages/UpdateProduct";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
<Routes>
<Route path="/" element={<Main/>}/>
<Route path="/new-product" element={<NewProduct/>}/>
<Route path="/products" element={<ProductList/>}/>
<Route path="/about" element={<About/>}/>
{/* <Route path="/update-product" element={<UpdateProduct/>}/> */}
<Route path="/update-product:id" element={<UpdateProduct/>}/>



</Routes>


    </Router>
  );
};

export default AppRouter;
