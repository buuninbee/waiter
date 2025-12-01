import React from 'react'
import iconSacola from '@/assets/icon-sacola-compra.svg'

function CarrinhoCompra() {
  return (
    <div className='flex items-center gap-4 bg-(--primario-800) text-(--terciario-300) py-4 px-7 rounded-t-lg'>
        <div className='relative'>
            <img src={iconSacola} alt="" />
            <p className='bg-(--terciario-300) text-sm text-(--primario-800) rounded-full px-2 absolute left-4 border border-(--primario-800) bottom-4'>1</p>
        </div>
        <h3>Faça seu pedido</h3>
    </div>
  )
}

export default CarrinhoCompra