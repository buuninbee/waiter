import React from 'react'
import fecharIcon from "@/assets/icon-fechar.svg"
import Contador from "@/componentes/Contador"
import { useContext } from 'react';
import CardapioContext from '@/context/CardapioContext';

const CarrinhoItem = () => {
    const { cartItens, setCartItens } = useContext(CardapioContext);
  
    function alterarQtd(id, novaQtd) {
      setCartItens(prev =>
        prev.map(item =>
          item.id === id ? { ...item, quantidade: novaQtd } : item
        )
      );
    }
  
    return (
      <div>
        <div className='grid gap-4 h-80 overflow-y-auto overscroll-contain overflow-hidden text-(--terciario-200)'>
          {cartItens.map((item) => {
            return (
              <div
                key={item.id}
                className='grid gap-2 max-h-[180px] border border-amber-50 rounded-xl py-2 px-3.5'
              >
                <div className='flex h-auto justify-between gap-2 text-(--terciario-200)'>
                  <div className='grid grid-cols-1 gap-1'>
                    <p className='text-sm text-(--terciario-700)'>{item.categoria}</p>
                    <h2 className='text-2xl'>{item.titulo}</h2>
                  </div>
  
                  <button
                    onClick={() => {
                      setCartItens(prev => prev.filter(i => i.id !== item.id));
                    }}
                    className='bg-(--secundario-200) self-start py-1.5 px-3 rounded-lg'
                  >
                    <img className='w-3 h-3' src={fecharIcon} alt="" />
                  </button>
                </div>
  
                <div className='flex items-center justify-between'>
                  <Contador
                    value={item.qtd}
                    onChange={(value) => alterarQtd(item.id, value)}
                    className="max-w-max"
                  />
  
                  <span className='text-xl'>
                    R$ {(item.preco * item.quantidade).toFixed(2)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  

export default CarrinhoItem