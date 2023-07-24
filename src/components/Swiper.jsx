import React from 'react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import {SwiperSlide, Swiper} from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slider1 from '../assets/slider/slider1.jpg';
import slider2 from '../assets/slider/slider2.jpg';
import slider3 from '../assets/slider/slider3.jpg';
import slider4 from '../assets/slider/slider4.jpg';
import slider5 from '../assets/slider/slider5.jpg';
import slider6 from '../assets/slider/slider6.jpg';
import slider7 from '../assets/slider/slider7.jpg';
import slider8 from '../assets/slider/slider8.jpg';
import slider9 from '../assets/slider/slider9.jpg';
import slider10 from '../assets/slider/slider10.jpg';
import btn from '../assets/slider/rightBtn.png';
import {Box} from "@mui/material";

const MySwiper = () => {
    const slides = [
        slider1,
        slider2,
        slider3,
        slider4,
        slider5,
        slider6,
        slider7,
        slider8,
        slider9,
        slider10,
    ]
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                {slides.map(slide => (
                    <SwiperSlide key={slide} style={{
                        // width: {sm: '37rem', xs: '22rem'},
                        height: {sm: '42rem', xs: '30rem'},

                    }}>
                        <Box component={'img'} src={slide} alt="slide_image" sx={{
                            border: '3px solid black',
                            borderRadius: '2rem',
                            width: {sm: '37rem', xs: '22rem'},
                            height: {sm: '42rem', xs: '30rem'},
                            objectFit: 'cover',

                        }}/>
                    </SwiperSlide>
                ))}


                <Box className="slider-controler" sx={{
                    marginTop: {sm: '-1%', xs: '3%'}
                }}>
                    <Box className="swiper-button-prev slider-arrow" sx={{
                        left: '36%',
                        transform: 'translateX(-58%) !important',
                        borderRadius: '50%',
                        background: ' rgba(217, 217, 217, 0.3)',
                        width: '100px',
                        height: '100px',
                        padding: '25px 25px 26px 15px'
                    }}>
                        {/*<ion-icon name="arrow-back-outline"></ion-icon>*/}
                        <Box  component={'img'} src={btn} sx={{
                            rotate: '180deg',
                            width: '34px',
                            height: '58px'
                        }}/>
                    </Box>
                    <Box className="swiper-button-next slider-arrow" sx={{
                        right: {lg: '29%', md: '25%', sm: '24%', xs: '10%'},
                        transform: 'translateX(-58%) !important',
                        borderRadius: '50%',
                        background: ' rgba(217, 217, 217, 0.3)',
                        width: '100px',
                        height: '100px',
                        padding: '25px 25px 26px 35px'
                    }}>
                        {/*<ion-icon name="arrow-forward-outline"></ion-icon>*/}
                        <Box  component={'img'} src={btn} sx={{
                            width: '34px',
                            height: '58px',

                        }}/>
                    </Box>
                    {/*<div className="swiper-pagination"></div>*/}
                </Box>
            </Swiper>
        </>
    );
};

export default MySwiper;
