import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import CardapioDigital from "../src/pages/cardapioDigital.jsx"
import QrCode from "../src/pages/qrCode.jsx"
import Login from './login/Login.jsx'
import Cadastro from './login/Cadastro.jsx'
import Home from './pages/Home.jsx'

import LayoutForm from './login/LayoutForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
        <Route element={<App />}>
            <Route path='/' element={<Home/>}/>
            <Route path='cardapioDigital' element={<CardapioDigital/>}/>
            <Route path='qrCode' element={<QrCode/>}/>
        </Route>  

          <Route element={<LayoutForm/>} >
            <Route path='/login' element={<Login/>}/>
            <Route path='/cadastro' element={<Cadastro/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
