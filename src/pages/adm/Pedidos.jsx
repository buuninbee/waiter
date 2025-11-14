import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

import Lupa from "../../assets/lupa.svg"
import OrdemLista from '@/componentes/OrdemLista';

const data = [
  { value: 20, color: "var(--secundario-600)" },
  { value: 50, color: "#DDBF1A" },
  { value: 40, color: "var(--primario-600)" },
];

const Pedidos = () => {
  return (
    <main className="grid pb-8 w-full md:pl-10 md:pb-0">
        <section className="grid gap-5 px-8 py-6 md:py-7 lg:pt-11">
            <p className="text-(--primario-800) text-2xl">Meus Pedidos</p>
            <div className='flex gap-2 px-2 py-1.5  items-center border rounded-lg'>
              <img className='' src={Lupa} alt="" />
              <input className='bg-[--terciario-400] w-full text-base appearance-none focus:outline-0' type="text" placeholder='Digite o número do seu pedido' name="" id="" />
            </div>
            {/* lista com os pedidos e seus status */}
            <OrdemLista />
        </section>

        <section className="px-8 py-6 md:py-0 lg:pt-11">
          <div className='grid gap-2'>
            <h2 className='text-(--primario-800) text-xl'>Visão dos estados dos pedidos</h2>
            <div className='grid gap-2.5 md:grid-cols-2 '>
              <div className='h-44'>
                <PieChart 
                    series={[
                      {
                        startAngle: -90,
                        endAngle: 90,
                        data,
                      },
                    ]}
                    height={300}
                    width={300}
                />
              </div>

              <div className='grid gap-2.5 mb-11 md:mb-0'>
                <p className='self-end'>Quantidade de pedidos por status: </p>
                <div className='flex flex-wrap gap-3 text-lg'>
                    {
                      data.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div 
                            className="w-8 h-8 rounded-sm" 
                            style={{ backgroundColor: item.color }}
                          ></div>
                          <span>{item.value}</span>
                        </div>
                      ))
                    }
                </div>
              </div>
            </div>
          </div>
        </section>

        
    </main>
  )
}

export default Pedidos