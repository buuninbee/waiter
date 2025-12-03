import React from 'react'
import CardapioContext from './CardapioContext'
import { useState } from 'react'

const Provider = ({children}) => {
    const [produtos, setProdutos] = useState('')
    const [loadiang, setLoading] = useState(true)
    const [cartItens, setCartItens] = useState([])

    const value = {produtos, setProdutos, setLoading, loadiang, cartItens, setCartItens}
  return (
    <CardapioContext.Provider value={value} >
        {children}
    </CardapioContext.Provider>
  )
}

export default Provider