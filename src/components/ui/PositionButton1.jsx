import React, {useState} from 'react';
import {Box} from "@mui/material";
import {NavLink} from "react-router-dom";

const PositionButton1 = ({sx, onMouseEnter, disabled, link = 'pr' }) => {


    // const handleClick = () => {
    //
    //     }
    // }
    return (
        <NavLink to={link} style={{
            color: 'rgba(231, 69, 54, 1)',
            display: 'flex',
            justifyContent: 'center'
        }}>

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
                    // fontWeight: 600,
                    // letterSpacing: '-5px',
                    zIndex: 200,
                    ...sx
                }} className={`animate__animated animate__heartBeat `}>
                ПОЗИЦИЯ

            </Box>
</NavLink>


    );
};

export default PositionButton1;
