import React from 'react';
import {Box, Typography} from "@mui/material";

const PersonBrand = ({sx, position}) => {
    const titleCSS = {
        fontWeight: 500,
        zIndex: 500,
        textShadow: 'rgba(231, 69, 54, 1) 1px -3px',
        shadowColor: 'green',
        fontFamily: 'Heading Now Trial',
        // textAlign: {sm: 'left', xs: 'center'}
    }
    return (
        <Box sx={sx}>
            <Typography
                className={'animate__animated animate__fadeInUp animate__delay-1s'}
                sx={{
                    ...titleCSS,
                    color: 'white',
                    zIndex: 200,
                    fontSize: {sm: '100px', xs: '80px'},
                }}>ПОЗИЦИЯ </Typography>
            <Typography sx={{...titleCSS,
                color: 'white',
                marginTop: '-10px',
                marginBottom: '20px',
                fontSize: {sm: '50px', xs: '40px'},
                float: 'right',
                zIndex: 200}} className={'animate__animated animate__fadeInUp animate__delay-1s'}>
                {position}
            </Typography>
        </Box>
    );
};

export default PersonBrand;
