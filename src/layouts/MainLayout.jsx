import React from 'react';
import {Outlet} from "react-router-dom";
import Heading from "../components/Heading.jsx";
import Footer from "../components/Footer.jsx";

const MainLayout = () => {
    return (
        <div>
            <Heading/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default MainLayout;