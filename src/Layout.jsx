import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";
import Account from "./Account/account";
import { useLocation } from 'react-router-dom';

function Layout(){
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';
    return(
        <>
        {<Navbar />}
        {<Outlet />}
        {!isLoginPage && <Footer />}
        </>
    )
}

export default Layout;