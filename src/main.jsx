import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import CardapioDigital from "./pages/CardapioDigital.jsx"
import QrCode from "./pages/QrCode.jsx"
import Login from './pages/login/Login.jsx'
import Cadastro from './pages/login/Cadastro.jsx'
import Home from './pages/Home.jsx'

import LayoutForm from './pages/login/LayoutForm.jsx'
import Pedidos from './pages/adm/Pedidos'

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

        <Route element={<Pedidos/>}>
          <Route path='/adm/pedidos' element={<Pedidos/>}/>
        </Route>
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
