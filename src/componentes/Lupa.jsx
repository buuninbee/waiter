import React from 'react'
import IconLupa from "@/assets/lupa.svg"
import fetchProdutos from '@/api/fetchProdutos'

const Lupa = ({placeholder}) => {

  const [handlevalue, setHandleValue] = React.useState('')

  const handleSearch = async (event) => {
    event.preventDefault()

    const produto = await fetchProdutos(handlevalue)
    setHandleValue(produto)
    setHandleValue()

  }
  return (
    <form className='flex gap-2 px-2 py-1.5  items-center border rounded-lg'>
        <img className='' src={IconLupa} alt="" />
        <input className='bg-[--terciario-400] w-full text-base appearance-none focus:outline-0' type="search" 
        value={handlevalue} 
        placeholder={placeholder}
        onChange={({target}) => setHandleValue(target.value)}
        name="" id=""/>
    </form>
  )
}

export default Lupa