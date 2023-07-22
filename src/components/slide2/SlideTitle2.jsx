import React from 'react';
import {Typography} from "@mui/material";

const SlideText1 = () => {
    const titleCSS = {
        fontSize: {sm: '100px', xs: '80px'},
        fontWeight: 500,
        position: 'absolute',
        zIndex: 500
    }
    return (
        <>

            <Typography
                className={'animate__animated animate__fadeInLeft animate__delay-1s'}
                sx={{
                    ...titleCSS,
                    color: 'rgba(231, 69, 54, 1)',
                    zIndex: 200,
                    top: {sm: '3%', xs: '8%'},
                    left: '2%',
                    // marginTop: {sm: 0, xs: '80px'}
                }}>ПРИМЕНЯТЬ </Typography>
            <Typography sx={{...titleCSS,
                // rotate: '-10deg',
                color: 'white',
                top: {sm: '12%', xs: '15%'},
                left: '2%',
                zIndex: 200,
                textShadow: '0px 1px 0 rgba(231, 69, 54, 1),0px -1px 0 rgba(231, 69, 54, 1),1px 0px 0 rgba(231, 69, 54, 1),-1px 0px 0 rgba(231, 69, 54, 1),1px 1px 0 rgba(231, 69, 54, 1),1px -1px 0 rgba(231, 69, 54, 1),-1px 1px 0 rgba(231, 69, 54, 1),-1px -1px 0 rgba(231, 69, 54, 1),0px 2px 0 rgba(231, 69, 54, 1),0px -2px 0 rgba(231, 69, 54, 1),2px 0px 0 rgba(231, 69, 54, 1),-2px 0px 0 rgba(231, 69, 54, 1),2px 2px 0 rgba(231, 69, 54, 1),2px -2px 0 rgba(231, 69, 54, 1),-2px 2px 0 rgba(231, 69, 54, 1),-2px -2px 0 rgba(231, 69, 54, 1),0px 3px 0 rgba(231, 69, 54, 1),0px -3px 0 rgba(231, 69, 54, 1),3px 0px 0 rgba(231, 69, 54, 1),-3px 0px 0 rgba(231, 69, 54, 1),3px 3px 0 rgba(231, 69, 54, 1),3px -3px 0 rgba(231, 69, 54, 1),-3px 3px 0 rgba(231, 69, 54, 1),-3px -3px 0 rgba(231, 69, 54, 1),0px 4px 0 rgba(231, 69, 54, 1),0px -4px 0 rgba(231, 69, 54, 1),4px 0px 0 rgba(231, 69, 54, 1),-4px 0px 0 rgba(231, 69, 54, 1),4px 4px 0 rgba(231, 69, 54, 1),4px -4px 0 rgba(231, 69, 54, 1),-4px 4px 0 rgba(231, 69, 54, 1),-4px -4px 0 rgba(231, 69, 54, 1),0px 5px 0 rgba(231, 69, 54, 1),0px -5px 0 rgba(231, 69, 54, 1),5px 0px 0 rgba(231, 69, 54, 1),-5px 0px 0 rgba(231, 69, 54, 1),5px 5px 0 rgba(231, 69, 54, 1),5px -5px 0 rgba(231, 69, 54, 1),-5px 5px 0 rgba(231, 69, 54, 1),-5px -5px 0 rgba(231, 69, 54, 1)'
            }} className={'animate__animated animate__fadeInLeft animate__delay-1s'}>ТЕХНОЛОГИИ</Typography>
        </>
    );
};

export default SlideText1;
