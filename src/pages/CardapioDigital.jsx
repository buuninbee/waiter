import React from 'react'
import { NavLink } from 'react-router-dom'
import QrcodeIcon from '../assets/qrCode-icon.svg'

const CardapioDigital = () =>{
  return (
    <main>
        <section className='px-8 py-6  md:py-7 lg:pt-11'>
        <div className='grid text-center max-w-[1100px] justify-self-center  text-(--primario-700) gap-3.5 md:gap-2 lg:gap-4'>
          <h1 className='text-xl font-medium sm:text-2xl md:text-3xl lg:text-4xl'>Veja como seu cadárpio vai aparecer</h1>
          <p className='text-sm sm:text-lg lg:text-2xl'>Link para compartilhar: acesse o cardápio online web</p>
          <div className='bg-(--primario-800) text-(--terciario-400) max-w-max flex gap-3 py-3 px-3 rounded-md justify-self-center md:mt-2'>
            <img src={QrcodeIcon} alt="" />
            <NavLink className="px-2.5" to="/">
              Ver cardápio web
            </NavLink>
          </div>
        </div>
      </section>

      <section className='px-8 pb-10 justify-self-center max-w-[1200px]'>
        <h2 className='titulo-section text(--primario-700) pb-5 md:pb-7'>Duvida sobre a gente? Temos as repostas</h2>

        <div className="grid gap-1">
          <details className="group [&_summary::-webkit-details-marker]:hidden text-(--terciario-300) bg-(--primario-700) rounded-md hover:cursor-pointer">
            <summary
              className="flex items-center justify-between gap-1.5 border bg-(--primario-800) p-4 text-(--tercioario-300 rounded-md "
            >
              <h2 className="text-sm ">A ferramenta tem suporte?</h2>

              <svg
                className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <p className="px-4 py-4 max-w-[848px]">Sim, contate-nos pelo e-mail card@cardapin.com</p>
          </details>

          <details className="group [&_summary::-webkit-details-marker]:hidden text-(--terciario-300) bg-(--primario-700) rounded-md hover:cursor-pointer">
            <summary
              className="flex items-center justify-between gap-1.5 border bg-(--primario-800) p-4 text-(--tercioario-300) rounded-md "
            >
              <h2 className="text-sm ">Eu poderei adicionar fotos no meu cardápio?</h2>

              <svg
                className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <p className="px-4 py-4 max-w-[848px]">Sim, você pode adicionar todas as fotos de seus produtos, aumentando a taxa de conversão.</p>
          </details>

          <details className="group [&_summary::-webkit-details-marker]:hidden text-(--terciario-300) bg-(--primario-700) rounded-md hover:cursor-pointer">
            <summary
              className="flex items-center justify-between gap-1.5 border bg-(--primario-800) p-4 text-(--tercioario-300) rounded-md "
            >
              <h2 className="text-sm ">Quais são as vantagens do Cardápio Digital?</h2>

              <svg
                className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <p className="px-4 py-4 max-w-[848px]">O Cardápio Digital oferece uma experiência ágil e agradável para os clientes, que podem fazer seus pedidos sem precisar esperar o garçom, reduzindo erros e agilizando o atendimento. Além disso, a interface inteligente do Cardápio Digital sugere itens adicionais de forma estratégica, aumentando o ticket médio e ajudando o restaurante a elevar seu faturamento.</p>
          </details>

          <details className="group [&_summary::-webkit-details-marker]:hidden text-(--terciario-300) bg-(--primario-700) rounded-md hover:cursor-pointer">
            <summary
              className="flex items-center justify-between gap-1.5 border bg-(--primario-800) p-4 text-(--tercioario-300) rounded-md "
            >
              <h2 className="text-sm ">Com o Cardápio Digital, ainda preciso de garçons?</h2>

              <svg
                className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <p className="px-4 py-4 max-w-[848px]">Sim, mas sua equipe dificilmente precisará ser ampliada em dias de mais movimento, por exemplo. O Cardápio Digital automatiza o processo de pedidos, e os garçons se concentram na entrega dos pratos, nos esclarecimentos e sugestões, melhorando o relacionamento com os clientes.</p>
          </details>
        </div>
      </section>
    </main>
  )
}

export default CardapioDigital