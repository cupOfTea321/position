import React from 'react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import {SwiperSlide, Swiper} from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slider1 from '../../assets/slider/slider1.jpg';
import slider2 from '../../assets/slider/slider2.jpg';
import slider3 from '../../assets/slider/slider3.jpg';
import slider4 from '../../assets/slider/slider4.jpg';
import slider5 from '../../assets/slider/slider5.jpg';
import slider6 from '../../assets/slider/slider6.jpg';
import slider7 from '../../assets/slider/slider7.jpg';
import slider8 from '../../assets/slider/slider8.jpg';
import slider9 from '../../assets/slider/slider9.jpg';
import slider10 from '../../assets/slider/slider10.jpg';
import btn from '../../assets/slider/rightBtn.png';
import {Box, Typography} from "@mui/material";
import PositionButton1 from "../ui/PositionButton1.jsx";

const MySwiper = () => {
    const slides = [
        {img: slider1, title: 'Алена Сухаревская', company: 'Юрент'},
        {img: slider2, title: 'Сергей Денисенко', company: 'ВсеИнструменты.ру'},
        {img: slider3, title: 'Юлия Варламова', company: 'Ситидрайв'},
        {img: slider4, title: 'Юлия Володяева', company: 'Лента Онлайн'},
        {img: slider5, title: 'Михаил Бергген', company: 'СДЭК'},
        {img: slider6, title: 'Ольга Чернявская', company: 'Factory'},
        {img: slider7, title: 'Ольга Шабаева', company: 'Работа.ру '},
        {img: slider10, title: 'Дарья Орешко', company: 'flowwow'},
        {img: slider9, title: 'Елена Винокурцева', company: 'Skyeng'},
        {img: slider8, title: 'Анастасия Баштовая', company: 'Яндекс 360'},
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
                            <Typography variant={'h6'}>
                                {slide.title}
                            </Typography>
                            <span>{slide.company}</span>
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
                    marginTop: {sm: '-1%', xs: '-20%'}
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
