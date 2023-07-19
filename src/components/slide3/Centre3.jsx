import React from 'react';
import elephant from "../../assets/slide2/elephant.png";
import {Box} from "@mui/material";
import phone from "../../assets/slide3/phone3.png";
import mobilePhone from "../../assets/slide3/mobilePhone.png";

const Centre3 = () => {
    return (
        <>
            <Box component={'img'} src={mobilePhone} sx={{
                width: {md: '40%', sm: '60%', xs: '80%'},
                height: '200%',
                // marginLeft: {sm: '300px', xs: '35%'},
                marginBottom: {sm: '-400px', xs: '-400px'},
                marginTop: {sm: '-600px', xs: '-600px'},
                zIndex: 100,
            }} className={'animate__animated animate__fadeInDown '}/>

        </>
    );
};

export default Centre3;
