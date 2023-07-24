import React from 'react';
import {Box} from "@mui/material";
import ScrollLock from "../components/layout/ScrollLock.jsx";
import phone6 from "../assets/slide1/phone1.png";
import SlideTitle1 from "../components/slide1/SlideTitle1.jsx";
import SlideTitle2 from "../components/slide2/SlideTitle2.jsx";
import SlideTitle3 from "../components/slide3/SlideTitle3.jsx";
import SlideTitle4 from "../components/slide4/SlideTitle4.jsx";
import Centre2 from "../components/slide2/Centre2.jsx";
import Centre3 from "../components/slide3/Centre3.jsx";
import PositionButton1 from "../components/ui/PositionButton1.jsx";
import SlideTextWhite from "../components/ui/SlideTextWhite.jsx";
import SlideTextBlack from "../components/ui/SlideTextBlack.jsx";
import Slide1 from "../slides/Slide1.jsx";
import Slide2 from "../slides/Slide2.jsx";
import Slide3 from "../slides/Slide3.jsx";
import Slide4 from "../slides/Slide4.jsx";
import {useState} from "react";
import BlackPhoneSlide from "../components/ui/BlackPhoneSlide.jsx";
import WhitePhoneSlide from "../components/ui/WhitePhoneSlide.jsx";
import Slide5 from "../slides/Slide5";

const SliderPage = () => {
    const [disabled, setDisabled] = useState(false);
    const [slide, setSlide] = useState(1)
    const slideHandler = () => {
        slide < 5
            ? setSlide(slide + 1)
            : setSlide(1)
        if (!disabled) {
            // Отключаем кнопку
            setDisabled(true);

            // Включаем кнопку через 500 миллисекунд
            setTimeout(() => {
                setDisabled(false);
            }, 1000);
        }
    }


    // backColor = slide === 4  ? 'black' : 'rgba(225, 231, 238, 1)'
    return (
        <Box sx={{
            // background:
        }}>

            {slide === 1 && <BlackPhoneSlide slide={slide} slideHandler={slideHandler} disabled={disabled}/>}
            {slide === 2 && <WhitePhoneSlide slide={slide} slideHandler={slideHandler} disabled={disabled}/>}
            {slide === 3 && <WhitePhoneSlide slide={slide} slideHandler={slideHandler} disabled={disabled}/>}
            {slide === 4 && <BlackPhoneSlide slide={slide} slideHandler={slideHandler} disabled={disabled}/>}
            {slide === 5 && <WhitePhoneSlide slide={slide} slideHandler={slideHandler} disabled={disabled}/>}

            {slide === 1 && <Slide1 />}
            {slide === 2 && <Slide2 />}
            {slide === 3 && <Slide3 />}
            {slide === 4 && <Slide4 />}
            {slide === 5 && <Slide5 />}


        </Box>
    );
};

export default SliderPage;
