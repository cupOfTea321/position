import React from 'react';
import {Box, Typography} from "@mui/material";
import ava1 from "../../assets/people/ava1.png";
import {personParagraph} from "../../mui/utilsCSS.js";
import LeftText from "./LeftText.jsx";
import RightText from "./RightText.jsx";
import PersonBrand from "./PersonBrand.jsx";

const LeftPerson = () => {
    return (
        <Box sx={{
            flex: 1,
            marginRight: {sm: '74px', xs: 0},
        }}>
            <Box component={'img'} src={ava1} sx={{
                marginBottom: '',
                marginLeft: '-10px',
                marginTop: {sm: '20px', xs: '33px'}
            }} className={'animate__animated  animate__fadeInLeft'}/>
            <PersonBrand sx={{display: {sm: 'none', xs: 'block'}}}/>
            <RightText sx={{display: {sm: 'none', xs: 'block'}}}/>
            <LeftText />
        </Box>
    );
};

export default LeftPerson;
