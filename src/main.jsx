import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from './componentes/Nav.jsx'
import Footer from './componentes/Footer.jsx'

import CardapioDigital from "../src/pages/cardapioDigital.jsx"
import QrCode from "../src/pages/qrCode.jsx"
import Login from './login/Login.jsx'
import Cadastro from './login/Cadastro.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Nav/>
        <Routes>
        <Route path='/'  element={<App />}/>
          <Route path='/cardapioDigital' element={<CardapioDigital/>}/>
          <Route path='/qrCode' element={<QrCode/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cadastro' element={<Cadastro/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
