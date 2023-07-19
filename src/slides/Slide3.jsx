import React from 'react';
import elephant from "../assets/slide2/elephant.png";
import manPC from "../assets/slide2/ManPC.png";
import keyboard from "../assets/slide2/keyboard.png";
import code from "../assets/slide2/code01.png";
import leftPhone from "../assets/slide3/left3.png";
import rightPhone from "../assets/slide3/right3.png";
import leftM from "../assets/slide3/leftMoney.png";
import rightM from "../assets/slide3/rightMoney.png";
import {Box} from "@mui/material";

const Slide3 = () => {
    return (
        <>
             <Box component={'img'} src={leftPhone} sx={{
                position: 'absolute',
                width: {md: '30.2%'},
                height: '100vh',
                left: 0,
                bottom: '0%',
                zIndex: 0,
                display: {md: 'flex', sm: 'none', xs: 'none'}
            }} className={'animate__animated animate__fadeInRight animate__delay-1s'}/>
            <Box component={'img'} src={leftM} sx={{
                position: 'absolute',
                width: '300px',
                left: 0,
                top: '0%',
                zIndex: 0,
                display: {md: 'none', sm: 'flex', xs: 'flex'}
            }} className={'animate__animated animate__fadeInLeft  animate__delay-1s'}/>
            <Box component={'img'} src={rightPhone} sx={{
                position: 'absolute',
                width: '30%',
                height: '100vh',
                right: 0,
                bottom: '0%',
                zIndex: 0,
                display: {md: 'flex', sm: 'none', xs: 'none'}
            }} className={'animate__animated animate__fadeInLeft animate__delay-1s'}/>
            <Box component={'img'} src={rightM} sx={{
                position: 'absolute',
                width: '300px',
                right: 0,
                bottom: '0%',
                zIndex: 0,
                display: {md: 'none', sm: 'flex', xs: 'flex'}
            }} className={'animate__animated animate__fadeInRight animate__delay-1s'}/>
        </>
    );
};

export default Slide3;
