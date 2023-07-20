import React from 'react';
import phone6 from "../assets/phone1.png";
import SlideTitle1 from "./slide1/SlideTitle1.jsx";
import SlideTitle2 from "./slide2/SlideTitle2.jsx";
import SlideTitle3 from "./slide3/SlideTitle3.jsx";
import SlideTitle4 from "./slide4/SlideTitle4.jsx";
import Centre2 from "./slide2/Centre2.jsx";
import Centre3 from "./slide3/Centre3.jsx";
import PositionButton1 from "./PositionButton1.jsx";
import SlideText1 from "./slide1/SlideText1.jsx";
import SlideText2 from "./slide2/SlideText2.jsx";
import {Box} from "@mui/material";

const WhitePhoneSlide = ({slide, slideHandler, disabled}) => {
    return (
        <Box sx={{
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            background: `url(${phone6})`,
            backgroundColor:  'rgba(225, 231, 238, 1)',
            position: 'absolute',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top center',
            paddingBottom: '200px',
        }}>

            {/*{slide === 1 && <SlideTitle1/>}*/}
            {slide === 2 && <SlideTitle2/>}
            {slide === 3 && <SlideTitle3/>}
            {/*{slide === 4 && <SlideTitle4/>}*/}

            {slide === 2 && <Centre2/>}
            {slide === 3 && <Centre3/>}

            {/*{slide === 1 && <PositionButton1 disabled={disabled} onMouseEnter={slideHandler}/>}*/}
            {slide === 2 && <PositionButton1 disabled={disabled} sx={{
                color: 'white',
                background: 'rgba(231, 69, 54, 1)',
            }} onMouseEnter={slideHandler}/>}
            {slide === 3 && <PositionButton1 disabled={disabled} sx={{
                color: 'white',
                background: 'rgba(231, 69, 54, 1)',
            }} onMouseEnter={slideHandler}/>}

            {/*{slide === 1 && <SlideText1/>}*/}
            {slide === 2 && <SlideText2/>}
            {slide === 3 && <SlideText1 text={'Принципиально другой пиар!'}/>}
        </Box>
    );
};

export default WhitePhoneSlide;
