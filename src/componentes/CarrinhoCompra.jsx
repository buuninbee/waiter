import React from 'react'
import iconSacola from '@/assets/icon-sacola-compra.svg'
import CarrinhoItem from './CarrinhoItem'
import CardapioContext from '@/context/CardapioContext';
import  {useState, useContext} from "react"

import seta from "@/assets/seta.svg"
import DialogoWhatsApp from './DialogoWhatsApp';

function CarrinhoCompra() {
  const {cartItens, totalPreco} = useContext(CardapioContext)


  const [aberto, setAberto] = useState(false)

  return (
    <div className='bg-(--primario-800) cursor-pointer px-7'>
      <div  onClick={() => setAberto(!aberto)}  className='flex items-center justify-between'>
        <div className='flex items-center gap-4 text-(--terciario-300) py-4 rounded-t-lg'>
          <div className='relative'>
              <img src={iconSacola} alt="" />
              <p className='bg-(--terciario-300) text-sm text-(--primario-800) rounded-full px-2 absolute left-4 border border-(--primario-800) bottom-4'>{cartItens.length}</p>
          </div>
          <div className='px-1'>
            <h3>Faça seu pedido</h3>
            <p className='text-[12px]'>Enviaremos seu pedido para o seu WhatsApp</p>
          </div>
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
    <div className={aberto ? "grid" : "hidden "}>
      {
        cartItens.length > 0 ? 
        <>
        <CarrinhoItem/> 
        <div className='pb-8'>
          <div className='flex text-(--terciario-50) justify-between py-4'>
            <p>Resumo do carrinho</p>
            <span>R$ {totalPreco}</span>
          </div>
          <DialogoWhatsApp/>
        </div>
        </>
        : <p className='text-center text-xl pt-4 pb-14 text-(--terciario-200)'>Seu carrinho está vazio, adicione um produto</p>
      }
    </div>
    </div>
  )
}

export default CarrinhoCompra