import React from 'react'
import IconLupa from "@/assets/lupa.svg"
import fetchProdutos from '@/api/fetchProdutos'
import { useContext } from 'react'
import CardapioContext from '@/context/CardapioContext'

const Lupa = ({placeholder}) => {

  const { setLoading , setProdutos} = useContext(CardapioContext)
  const [valorBusca, setValorBusca] = React.useState('')

  const PesquisaProdutos = async (event) => {
    event.preventDefault()
    setLoading(true)

    const produto = await fetchProdutos(valorBusca)
    setProdutos(produto)
    setLoading(false)
    setValorBusca()
  }
  // colocar o PesquisarProdutos no onsubmit
  return (
    <form className='flex gap-2 px-2 py-1.5  items-center border rounded-lg'>
        <img className='' src={IconLupa} alt="" />
        <input className='bg-[--terciario-400] w-full text-base appearance-none focus:outline-0' type="search" 
        value={valorBusca} 
        placeholder={placeholder}
        onChange={({target}) => setValorBusca(target.value)}
        name="" id=""/>
    </form>
  )
}

export default Lupa