import React from 'react';
import {Box} from "@mui/material";
import blackMapPoint from '../../assets/BlackMapPoint.svg'
const BlackMapPoint = (props) => {
    const {sx} = props
    return <Box component={'img'} src={blackMapPoint} sx={sx}/>
};

export default BlackMapPoint;
