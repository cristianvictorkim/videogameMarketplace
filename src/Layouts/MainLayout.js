import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "components/Common/Navbar";
import Footer from "components/Common/Footer";

function MainLayout()  
{
    return (
        <div className="gradient" style={{minHeight:"100%"}}>
            <Navbar />
            <Outlet />
            <Footer/>
        </div>
    );
}

export default MainLayout;