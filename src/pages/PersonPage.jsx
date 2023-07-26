import React, {useEffect} from 'react';
import phone6 from "../assets/slide1/phone1.png";
import ava1 from "../assets/people/ava1.png";
import frame from "../assets/people/frame.png";
import {Box, Container, Typography} from "@mui/material";
import phone from "../assets/slider/sliderPhone.png";
import LeftPerson from "../components/team/LeftPerson.jsx";
import RightPerson from "../components/team/RightPerson.jsx";

const PersonPage = () => {

    useEffect(() => {
        document.body.style.overflow = 'auto'
    })

    const person = {
        ava: '',
        leftP: [

        ],
        rightP: [

        ],
        name: '',
        company: '',
        position: ''
    }
    return (
            <>
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
                        <LeftPerson />
                        <RightPerson/>

                    </Container>
                </Box>
            </>



    );
};

export default PersonPage;
