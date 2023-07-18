import React from 'react';
import elephant from "../assets/elephant.png";
import {Box} from "@mui/material";

const Slide2 = () => {
    return (
        <>
            <Box component={'img'} src={elephant} sx={{
                position: 'absolute',
                width: '800px',
                height: '600px',
                left: {lg: 0, md: '-10%', sm: '-50%', xs: '-100%'},
                zIndex: 100,
                display: {sm: 'flex', xs: 'none'}
            }} className={'animate__animated animate__heartBeat '}/>
        </>
    );
};

export default Slide2;
