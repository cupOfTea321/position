import React from 'react';
import {Box, Typography} from "@mui/material";
import {personParagraph} from "../../mui/utilsCSS.js";

const LeftText = ({sx, leftP}) => {
    return (
        <Box sx={sx} className={'animate__animated  animate__fadeInLeft'}>
            {leftP.map((item, index) => (
                <Typography key={index} component={'p'} variant={'raleway'} sx={personParagraph}>
                    {item}
                </Typography>
            ))}
        </Box>
    );
};

export default LeftText;
