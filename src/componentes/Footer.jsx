import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[var(--secundario-700)]'>
      <div className='text-[var(--primario-50)] py-8 px-8 grid justify-self-center gap-6 max-w-[1200px] lg:py-20 xl:px-0'>
        <h3 className='text-2xl md:text-3xl lg:text-4xl'>Junte-se a nós e simplifique a gestão do seu restaurante</h3>

        <div className='font-serif grid gap-2'>
            <h4 className='text-xl font-bold md:text-2xl lg:'>Entre em contato com a gente</h4>
            <div className='grid text-lg'>
                <a href="tel:+5561991920091">(61) 991930091</a>
                <a href="mailto:waiter.suporte@gmail">waiter.suporte@gmail</a>
            </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer