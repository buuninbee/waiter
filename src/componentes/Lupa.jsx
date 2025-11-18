import React from 'react'
import IconLupa from "@/assets/lupa.svg"

const Lupa = ({placeholder, value}) => {
  return (
    <div className='flex gap-2 px-2 py-1.5  items-center border rounded-lg'>
        <img className='' src={IconLupa} alt="" />
        <input className='bg-[--terciario-400] w-full text-base appearance-none focus:outline-0' type="text" placeholder={placeholder} name="" id="" value={value} />
    </div>
  )
}

export default Lupa