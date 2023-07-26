import React from 'react';
import {Box, Typography} from "@mui/material";
import frame from "../../assets/people/frame.png";
import {personParagraph} from "../../mui/utilsCSS.js";
import RightText from "./RightText.jsx";
import PersonBrand from "./PersonBrand.jsx";

const RightPerson = () => {
    const personTitle = {
        fontSize: '30px',
        position: 'relative',

    }

    return (
        <Box sx={{
            flex: 1,

        }}>
            <Box sx={{
                marginLeft: {sm: 0, xs: '24px'}
            }}>
                <Typography variant={'text'} sx={personTitle}>
                    Алена Сухаревская
                    <Box component={'img'} src={frame} sx={{
                        position: 'absolute',
                        width: '44px',
                        left: '-24px',
                        top: '-17px',
                        zIndex: 0,

                    }} className={'animate__animated animate__delay-1s  animate__headShake'}/>
                </Typography>
                <Box>
                    <Typography variant={'text'} sx={personTitle}>
                        PR-директор Юрент
                        <Box component={'img'} src={frame} sx={{
                            position: 'absolute',
                            width: '44px',
                            right: '-22px',
                            bottom: '-13px',
                            zIndex: 0,
                            rotate: '180deg'

                        }} className={'animate__animated animate__delay-1s animate__headShake'}/>
                    </Typography>

                </Box>
            </Box>

            <RightText sx={{display: {sm: 'block', xs: 'none'}}}/>
            <PersonBrand sx={{display: {sm: 'block', xs: 'none'}}}/>
        </Box>
    );
};

export default RightPerson;
