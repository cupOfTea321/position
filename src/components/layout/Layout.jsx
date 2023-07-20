import React from 'react';
import ScrollLock from "./ScrollLock.jsx";
import {Outlet} from "react-router-dom";
const Layout = () => {
    return (
        <>

            <ScrollLock/>
            <Outlet/>
        </>
    );
};

export default Layout;
