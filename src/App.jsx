import {Box, Typography} from "@mui/material";
import phone6 from './assets/phone1.png'
import React, {useState} from "react";
import ScrollLock from "./components/layout/ScrollLock.jsx";
import Slide1 from "./slides/Slide1.jsx";
import PositionButton from "./components/PositionButton.jsx";
import Slide2 from "./slides/Slide2.jsx";

function App() {
    const titleCSS = {
        fontSize: {md: '140px', sm: '80px', xs: '50px'},
        fontWeight: 500,
        lineHeight: '184.1px',
    }
    const [slide, setSlide] = useState(1)
    const slideHandler = () => {
        slide < 2
        ? setSlide(slide + 1)
        : setSlide(1)
    }
  return (
    <Box sx={{background: 'black'}}>
        <ScrollLock/>
        <Box sx={{
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            background: `url(${phone6})`,
            backgroundColor: 'black',
            position: 'absolute',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top center',
            paddingBottom: '200px',
        }}>
            <Typography
                className={'animate__animated animate__fadeInDown animate__delay-1s'}
                sx={{
                    ...titleCSS,
                    color: 'white',
                    zIndex: 200,
                    marginTop: {sm: 0, xs: '80px'}
                }}>ГОВОРИТЬ </Typography>
            <Typography sx={{...titleCSS,
                rotate: '-10deg',
                color: 'rgba(231, 69, 54, 1)',
                marginTop: {sm: '-50px', xs: '-120px'},
                zIndex: 200,
                marginLeft: {sm: '350px', xs: '100px'},
                textShadow: '0px 1px 0 rgb(255,255,255),0px -1px 0 rgb(255,255,255),1px 0px 0 rgb(255,255,255),-1px 0px 0 rgb(255,255,255),1px 1px 0 rgb(255,255,255),1px -1px 0 rgb(255,255,255),-1px 1px 0 rgb(255,255,255),-1px -1px 0 rgb(255,255,255),0px 2px 0 rgb(255,255,255),0px -2px 0 rgb(255,255,255),2px 0px 0 rgb(255,255,255),-2px 0px 0 rgb(255,255,255),2px 2px 0 rgb(255,255,255),2px -2px 0 rgb(255,255,255),-2px 2px 0 rgb(255,255,255),-2px -2px 0 rgb(255,255,255),0px 3px 0 rgb(255,255,255),0px -3px 0 rgb(255,255,255),3px 0px 0 rgb(255,255,255),-3px 0px 0 rgb(255,255,255),3px 3px 0 rgb(255,255,255),3px -3px 0 rgb(255,255,255),-3px 3px 0 rgb(255,255,255),-3px -3px 0 rgb(255,255,255),0px 4px 0 rgb(255,255,255),0px -4px 0 rgb(255,255,255),4px 0px 0 rgb(255,255,255),-4px 0px 0 rgb(255,255,255),4px 4px 0 rgb(255,255,255),4px -4px 0 rgb(255,255,255),-4px 4px 0 rgb(255,255,255),-4px -4px 0 rgb(255,255,255),0px 5px 0 rgb(255,255,255),0px -5px 0 rgb(255,255,255),5px 0px 0 rgb(255,255,255),-5px 0px 0 rgb(255,255,255),5px 5px 0 rgb(255,255,255),5px -5px 0 rgb(255,255,255),-5px 5px 0 rgb(255,255,255),-5px -5px 0 rgb(255,255,255)'
            }} className={'animate__animated animate__fadeInDown animate__delay-1s'}>ГРОМКО</Typography>
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
