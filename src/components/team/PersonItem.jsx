import React from 'react';
import phone6 from "../../assets/slide1/phone1.png";
import {Box, Container} from "@mui/material";
import LeftPerson from "./LeftPerson.jsx";
import RightPerson from "./RightPerson.jsx";

const PersonItem = ({person}) => {
    return (
        <Box sx={{
            // overflow: 'auto !important',
            width: '100vw',
            display: 'flex',
            // flexDirection: 'column',
            // alignItems: 'center',
            justifyContent: 'center',
            // height: '100vh',
            background: `url(${phone6})`,
            backgroundColor:  'black',
            // position: 'absolute',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top center',
            // paddingBottom: '200px',
            fontFamily: 'heading_now_trial45_medium',

        }} >
            <Container maxWidth={'lg'} sx={{
                margin: {sm: '110px 0', xs: '40px 0'},
                color: 'white',
                display: 'flex',
                flexDirection: {sm: 'row', xs: 'column-reverse'},
            }}>
                <LeftPerson person={person}/>
                <RightPerson person={person}/>

            </Container>
        </Box>
    );
};

export default PersonItem;
