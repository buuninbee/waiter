import React from 'react'
import CardapioContext from './CardapioContext'
import { useState } from 'react'

const Provider = ({children}) => {
    const [produtos, setProdutos] = useState('')
    const [loadiang, setLoading] = useState(true)
    const [cartItens, setCartItens] = useState([])

  const precos = cartItens.map((produto) => produto.preco * produto.quantidade)
  const totalPreco = precos.reduce((acc, item) => (item + acc), 0).toFixed(2)


    const value = {produtos, setProdutos, setLoading, loadiang, cartItens, setCartItens, totalPreco}
  return (
    <CardapioContext.Provider value={value} >
        {children}
    </CardapioContext.Provider>
  )
}

export default Provider