import React from 'react'
import iconSacola from '@/assets/icon-sacola-compra.svg'
import CarrinhoItem from './CarrinhoItem'
import CardapioContext from '@/context/CardapioContext';
import  {useState, useContext} from "react"

import seta from "@/assets/seta.svg"
import Botao from './Botao';

function CarrinhoCompra() {
  const {cartItens} = useContext(CardapioContext)

  const qtdproduto = [...cartItens].length

  const totalPreco = cartItens.reduce((acc, item) => item.preco * acc, 0).toFixed(2)
  const [aberto, setAberto] = useState(false)
  return (
    <div className='bg-(--primario-800) cursor-pointer px-7'>
      <div  onClick={() => setAberto(!aberto)}  className='flex items-center justify-between'>
        <div className='flex items-center gap-4 text-(--terciario-300) py-4 rounded-t-lg'>
          <div className='relative'>
              <img src={iconSacola} alt="" />
              <p className='bg-(--terciario-300) text-sm text-(--primario-800) rounded-full px-2 absolute left-4 border border-(--primario-800) bottom-4'>{qtdproduto}</p>
          </div>
          <h3>Faça seu pedido</h3>
         </div>
         <div>
         <img
            className={`
              bg-(--terciario-100) 
              w-7 
              rounded-sm 
              py-1.5 
              px-1
              transition-transform 
              duration-300
              ${aberto ? "rotate-180" : "rotate-0"}
            `}
            src={seta}
            alt="Seta"
          />

         </div>
      </div>
    <div className={aberto ? "grid" : "hidden"}>
        <CarrinhoItem/>

        <div>
          <div className='flex text-(--terciario-50) justify-between py-4'>
            <p>Resumo do carrinho</p>
            <span>R$ {totalPreco}</span>
          </div>
           <button className='bg-(--terciario-100) w-full text-(--primario-700) border border-(--primario700) hover:bg-(--terciario-200) hover:text-(--primario-500) py-2 px-4 text-lg rounded-sm md:text-xl'>Adicionar a comando</button>
        </div>
    </div>
    </div>
  )
}

export default CarrinhoCompra