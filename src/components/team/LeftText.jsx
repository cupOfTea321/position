import React from 'react';
import {Box, Typography} from "@mui/material";
import {personParagraph} from "../../mui/utilsCSS.js";

const LeftText = ({sx}) => {
    return (
        <Box sx={sx} className={'animate__animated  animate__fadeInLeft'}>
            <Typography component={'p'} variant={'raleway'} sx={personParagraph}>
                Я искреннее верю, что пиарщик должен быть своего рода "расходным материалом". Будем честны, нормального пиарщика найти попроще чем генерального директора или сооснователя компании.
            </Typography>
            <Typography component={'p'} variant={'raleway'} sx={personParagraph}>
                Если вдруг вы оказались в ситуации, когда в прессе должно выйти что-то, в связи с чем у компании могут быть проблемы, там должно быть ваше имя. Не имя гендира или топов, не вот это ссыкливое «пресс-служба компании», не надо за них прятаться.   Если мы работаем с людьми, которых любим, уважаем и гордимся работой с ними, мы  — одна стая. И конечно, никто не имеет права мою стаю трогать. Нападайте на меня, но не трогайте мой бренд и моих людей.
            </Typography>
        </Box>
    );
};

export default LeftText;
