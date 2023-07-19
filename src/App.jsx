import {Box, Typography} from "@mui/material";
import phone6 from './assets/phone1.png'
import React, {useState} from "react";
import ScrollLock from "./components/layout/ScrollLock.jsx";
import Slide1 from "./slides/Slide1.jsx";
import PositionButton1 from "./components/PositionButton1.jsx";
import Slide2 from "./slides/Slide2.jsx";
import SlideTitle1 from "./components/slide1/SlideTitle1.jsx";
import SlideTitle2 from "./components/slide2/SlideTitle2.jsx";
import SlideText2 from "./components/slide2/SlideText2.jsx";
import SlideText1 from "./components/slide1/SlideText1.jsx";
import PositionButton2 from "./components/PositionButton2.jsx";
import elephant from "./assets/slide2/elephant.png";
import Centre2 from "./components/slide2/Centre2.jsx";
import Centre3 from "./components/slide3/Centre3.jsx";
import SlideTitle3 from "./components/slide3/SlideTitle3.jsx";
import Slide3 from "./slides/Slide3.jsx";

function App() {

    const [slide, setSlide] = useState(1)
    const slideHandler = () => {
        setTimeout(() => {
            slide < 3
                ? setSlide(slide + 1)
                : setSlide(1)
        }, 100)

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
            {slide === 1 && <SlideTitle1/>}
            {slide === 2 && <SlideTitle2/>}
            {slide === 3 && <SlideTitle3/>}

            {slide === 2 && <Centre2/>}
            {slide === 3 && <Centre3/>}

            {slide === 1 && <PositionButton1 onMouseEnter={slideHandler}/>}
            {slide === 2 && <PositionButton2 onMouseEnter={slideHandler}/>}
            {slide === 3 && <PositionButton2 onMouseEnter={slideHandler}/>}

            {slide === 1 && <SlideText1/>}
            {slide === 2 && <SlideText2/>}
            {slide === 3 && <SlideText1 text={'Принципиально другой пиар!'}/>}
        </Box>
        {slide === 1 && <Slide1 />}
        {slide === 2 && <Slide2 />}
        {slide === 3 && <Slide3 />}


    </Box>
  )
}

export default App
