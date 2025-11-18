import React from 'react'

const Contador = () => {

 const [cont, setCont] = React.useState(1);


  return (
    <div className="flex items-center rounded-sm border border-gray-200">
        <button onClick={() => cont > 1 && setCont(cont - 1)} min='1' type="button" className="size-10 leading-10 text-gray-600 transition hover:opacity-75">
        −
        </button>

        <input type="number" id="Quantity" value={cont} className="h-10 w-16 border-transparent text-center [-moz-appearance:textfield] sm:text-sm [&amp;::-webkit-inner-spin-button]:m-0 [&amp;::-webkit-inner-spin-button]:appearance-none [&amp;::-webkit-outer-spin-button]:m-0 [&amp;::-webkit-outer-spin-button]:appearance-none"/>

        <button onClick={() => setCont(cont + 1)}  type="button" className="size-10 leading-10 text-gray-600 transition hover:opacity-75">
        +
        </button>
    </div>
  )
}

export default Contador