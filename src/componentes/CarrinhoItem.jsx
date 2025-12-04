import React from 'react'
import Contador from '@/componentes/Contador'

import { useContext } from 'react';
import CardapioContext from '@/context/CardapioContext';

const CarrinhoItem = () => {
    const {cartItens} = useContext(CardapioContext)
  const [qtd, setQtd] = React.useState(1);
  const total = qtd * cartItens.preco;
  console.log(total)

  console.log(cartItens)
  return (
    <div>
        <div className='grid gap-4 h-80 overflow-y-auto overscroll-contain overflow-hidden text-(--terciario-200)'>
        {
            cartItens.map((item) => {
                return(
                    <div key={item.id} className='grid gap-2 max-h-[180px] border border-amber-50 rounded-xl py-2 px-3.5'>
                        <div className='flex justify-between gap-2 text-(--terciario-200)'>
                            <div>
                            <p className='text-sm text-(--terciario-700)'>{item.categoria}</p>
                            <h2 className='text-2xl'>{item.titulo}</h2>
                            </div>
                            <button className='bg-(--secundario-800) self-start text-(--secundario-200) py-1.5 px-3 rounded-lg'>X</button>
                        </div>
                        <div className='flex items-center justify-between'>
                            <Contador onChange={(value) => setQtd(value)} className="max-w-max" />
                            <span className='text-xl'>R$ {(item.preco * qtd).toFixed(2)}</span>
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