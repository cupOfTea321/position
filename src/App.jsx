import {Box} from "@mui/material";
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
import Centre2 from "./components/slide2/Centre2.jsx";
import Centre3 from "./components/slide3/Centre3.jsx";
import SlideTitle3 from "./components/slide3/SlideTitle3.jsx";
import Slide3 from "./slides/Slide3.jsx";
import SlideTitle4 from "./components/slide4/SlideTitle4.jsx";
import Slide4 from "./slides/Slide4";
import {Route, Routes} from "react-router-dom";
import SliderPage from "./pages/SliderPage.jsx";
import TeamPage from "./pages/TeamPage.jsx";
import Layout from "./components/layout/Layout.jsx";

function App() {

  return (
      <>
          <Routes>
              <Route element={<Layout />} path={'/'}>
                  <Route element={<SliderPage />} path={''}/>
                  <Route element={<TeamPage />} path={'team'}/>
              </Route>

          </Routes>

      </>

  )
}

export default App
