import React from 'react';
import {Typography} from "@mui/material";

const SlideText1 = () => {
    const titleCSS = {
        fontSize: {md: '140px', sm: '80px', xs: '50px'},
        fontWeight: 500,
        lineHeight: '184.1px',
    }
    return (
        <>

            <Typography
                className={'animate__animated animate__fadeInDown animate__delay-1s'}
                sx={{
                    ...titleCSS,
                    color: 'white',
                    zIndex: 200,
                    marginTop: {sm: 0, xs: '80px'}
                }}>ГОВОРИТЬ </Typography>
            <Typography sx={{...titleCSS,
                rotate: '-10deg',
                color: 'rgba(231, 69, 54, 1)',
                marginTop: {sm: '-50px', xs: '-120px'},
                zIndex: 200,
                marginLeft: {sm: '350px', xs: '100px'},
                textShadow: '0px 1px 0 rgb(255,255,255),0px -1px 0 rgb(255,255,255),1px 0px 0 rgb(255,255,255),-1px 0px 0 rgb(255,255,255),1px 1px 0 rgb(255,255,255),1px -1px 0 rgb(255,255,255),-1px 1px 0 rgb(255,255,255),-1px -1px 0 rgb(255,255,255),0px 2px 0 rgb(255,255,255),0px -2px 0 rgb(255,255,255),2px 0px 0 rgb(255,255,255),-2px 0px 0 rgb(255,255,255),2px 2px 0 rgb(255,255,255),2px -2px 0 rgb(255,255,255),-2px 2px 0 rgb(255,255,255),-2px -2px 0 rgb(255,255,255),0px 3px 0 rgb(255,255,255),0px -3px 0 rgb(255,255,255),3px 0px 0 rgb(255,255,255),-3px 0px 0 rgb(255,255,255),3px 3px 0 rgb(255,255,255),3px -3px 0 rgb(255,255,255),-3px 3px 0 rgb(255,255,255),-3px -3px 0 rgb(255,255,255),0px 4px 0 rgb(255,255,255),0px -4px 0 rgb(255,255,255),4px 0px 0 rgb(255,255,255),-4px 0px 0 rgb(255,255,255),4px 4px 0 rgb(255,255,255),4px -4px 0 rgb(255,255,255),-4px 4px 0 rgb(255,255,255),-4px -4px 0 rgb(255,255,255),0px 5px 0 rgb(255,255,255),0px -5px 0 rgb(255,255,255),5px 0px 0 rgb(255,255,255),-5px 0px 0 rgb(255,255,255),5px 5px 0 rgb(255,255,255),5px -5px 0 rgb(255,255,255),-5px 5px 0 rgb(255,255,255),-5px -5px 0 rgb(255,255,255)'
            }} className={'animate__animated animate__fadeInDown animate__delay-1s'}>ГРОМКО</Typography>
        </>
    );
};

export default SlideText1;
