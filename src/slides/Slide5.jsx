import React from 'react';
import phone from "../assets/slide5/phoneLine.png";
import brain from "../assets/slide5/brainPeople.png";
import fly from "../assets/slide5/flyingPeople.png";
import money from "../assets/slide5/fireMoney.png";
import hands from "../assets/slide5/hands.png";
import {Box} from "@mui/material";

const Slide3 = () => {
    return (
        <>
             <Box component={'img'} src={phone} sx={{
                position: 'absolute',
                width: {xl: '45vw', lg: '40vw', md: '40vw'},
                height: '20%',
                left: '-10%',
                bottom: '45%',
                zIndex: 100,

            }} className={'animate__animated  animate__fadeInLeft'}/>
            <Box component={'img'} src={phone} sx={{
                position: 'absolute',
                width: {xl: '25vw', lg: '20vw', md: '20vw'},
                height: '20%',
                right: 0,
                bottom: '45%',
                zIndex: 100,
            }} className={'animate__animated  animate__fadeInRight'}/>
            <Box component={'img'} src={brain} sx={{
                position: 'absolute',
                width: {xl: '45vw', lg: '40vw', md: '40vw'},
                height: '45%',
                left: '10%',
                bottom: '0%',
                zIndex: 0,
            }} className={'animate__animated  animate__fadeInRight animate__delay-1s'}/>
            <Box component={'img'} src={fly} sx={{
                position: 'absolute',
                width: {xl: '35vw', lg: '30vw', md: '30vw'},
                height: '37%',
                left: 0,
                top: '0%',
                zIndex: 0,
            }} className={'animate__animated  animate__fadeInDown animate__delay-1s'}/>
            <Box component={'img'} src={hands} sx={{
                position: 'absolute',
                width: {xl: '35vw', lg: '30vw', md: '30vw'},
                height: '300px',
                right: '16%',
                top: '13%',
                zIndex: 0,
            }} className={'animate__animated  animate__fadeInDown animate__delay-1s'}/>
            <Box component={'img'} src={money} sx={{
                position: 'absolute',
                width: {xl: '20vw', lg: '30vw', md: '30vw'},
                height: '45%',
                right: '5%',
                bottom: '0%',
                zIndex: 0,
            }} className={'animate__animated  animate__fadeInUp animate__delay-1s'}/>
        </>
    );
};

export default Slide3;
