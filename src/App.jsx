import {Box, Typography} from "@mui/material";
import phone6 from './assets/phone1.png'
import React, {useState} from "react";
import ScrollLock from "./components/layout/ScrollLock.jsx";
import Slide1 from "./slides/Slide1.jsx";
import PositionButton from "./components/PositionButton.jsx";
import Slide2 from "./slides/Slide2.jsx";
import SlideText1 from "./components/SlideText1.jsx";
import SlideText2 from "./components/SlideText2";

function App() {

    const [slide, setSlide] = useState(1)
    const slideHandler = () => {
        slide < 2
        ? setSlide(slide + 1)
        : setSlide(1)
    }
  return (
    <Box sx={{
        // background:
    }}>
        <ScrollLock/>
        <Box sx={{
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            background: `url(${phone6})`,
            backgroundColor:  slide === 1 ? 'black' : 'rgba(225, 231, 238, 1)',
            position: 'absolute',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top center',
            paddingBottom: '200px',
        }}>
            {slide === 1 && <SlideText1/>}
            {slide === 2 && <SlideText2/>}

            <PositionButton onMouseEnter={slideHandler}/>
            <Typography sx={{
                position: 'absolute',
                bottom: {sm: '30px', xs: '90px'},
                color: 'white',
                fontSize: {sm: '30px', xs: '18px'},
                zIndex: 300,
                textShadow: '10px 20px 200px white, 0 0 1em grey, 0 0 1em grey',
            }} className={'animate__animated animate__fadeInUp animate__delay-1s'}>
                Партия адекватных пиарщиков!
            </Typography>
        </Box>
        {slide === 1 && <Slide1 />}
        {slide === 2 && <Slide2 />}


    </Box>
  )
}

export default App
