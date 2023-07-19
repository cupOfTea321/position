import React, { useState } from 'react';
import {Box} from "@mui/material";

const PositionButton1 = (props) => {
    return (
            <Box
                {...props}
                sx={{
                color: 'rgba(231, 69, 54, 1)',
                fontSize: {md: '80px', sm: '60px', xs: '40px'},
                // lineHeight: '131.5px',
                background: 'white',
                padding: {md: '7px 29px', sm: '0px 30px', xs: '10px 20px'},
                position: 'absolute',
                bottom: {sm: '100px', xs: '120px'},
                cursor: 'pointer',
                fontWeight: 600,
                    letterSpacing: '-5px',
                zIndex: 200
            }} className={'animate__animated animate__fadeInUp animate__delay-1s'}>
                ПОЗИЦИЯ
            </Box>
    );
};

export default PositionButton1;
