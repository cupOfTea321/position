import React from 'react';
import phone from "../assets/slide4/phone4.png";
import deleteMan from "../assets/slide4/DeleteMan.png";
import cross from "../assets/slide4/cross.png";
import trash from "../assets/slide4/trash.png";
import {Box} from "@mui/material";

const Slide3 = () => {
    return (
        <>
             <Box component={'img'} src={phone} sx={{
                position: 'absolute',
                width: '120vw',
                height: '120vh',
                left: '-10%',
                bottom: '0%',
                zIndex: 0,

            }} className={'animate__animated  animate__heartBeat'}/>
            <Box component={'img'} src={deleteMan} sx={{
                position: 'absolute',
                width: '30%',
                left: '0%',
                bottom: '0%',
                zIndex: 0,

            }} className={'animate__animated animate__fadeInLeft animate__delay-1s'}/>

            <Box component={'img'} src={trash} sx={{
                position: 'absolute',
                width: '30%',
                // height: '100%',
                right: '0%',
                bottom: '0%',
                zIndex: 0,

            }} className={'animate__animated animate__fadeInRight animate__delay-1s'}/>
            <Box component={'img'} src={cross} sx={{
                position: 'absolute',
                width: '200px',
                // height: '100%',
                right: '30%',
                top: '5%',
                zIndex: 0,

            }} className={'animate__animated animate__fadeInDown animate__delay-1s'}/>

        </>
    );
};

export default Slide3;
