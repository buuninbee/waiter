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
import LayoutAdm from './pages/adm/LayoutAdm'
import Cardapio from './pages/adm/Cardapio'
import NovoPedidos from './pages/adm/NovoPedidos'
import CardapioTemplate from './pages/CardapioTemplate'
import DashboardProdutos from './pages/adm/DashbordProdutos'
import Provider from './context/Provider'
import CadastrarProduto from '@/pages/adm/CadastrarProduto'
import OrdemServico from '@/pages/adm/OrdemServico'
import ModoGarcom from './pages/ModoGarcom'
import CadastrarUsuario from './pages/adm/CadastrarUsuarios'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
          <Routes>
          <Route element={<App />}>
              <Route path='/' element={<Home/>}/>
              <Route path='cardapioDigital' element={<CardapioDigital/>}/>
              <Route path='qrCode' element={<QrCode/>}/>
          </Route>  

            <Route element={<LayoutForm/>} >
              <Route path='login' element={<Login/>}/>
              <Route path='cadastro' element={<Cadastro/>}/>
            </Route>

            <Route element={<LayoutAdm/>}>
              <Route path='adm/pedidos' element={<Pedidos/>}/>
              <Route path='adm/novo-pedido' element={<NovoPedidos/>}/>
              <Route path='adm/cardapio' element={<Cardapio/>}/>
              <Route path='adm/dashboard-produtos' element={<DashboardProdutos/>}/>
              <Route path='adm/cadastrar-produtos' element={<CadastrarProduto/>}/>
              <Route path='adm/cadastrar-usuario' element={<CadastrarUsuario/>}/>
              <Route path='adm/ordem-servico' element={<OrdemServico />}/>
            </Route>
              <Route path='/cardapio-template' element={<CardapioTemplate/>}/>
              <Route path='/modo-garcom' element={<ModoGarcom/>}/>
          </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
