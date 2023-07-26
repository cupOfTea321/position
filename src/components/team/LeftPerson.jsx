import React from 'react';
import {Box, Typography} from "@mui/material";
import ava1 from "../../assets/people/ava1.png";
import {personParagraph} from "../../mui/utilsCSS.js";
import LeftText from "./LeftText.jsx";
import RightText from "./RightText.jsx";
import PersonBrand from "./PersonBrand.jsx";

const LeftPerson = ({person}) => {
    const {ava, leftP, rightP, name, company, position} = person
    return (
        <Box sx={{
            flex: 1,
            marginRight: {sm: '74px', xs: 0},
        }}>
            <Box component={'img'} src={ava} sx={{
                marginBottom: '',
                margin: '0 auto',
                marginLeft: {sm: '-10px', xs: '0'},

                marginTop: {sm: '20px', xs: '33px'}
            }} className={'animate__animated  animate__fadeInLeft'}/>
            <PersonBrand position={position} sx={{display: {sm: 'none', xs: 'block'}}}/>
            <RightText rightP={rightP} sx={{display: {sm: 'none', xs: 'block'}}}/>
            <LeftText leftP={leftP}/>
        </Box>
    );
};

export default LeftPerson;
