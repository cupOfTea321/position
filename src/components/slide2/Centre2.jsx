import React from 'react';
import elephant from "../../assets/slide2/elephant.png";
import {Box} from "@mui/material";
import lamp from "../../assets/slide2/lamp.png";

const Centre2 = () => {
    return (
        <>
            <Box component={'img'} src={lamp} sx={{
                width: {sm: '100px', xs: '80px'},
                height: {sm: '100px', xs: '80px'},
                marginLeft: {sm: '300px', xs: '35%'},
                marginBottom: {sm: '-150px', xs: '-100px'},
                zIndex: 300,
            }} className={'animate__animated animate__fadeInDown animate__delay-1s'}/>

            <Box component={'img'} src={elephant} sx={{
                // position: 'absolute',
                marginBottom: '-230px',
                marginRight: '40px',
                width: {lg: '700px', md: '600px', sm: '600px', xs: '90%'},
                height: {lg: '520px', md: '440px', sm: '440px'},
                zIndex: 200,
            }} className={'animate__animated animate__heartBeat '}/>


        </>
    );
};

export default Centre2;
