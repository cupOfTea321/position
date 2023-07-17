import {Box, Typography} from "@mui/material";
import phone6 from './assets/phone1.svg'
import speaker from './assets/speakerPhone.svg'
function App() {
    const titleCSS = {
        fontSize: {md: '140px', sm: '80px'},
        fontWeight: 500,
        lineHeight: '184.1px',
    }
  return (
    <Box sx={{background: 'black'}}>
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
            <Typography sx={{...titleCSS, color: 'white', zIndex: 200,}}>ГОВОРИТЬ </Typography>
            <Typography sx={{...titleCSS,
                rotate: '-10deg',
                color: 'rgba(231, 69, 54, 1)',
                marginTop: '-50px',
                zIndex: 200,
                marginLeft: '350px',
                textShadow: '0px 1px 0 rgb(255,255,255),0px -1px 0 rgb(255,255,255),1px 0px 0 rgb(255,255,255),-1px 0px 0 rgb(255,255,255),1px 1px 0 rgb(255,255,255),1px -1px 0 rgb(255,255,255),-1px 1px 0 rgb(255,255,255),-1px -1px 0 rgb(255,255,255),0px 2px 0 rgb(255,255,255),0px -2px 0 rgb(255,255,255),2px 0px 0 rgb(255,255,255),-2px 0px 0 rgb(255,255,255),2px 2px 0 rgb(255,255,255),2px -2px 0 rgb(255,255,255),-2px 2px 0 rgb(255,255,255),-2px -2px 0 rgb(255,255,255),0px 3px 0 rgb(255,255,255),0px -3px 0 rgb(255,255,255),3px 0px 0 rgb(255,255,255),-3px 0px 0 rgb(255,255,255),3px 3px 0 rgb(255,255,255),3px -3px 0 rgb(255,255,255),-3px 3px 0 rgb(255,255,255),-3px -3px 0 rgb(255,255,255),0px 4px 0 rgb(255,255,255),0px -4px 0 rgb(255,255,255),4px 0px 0 rgb(255,255,255),-4px 0px 0 rgb(255,255,255),4px 4px 0 rgb(255,255,255),4px -4px 0 rgb(255,255,255),-4px 4px 0 rgb(255,255,255),-4px -4px 0 rgb(255,255,255),0px 5px 0 rgb(255,255,255),0px -5px 0 rgb(255,255,255),5px 0px 0 rgb(255,255,255),-5px 0px 0 rgb(255,255,255),5px 5px 0 rgb(255,255,255),5px -5px 0 rgb(255,255,255),-5px 5px 0 rgb(255,255,255),-5px -5px 0 rgb(255,255,255)'
            }}>ГРОМКО</Typography>
            <Box sx={{
                color: 'rgba(231, 69, 54, 1)',
                fontSize: '100px',
                lineHeight: '131.5px',
                background: 'white',
                padding: '7px 29px',
                position: 'absolute',
                bottom: '100px',
                cursor: 'pointer',
                zIndex: 200
            }}>
                ПОЗИЦИЯ
            </Box>
            <Typography sx={{
                position: 'absolute',
                bottom: '30px',
                color: 'white',
                fontSize: '30px',
                textShadow: '10px 20px 200px white, 0 0 1em grey, 0 0 0.2em grey',
            }}>
                Партия адекватных пиарщиков!
            </Typography>
        </Box>
        <Box component={'img'} src={speaker} sx={{
            position: 'absolute',
            // bottom: {xl: '-15%', lg: 0},
            // top: 0,
            // bottom: 0,
            width: {xl: '100vw', lg: '120vw', md: '140vw', sm: '200vw', xs: '300vw'},
            height: {xl: '120vh', lg: '120vh', md: '120vh', sm: '120vh', xs: '120vh'},
            left: {lg: 0, md: '-10%', sm: '-50%', xs: '-100%'},
            zIndex: 100,
        }}/>
    </Box>
  )
}

export default App
