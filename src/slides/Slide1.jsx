import React from 'react';
import {Box} from "@mui/material";
import speaker from "../assets/speakerVlad.svg";
import speakerMobile from "../assets/speaker.png";
import people from "../assets/people.png";
import leftTV from "../assets/leftTV.png";
import rightTV from "../assets/rightTV.png";

const Slide1 = () => {
    return (
        <>
            <Box component={'img'} src={speaker} sx={{
                position: 'absolute',
                width: {xl: '100vw', lg: '120vw', md: '140vw', sm: '200vw', xs: '300vw'},
                height: {xl: '120vh', lg: '120vh', md: '120vh', sm: '120vh', xs: '120vh'},
                left: {lg: 0, md: '-10%', sm: '-50%', xs: '-100%'},
                zIndex: 100,
                display: {sm: 'flex', xs: 'none'}
            }} className={'animate__animated animate__heartBeat '}/>
            <Box component={'img'} src={speakerMobile} sx={{
                position: 'absolute',
                width: {xl: '100vw', lg: '120vw', md: '140vw', sm: '200vw', xs: '300vw'},
                height: {xl: '120vh', lg: '120vh', md: '120vh', sm: '120vh', xs: '120vh'},
                left: {lg: 0, md: '-10%', sm: '-50%', xs: '-100%'},
                zIndex: 100,
                display: {sm: 'none', xs: 'flex'}
            }} className={'animate__animated animate__heartBeat '}/>
            <Box component={'img'} src={people} sx={{
                position: 'absolute',
                width: '500px', bottom: 0, right: 0,
                zIndex: 100,
            }} className={'animate__animated animate__fadeInRight animate__delay-1s'}/>
            <Box component={'img'} src={leftTV} sx={{
                position: 'absolute',
                width: {md: '340px', sm: '240px', xs: '180px'},
                left: {lg: '5%', md: '-10%', sm: '10%', xs: '5%'},
                zIndex: 100,
            }} className={'animate__animated animate__headShake animate__delay-1s'}/>
            <Box component={'img'} src={rightTV} sx={{
                position: 'absolute',
                width: {lg: '285px', md: '240px', sm: '200px', xs: '150px'},
                top: {lg: '40%', md: '50%', sm: '53%', xs: '55%'},
                right: {lg: 0, md: '-10%', sm: '0%', xs: '-50%'},
                zIndex: 100,
            }} className={'animate__animated animate__headShake animate__delay-1s'}/>
        </>
    );
};

export default Slide1;
