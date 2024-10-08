import React from 'react';
import Navbar from "../components/Navbar";
import { Route, Routes } from 'react-router-dom';
import Main from "../pages/Main";
import MovieDetail from "../pages/MovieDetail";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";


//! ToastContainer de Browser da görünsün diye BrowserRouter sarmalini üst component olan index.js de yaptik.

const AppRouter = () => {
  return (
    <>
<Navbar/>
<Routes>

<Route path="/" element={<Main/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>

<Route path="/details/:id"  element={<PrivateRouter/>}>
<Route path="" element={<MovieDetail/>}/>
</Route>

</Routes>

    </>
  )
}

export default AppRouter