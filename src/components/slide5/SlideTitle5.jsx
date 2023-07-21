import React from 'react';
import {Typography} from "@mui/material";

const SlideText1 = () => {
    const titleCSS = {
        fontSize: {xl: '100px', lg: '80px', md: '60px', sm: '70px', xs: '45px'},
        fontWeight: 500,
        // position: 'absolute',
        zIndex: 500,
        // textShadow: 'rgba(231, 69, 54, 1) 1px -3px',
        // shadowColor: 'green',
        // lineHeight: '184.1px',
    }
    return (
        <>

            <Typography
                className={'animate__animated animate__fadeInUp animate__delay-1s'}
                sx={{
                    ...titleCSS,
                    // color: 'rgba(231, 69, 54, 1)',
                    color: 'black',
                    zIndex: 200,
                    marginLeft: '8%',
                    marginTop: {xl: '5%', lg: '10%', md: '10%',sm: '23%',}
                }}>НЕ РАБОТАТЬ </Typography>
            <Typography sx={{...titleCSS,
                color: 'rgba(231, 69, 54, 1)',
                marginTop: '-30px',
                marginLeft: '13%',
                zIndex: 200}} className={'animate__animated animate__fadeInUp animate__delay-1s'}>
                С ИДИОТАМИ
            </Typography>
        </>
    );
};

export default SlideText1;
