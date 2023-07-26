import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'
// import './assets/font/stylesheet.css'
import 'animate.css';
import './components/team/swiper.css'
import {BrowserRouter} from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>

  </React.StrictMode>,
)
