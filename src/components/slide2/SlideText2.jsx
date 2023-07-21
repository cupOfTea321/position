import React from 'react';
import {Typography} from "@mui/material";

const SlideText2 = ({text = 'Работа на бизнес-результат!'}) => {
    return (
        <>
            <Typography sx={{
                position: 'absolute',
                bottom: {sm: '30px', xs: '90px'},
                color: 'black',
                fontSize: {sm: '30px', xs: '18px'},
                zIndex: 300,
                textShadow: '10px 20px 200px white, 0 0 1em grey, 0 0 1em grey',
            }} className={'animate__animated animate__fadeInUp animate__delay-1s'}>
                {text}
            </Typography>
        </>
    );
};

export default SlideText2;
