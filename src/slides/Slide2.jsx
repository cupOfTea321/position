import React from 'react';
import elephant from "../assets/slide2/elephant.png";
import manPC from "../assets/slide2/ManPC.png";
import keyboard from "../assets/slide2/keyboard.png";
import code from "../assets/slide2/code01.png";
import lamp from "../assets/slide2/lamp.png";
import {Box} from "@mui/material";

const Slide2 = () => {
    return (
        <>
             <Box component={'img'} src={manPC} sx={{
                position: 'absolute',
                width: {md: '260px', sm: '180px'},
                height: {md: '450px', sm: '300px'},
                left: {xl: '10%',lg: '5%', md: '0', sm: '-5%', xs: '-100%'},
                bottom: '0%',
                zIndex: 100,
                // display: {sm: 'flex', xs: 'none'}
            }} className={'animate__animated animate__fadeInLeft animate__delay-1s'}/>
            <Box component={'img'} src={code} sx={{
                position: 'absolute',
                width: '270px',
                height: {lg: '570px', md: '400px'},
                right: {sm: 0, xs: '-100%'},
                top: 0,
                zIndex: 100,
                // display: {sm: 'flex', xs: 'none'}
            }} className={'animate__animated animate__fadeInRight animate__delay-1s'}/>

            <Box component={'img'} src={keyboard} sx={{
                position: 'absolute',
                width: '100vw',
                height: '50wh',
                // left: {xl: '10%',lg: '25%', md: '-10%', sm: '-50%', xs: '-100%'},
                bottom: {lg: 'auto', md: 0, sm: 0, xs: 0 },
                zIndex: 100,
                // display: {sm: 'flex', xs: 'none'}
            }} className={'animate__animated animate__delay-1s animate__headShake'}/>
        </>
    );
};

export default Slide2;
