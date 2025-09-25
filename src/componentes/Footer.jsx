import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[var(--secundario-700)] text-[var(--primario-50)] py-8 px-5 grid gap-6'>
        <h3 className='text-2xl'>Junte-se a nós e simplifique a gestão do seu restaurante</h3>

        <div className='font-serif grid gap-2'>
            <h4 className='text-xl font-bold'>Entre em contato com a gente</h4>
            <div className='grid text-lg'>
                <a href="tel:+5561991920091">(61) 991930091</a>
                <a href="mailto:waiter.suporte@gmail">waiter.suporte@gmail</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer