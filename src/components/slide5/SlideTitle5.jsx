import React from 'react';
import {Typography} from "@mui/material";

const SlideText1 = () => {
    const titleCSS = {
        fontSize: {xl: '130px', lg: '100px', md: '90px', sm: '80px', xs: '70px'},
        fontWeight: 500,
        // position: 'absolute',
        zIndex: 500,
        fontFamily: 'Heading Now Trial'
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
