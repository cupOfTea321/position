import React from 'react';
import MySwiper from "../components/team/Swiper.jsx";
import phone6 from "../assets/slide1/phone1.png";
import {Box} from "@mui/material";
import phone from "../assets/slider/sliderPhone.png";
import {useEffect} from "react";

const TeamPage = () => {
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'scroll'
        }
    })
    return (
        <>
            <Box sx={{
                // width: '100vw',
                display: 'flex',
                // flexDirection: 'column',
                // alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                background: `url(${phone6})`,
                backgroundColor:  'black',
                // position: 'absolute',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top center',
                // paddingBottom: '200px',
                fontFamily: 'heading_now_trial45_medium'
            }} >
            <MySwiper/>
            </Box>
            <Box component={'img'} src={phone} sx={{
                position: 'absolute',
                width: {md: '100vw', sm: '200vw', xs: '200vw'},
                height: '100vh',
                left: '0%',
                bottom: '0%',
                zIndex: 0,

            }} className={'animate__animated  animate__headShake'}/>
        </>
    );
};

export default TeamPage;
