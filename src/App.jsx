import {Box, createTheme, ThemeProvider} from "@mui/material";
import phone6 from './assets/slide1/phone1.png'
import React, {useState} from "react";
import ScrollLock from "./components/layout/ScrollLock.jsx";
import Slide1 from "./slides/Slide1.jsx";
import PositionButton1 from "./components/ui/PositionButton1.jsx";
import Slide2 from "./slides/Slide2.jsx";
import SlideTitle1 from "./components/slide1/SlideTitle1.jsx";
import SlideTitle2 from "./components/slide2/SlideTitle2.jsx";
import SlideTextBlack from "./components/ui/SlideTextBlack.jsx";
import SlideTextWhite from "./components/ui/SlideTextWhite.jsx";
import Centre2 from "./components/slide2/Centre2.jsx";
import Centre3 from "./components/slide3/Centre3.jsx";
import SlideTitle3 from "./components/slide3/SlideTitle3.jsx";
import Slide3 from "./slides/Slide3.jsx";
import SlideTitle4 from "./components/slide4/SlideTitle4.jsx";
import Slide4 from "./slides/Slide4";
import {Navigate, Route, Routes} from "react-router-dom";
import SliderPage from "./pages/SliderPage.jsx";
import TeamPage from "./pages/TeamPage.jsx";
import Layout from "./components/layout/Layout.jsx";
import PersonPage from "./pages/PersonPage.jsx";

export const breakpoints = {
    values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        desktop: 1400,
        xl: 1536
    },
}
const themeSettings = {
    breakpoints,
}

export const theme = createTheme(themeSettings)

function App() {

  return (
      <>
          <ThemeProvider theme={theme}>
              <Routes>
                  <Route element={<Layout />} path={'/'}>
                      <Route element={<SliderPage />} path={''}/>
                      <Route element={<TeamPage />} path={'pr'}/>
                      <Route element={<PersonPage />} path={'person/:id'}/>

                      <Route path="/*" element={<Navigate to="" replace/> }/>
                  </Route>

              </Routes>
          </ThemeProvider>


      </>

  )
}

export default App
