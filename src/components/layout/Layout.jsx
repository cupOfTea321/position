import React from 'react';
import ScrollLock from "./ScrollLock.jsx";
import {Outlet} from "react-router-dom";
import {Box} from "@mui/material";
const Layout = () => {
    return (
        <Box id={'scroll-wrapper'}>

            {/*<ScrollLock/>*/}
            <Outlet/>
        </Box>
    );
};

export default Layout;
