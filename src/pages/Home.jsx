import emojiBufando from "../assets/emoji-bufando.gif"
import emojiChorando from "../assets/emoji-chorando.gif"
import emojiChorandoMuito from "../assets/emoji-chorando-as-berros.gif"
import emojiRaiva from "../assets/emoji-raiva.gif"

import emojiComemorando from "../assets/emoji-comemoracao.gif"
import emojiContente from "../assets/emoji-contente.gif"
import emojiRostoOculos from "../assets/emoji-rosto-com-oculos.gif"
import emojiRostoMaravilhado from "../assets/emoji-rosto-maravilhado.gif"

import fotoCardapio from "../assets/foto-cadarpio.png"
import graficos from "../assets/graficos.png"
import seta from "../assets/seta-direita.svg"

import rostoSorrinto from "../assets/rosto-feliz.svg"
import cifrao from "../assets/cifrao-icon.svg"
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <>
      <main className='grid pb-8 pt-30 w-full '>
        <section className='px-8 py-6  md:py-7 lg:pt-11'>
          <div className='grid text-center max-w-[1100px] justify-self-center  text-(--primario-700) gap-3.5 lg:gap-9'>
            <h1 className='text-xl font-medium sm:text-2xl md:text-3xl lg:text-4xl'>Transforme a experiência dos seus clientes com a digitalização do seu restaurante!</h1>
            <p className='text-sm sm:text-lg lg:text-2xl'>Ganhe tempo, corte despesas, aumente suas vendas e ofereça uma experiência superior aos seus clientes com cardápios digitais e análises exclusivas.</p>
          </div>
        </section>

        <section className='grid px-8 py-5 '>
          <div className='grid justify-self-center max-w-[1200px]'>
            <h2 className='titulo-section text-(--secundario-500)'>Problemas comuns que você pode estar enfrentando</h2>

            <div className='grid gap-3 font-serif text-xl pb-10 sm:grid-cols-2 md:text-2xl md:gap-5 lg:text-3xl'>
              <div className='bg-(--secundario-500) text-(--terciario-50) grid gap-2.5 px-3 py-6 rounded-md lg:px-6 lg:py-9'>
                <img className='w-12 lg:w-16' src={emojiChorando} alt="" />
                <p>É difícil saber quais pratos são mais populares para planejar promoções?</p>
              </div>

              <div className='bg-(--secundario-500) text-(--terciario-50) grid gap-2.5 px-3 py-6 rounded-md lg:px-6 lg:py-9'>
              <img className='w-12 lg:w-16' src={emojiBufando} alt="" />
              <p>Dificuldade em organizar os pedidos dos seus clientes?</p>
              </div>

              <div className='bg-(--secundario-500) text-(--terciario-50) grid gap-2.5 px-3 py-6 rounded-md lg:px-6 lg:py-9'>
              <img className='w-12 lg:w-16' src={emojiChorandoMuito} alt="" />
              <p>Impressão de cardápios consome tempo e dinheiro?</p>
              </div>

              <div className='bg-(--secundario-500) text-(--terciario-50) grid gap-2.5 px-3 py-6 rounded-md lg:px-6 lg:py-9'>
              <img className='w-12 lg:w-16' src={emojiRaiva} alt="" />
              <p>Não consegue medir o impacto de mudanças no cardápio?</p>
              </div>
            </div>
          </div>
        </section>

        <section className=' px-8 py-5'>
          <div className='grid justify-self-center max-w-[1200px]'>
            <h2 className='titulo-section text-(--primario-700)'>Sabemos o que você enfrenta e estamos prontos para te apoiar</h2>

            <div className='grid gap-3 font-serif text-xl pb-10 sm:grid-cols-2 md:text-2xl md:gap-5 lg:text-3xl'>
              <div className='bg-(--primario-700) text-(--terciario-50) grid gap-2.5 px-3 py-6 rounded-md lg:px-6 lg:py-9'>
                <img className='w-12 lg:w-16' src={emojiRostoMaravilhado} alt="" />
                <p>Centralize todos os pedidos no seu WhatsApp ou painel de gestão</p>
              </div>

              <div className='bg-(--primario-700) text-(--terciario-50) grid gap-2.5 px-3 py-6 rounded-md lg:px-6 lg:py-9'>
              <img className='w-12 lg:w-16' src={emojiContente} alt="" />
              <p>Acompanhe métricas de acessos e preferências e saiba o que está funcionando</p>
              </div>

              <div className='bg-(--primario-700) text-(--terciario-50) grid gap-2.5 px-3 py-6 rounded-md lg:px-6 lg:py-9'>
              <img className='w-12 lg:w-16' src={emojiComemorando} alt="" />
              <p>Diga adeus aos gastos com papel! Digitalize seu cardápio e faça atualização</p>
              </div>

              <div className='bg-(--primario-700) text-(--terciario-50) grid gap-2.5 px-3 py-6 rounded-md lg:px-6 lg:py-9'>
              <img className='w-12 lg:w-16' src={emojiRostoOculos} alt="" />
              <p>Organiza seu cardápio de forma simples e intuitiva, melhorando a experiência do cliente</p>
              </div>
            </div>
          </div>
        </section>

        <section className=' px-8 py-5'>
          <div className='grid justify-self-center max-w-[1200px]'>
            <h2 className='titulo-section text-(--primario-700)'>O melhor para seu restaurante, tudo em um só lugar!</h2>

            <div className='grid gap-7 md:grid-cols-2 md:pb-10'>
              <div className='bg-(--terciario-50) px-4 py-3 rounded-lg grid gap-2'>
                <div className='block m-0'>
                  <img className='w-full' src={fotoCardapio} alt="" />
                </div>
                <h3 className='text-xl font-sans font-medium text-(--primario-800) sm:text-2xl'>Cardápio digital sempre atualizado</h3>
                <p className='text-(--primario-800) font-serif text-lg sm:text-xl'>Menu interativo para o cliente visualizar e pedir  diretamente do celular</p>
                <div className='flex gap-2.5 hover:gap-5 hover:transition duration-300 ease-initial max-w-max'>
                  <NavLink to='/cadastro' className='font-sans font-medium text-(--secundario-800) transition duration-700 ease-in-out sm:text-xl' >Ver Mais</NavLink>
                  <img src={seta} alt="seta" />
                </div>
              </div>
              
              <div className='bg-(--terciario-50) px-4 py-3 rounded-lg grid gap-2'>
                <div className='block m-0'>
                  <img className='w-full md:py-10' src={graficos} alt="" />
                </div>
                <h3 className='text-xl font-sans font-medium text-(--primario-800) sm:text-2xl'>Entenda as preferências dos seus clientes com precisão</h3>
                <p className='text-(--primario-800) font-serif text-lg sm:text-xl'>Descubra quais pratos são mais visualizados e tome decisões estratégicas com base em dados reais.</p>
                <div className='flex gap-2.5 hover:gap-5 hover:transition duration-300 ease-initial max-w-max'>
                <NavLink to='/cadastro' className='font-sans font-medium text-(--secundario-800) transition duration-700 ease-in-out sm:text-xl' >Ver Mais</NavLink>
                  <img src={seta} alt="seta" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='bg-(--primario-900) px-8 py-12 rounded-xl lg:py-16'> 
          <div className='grid justify-self-center gap-6 max-w-[1200px] lg:gap-12'>
            <h2 className='text-(--primario-50) text-2xl text-center md:text-3xl lg:text-4xl' >Com o nosso cardápio digital e o nosso sistema você pode...</h2>
            <div className='grid gap-5 md:grid-cols-2 text-(--primario-50) md:text-xl lg:text-2xl'>
              <div className='bg-(--primario-700) py-4 px-3.5 grid gap-3 rounded-3xl lg:py-10 lg:px-6'>
                <img className='md:w-18' src={rostoSorrinto} alt="rosto contente" />
                <p className=''>Conecte-se com seus clientes de forma interativa</p>
              </div>

              <div className='bg-(--primario-700) py-4 px-3.5 grid gap-3 rounded-3xl lg:py-10 lg:px-6'>
                <img className='md:w-18' src={cifrao} alt="cifrao" />
                <p className=''>Automatize processos para agilizar e organizar o seu serviço</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
