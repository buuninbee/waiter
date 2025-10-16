import React from 'react'

import feito from "../assets/feito.svg"
import mulherLendoConteudo from "../assets/mulher-lendo-qrcode.svg"
import ideaQrcode from "../assets/idea-qrcode.svg"
import prato from "../assets/prato-qrcode.svg"


const qrCode = () => {
  return (
    <main>
      <section className='px-8 py-6 justify-self-center max-w-[1200px] md:py-7 lg:pt-11'>
        <div className='grid text-center max-w-[1100px] justify-self-center  text-[var(--primario-700)] gap-3.5 lg:gap-9'>
          <h1 className='text-xl font-medium sm:text-2xl md:text-3xl lg:text-4xl'>Cardápio digital via QR Code: mais praticidade no seu atendimento</h1>
          <p className='text-sm sm:text-lg lg:text-2xl'>Ganhe tempo, corte despesas, aumente suas vendas e ofereça uma experiência superior aos seus clientes com cardápios digitais e análises exclusivas.</p>
        </div>
      </section>

      <section className='px-8 pb-10 justify-self-center max-w-[1200px]'>
        <div className='bg-[var(--primario-700)] text-[var(--terciario-50)] rounded-xl grid px-8 py-6 gap-5'>
          <h2 className='text-xl font-bold font-serif text-center sm:text-2xl md:text-3xl lg:text-4xl'>Não se trata de um PDF! É uma solução de autoatendimento</h2>
          <div className='grid gap-5 md:grid-cols-2 md:gap-4'>
            <ul className='grid gap-4 text-sm sm:text-xl lg:text-2xl md:col-start-2'>
              <li className='flex gap-2 items-center lg:items-end'>
                <img className='sm:w-12' src={feito} alt="" />
                <p>Autonomia para o cliente fazer o pedido no tempo dele</p>
              </li>

              <li className='flex gap-2 items-center'>
                <img className='sm:w-12' src={feito} alt="" />
                <p>Pedidos enviados diretamente para cozinha e bar</p>
              </li>

              <li className='flex gap-2 items-center lg:items-start'>
                <img className='sm:w-12' src={feito} alt="" />
                <p>O cliente escolhe, personaliza e pede quando quiser</p>
              </li>
            </ul>

            <div className='w-full md:col-start-1 md:row-start-1'>
              <img className='rounded-2xl w-full' src={mulherLendoConteudo} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className='px-8 pb-6 justify-self-center max-w-[1200px] lg:pb-10'>
        <div className='grid'>
        <h2 className='titulo-section text-[var(--primario-700)] pb-5 md:pb-7'>Invista no Cardápio Digital em QR-Code hoje mesmo se você quer</h2>

        <ul className=' grid gap-3'>
          <li className='bg-[var(--secundario-200)] text-[var(--secundario-900)] grid gap-1.5  py-4 px-5 rounded-xl sm:py-5 sm:px-4'>
            <img className='w-10 pb-1 sm:w-12' src={ideaQrcode} alt="" />
            <div className='grid gap-1.5'>
                <h3 className='font-bold text-lg sm:text-2xl md:text-3xl'>Atender de uma forma diferente</h3>
                <p className='sm:text-xl lg:text-2xl'>Seus clientes ficam mais à vontade para fazer pedidos sem esperar pelo garçom</p>
            </div>

          </li>
            <li className='bg-[var(--primario-700)] text-[var(--primario-100)] grid gap-1.5  py-4 px-5 rounded-xl sm:py-5 sm:px-4'>
            <img className='w-10 pb-1 sm:w-12' src={prato} alt="" />
            <div className='grid gap-1.5'>
                <h3 className='font-bold text-lg sm:text-2xl md:text-3xl'>Otimizar a operação do seu restaurante</h3>
                <p className='sm:text-xl lg:text-2xl'>Os pedidos vão diretamente para a cozinha, e os garçons ficam livres para dar atenção aos clientes</p>
            </div>
          </li>
        </ul>
        </div>
      </section>
    </main>
  )
}

export default qrCode