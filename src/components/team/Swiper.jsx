import React from 'react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import {SwiperSlide, Swiper} from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import slider1 from '../../assets/slider/photo1.png';
import slider2 from '../../assets/slider/photo2.png';
import slider3 from '../../assets/slider/photo3.png';
import slider4 from '../../assets/slider/photo4.png';
import slider5 from '../../assets/slider/photo5.png';
import slider6 from '../../assets/slider/photo6.png';
import slider7 from '../../assets/slider/photo7.png';
import slider8 from '../../assets/slider/photo8.png';
import slider9 from '../../assets/slider/photo9.png';
import slider10 from '../../assets/slider/photo10.png';
import btn from '../../assets/slider/rightBtn.png';
import {Box, Typography} from "@mui/material";
import PositionButton1 from "../ui/PositionButton1.jsx";

const MySwiper = () => {
    const slides = [
        {img: slider1, title: 'АЛЕНА СУХАРЕВСКАЯ', company: 'Юрент'},
        {img: slider2, title: 'СЕРГЕЙ ДЕНИСЕНКО', company: 'ВсеИнструменты.ру'},
        {img: slider3, title: 'ЮЛИЯ ВАРЛАМОВА', company: 'Ситидрайв'},
        {img: slider4, title: 'ЮЛИЯ ВОЛОДЯЕВА', company: 'Лента Онлайн'},
        {img: slider5, title: 'МИХАИЛ БЕРГГРЕН', company: 'СДЭК'},
        {img: slider6, title: 'ОЛЬГА ЧЕРНЯВСКАЯ', company: 'Skillfactory'},
        {img: slider7, title: 'ОЛЬГА ШАБАЕВА', company: 'Работа.ру '},
        {img: slider8, title: 'ДАРЬЯ ОРЕШКО', company: 'flowwow'},
        {img: slider9, title: 'ЕЛЕНА ВИНОКУРЦЕВА', company: 'Skyeng'},
        {img: slider10, title: 'АНАСТАСИЯ БАШТОВАЯ', company: 'Яндекс 360'},
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
                className="swiper_container animate__animated  animate__bounceIn "
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={slide} style={{
                        // width: {sm: '37rem', xs: '22rem'},
                        height: {sm: '40vh', xs: '30rem'},

                    }} className={`proj-imgbx`}>
                        <Box component={'img'} src={slide.img} alt="slide_image" sx={{
                            border: '3px solid black',
                            borderRadius: '2rem',
                            width: {sm: '37rem', xs: '22rem'},
                            height: {sm: '70vh', xs: '30rem'},
                            objectFit: 'cover',

                        }}/>
                        <Box className={`proj-txtx`} sx={{color: 'white'}}>
                            <Typography variant={'h6'} sx={{
                                fontSize: '32px'
                            }}>
                                {slide.title}
                            </Typography>
                            <span style={{
                                fontWeight: 600,
                                textShadow: 'black 0px 0 100px',
                                fontSize: '20px'
                            }}>{slide.company}</span>
                            <PositionButton1 sx={{
                                position: '',
                                marginTop: '20px',
                                fontSize: {md: '50px', sm: '40px', xs: '30px'},
                                padding: {sm: '0px 18px', xs: '10px 20px'},
                            }} link={`/person/${index+1}`}/>
                        </Box>
                    </SwiperSlide>
                ))}


                <Box className="slider-controler" sx={{
                    marginTop: {sm: '-1%', xs: '-12%'}
                }}>
                    <Box className="swiper-button-prev slider-arrow" sx={{
                        left: '36%',
                        transform: 'translateX(-58%) !important',
                        borderRadius: '50%',
                        background: ' rgba(217, 217, 217, 0.3)',
                        width: {sm: '100px', xs: '50px'},
                        height: {sm: '100px', xs: '50px'},
                        padding: {sm: '25px 25px 26px 15px', xs: '25px 25px 26px 20px'}
                    }}>
                        {/*<ion-icon name="arrow-back-outline"></ion-icon>*/}
                        <Box  component={'img'} src={btn} sx={{
                            rotate: '180deg',
                            width: {sm: '34px', xs: '17px'},
                            height: {sm: '58px', xs: '29px'},
                        }}/>
                    </Box>
                    <Box className="swiper-button-next slider-arrow" sx={{
                        right: {lg: '29%', md: '25%', sm: '24%', xs: '23%'},
                        transform: 'translateX(-58%) !important',
                        borderRadius: '50%',
                        background: ' rgba(217, 217, 217, 0.3)',
                        width: {sm: '100px', xs: '50px'},
                        height: {sm: '100px', xs: '50px'},
                        padding: {sm: '25px 15px 26px 25px', xs: '25px 21px 26px 28px'}
                    }}>
                        {/*<ion-icon name="arrow-forward-outline"></ion-icon>*/}
                        <Box  component={'img'} src={btn} sx={{
                            width: {sm: '34px', xs: '17px'},
                            height: {sm: '58px', xs: '29px'},
                        }}/>
                    </Box>
                    {/*<div className="swiper-pagination"></div>*/}
                </Box>
            </Swiper>
        </>
    );
};

export default MySwiper;
