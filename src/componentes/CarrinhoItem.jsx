import React from 'react'
import fecharIcon from "@/assets/icon-fechar.svg"

import { useContext } from 'react';
import CardapioContext from '@/context/CardapioContext';

const CarrinhoItem = () => {
  const {cartItens, setCartItens} = useContext(CardapioContext)

  console.log(cartItens)
  return (
    <div>
        <div className='grid gap-4 h-80 overflow-y-auto overscroll-contain overflow-hidden text-(--terciario-200)'>
        {
            cartItens.map((item) => {
                return(
                    <div key={item.id} className='grid gap-2 max-h-[180px] border border-amber-50 rounded-xl py-2 px-3.5'>
                        <div className='flex h-auto justify-between gap-2 text-(--terciario-200)'>
                            <div className='grid grid-cols-1 gap-1'>
                                <p className='text-sm text-(--terciario-700)'>{item.categoria}</p>
                                <h2 className='text-2xl'>{item.titulo}</h2>
                            </div>
                            <button onClick={() => {
                            setCartItens(prev => prev.filter(i => i.id !== item.id));
                            }} className='bg-(--secundario-200) self-start text-(--secundario-200) py-1.5 px-3 rounded-lg'><img className='w-3 h-3' src={fecharIcon} alt="" /></button>
                        </div>
                        <div className='flex items-center justify-between'>
                            <span className='text-xl'>R$ {item.preco.toFixed(2)}</span>
                        </div>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default CarrinhoItem