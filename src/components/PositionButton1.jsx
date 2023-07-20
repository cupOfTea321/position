import React, {useState} from 'react';
import {Box} from "@mui/material";

const PositionButton1 = ({sx, onMouseEnter, disabled }) => {


    // const handleClick = () => {
    //
    //     }
    // }
    return (
        <Box
            component={'button'}
            onMouseEnter={onMouseEnter} disabled={disabled}
            sx={{
                color: 'rgba(231, 69, 54, 1)',
                fontSize: {md: '60px', sm: '50px', xs: '40px'},
                // lineHeight: '131.5px',
                background: 'white',
                padding: {md: '5px 22px', sm: '0px 18px', xs: '10px 20px'},
                position: 'absolute',
                bottom: {sm: '100px', xs: '120px'},
                cursor: 'pointer',
                fontWeight: 600,
                // letterSpacing: '-5px',
                zIndex: 200,
                ...sx
            }} className={`animate__animated animate__fadeInUp animate__delay-1s`}>
            ПОЗИЦИЯ
        </Box>
    );
};

export default PositionButton1;
