import Nav from './componentes/Nav'
import './index.css'

import emojiBufando from "./assets/emoji-bufando.gif"
import emojiChorando from "./assets/emoji-chorando.gif"
import emojiChorandoMuito from "./assets/emoji-chorando-as-berros.gif"
import emojiRaiva from "./assets/emoji-raiva.gif"

import emojiComemorando from "./assets/emoji-comemoracao.gif"
import emojiContente from "./assets/emoji-contente.gif"
import emojiRostoOculos from "./assets/emoji-rosto-com-oculos.gif"
import emojiRostoMaravilhado from "./assets/emoji-rosto-maravilhado.gif"

import fotoCardapio from "./assets/foto-cadarpio.png"
import graficos from "./assets/graficos.png"

import seta from "./assets/seta-direita.svg"



function App() {

  return (
    <>
    <Nav/>
    <main className='grid justify-center px-8 py-5'>
      <section className='pb-6'>
        <div className='grid text-center text-[var(--primario-700)] gap-3.5'>
          <h1 className='text-2xl font-medium '>Transforme a experiência dos seus clientes com a digitalização do seu restaurante!</h1>
          <p className='text-sm'>Ganhe tempo, corte despesas, aumente suas vendas e ofereça uma experiência superior aos seus clientes com cardápios digitais e análises exclusivas.</p>
        </div>
      </section>

      <section>
        <h2 className='text-xl text-[var(--secundario-500)] text-center font-semibold pb-6'>Problemas comuns que pode estar enfrentando</h2>

        <div className='grid gap-3 font-serif text-xl pb-10'>
          <div className='bg-[var(--secundario-500)] text-[var(--terciario-50)] grid gap-2.5 px-3 py-6 rounded-md'>
            <img className='w-12' src={emojiChorando} alt="" />
            <p>É difícil saber quais pratos são mais populares para planejar promoções?</p>
          </div>

          <div className='bg-[var(--secundario-500)] text-[var(--terciario-50)] grid gap-2.5 px-3 py-6 rounded-md'>
          <img className='w-12' src={emojiBufando} alt="" />
          <p>Dificuldade em organizar os pedidos dos seus clientes?</p>
          </div>

          <div className='bg-[var(--secundario-500)] text-[var(--terciario-50)] grid gap-2.5 px-3 py-6 rounded-md'>
          <img className='w-12' src={emojiChorandoMuito} alt="" />
          <p>Impressão de cardápios consome tempo e dinheiro?</p>
          </div>

          <div className='bg-[var(--secundario-500)] text-[var(--terciario-50)] grid gap-2.5 px-3 py-6 rounded-md'>
          <img className='w-12' src={emojiRaiva} alt="" />
          <p>Não consegue medir o impacto de mudanças no cardápio?</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className='text-xl text-[var(--primario-700)] text-center font-semibold pb-6'>Sabemos o que você enfrenta e estamos prontos para te apoiar</h2>

        <div className='grid gap-3 font-serif text-xl pb-10'>
          <div className='bg-[var(--primario-700)] text-[var(--terciario-50)] grid gap-2.5 px-3 py-6 rounded-md'>
            <img className='w-12' src={emojiRostoMaravilhado} alt="" />
            <p>Centralize todos os pedidos no seu WhatsApp ou painel de gestão</p>
          </div>

          <div className='bg-[var(--primario-700)] text-[var(--terciario-50)] grid gap-2.5 px-3 py-6 rounded-md'>
          <img className='w-12' src={emojiContente} alt="" />
          <p>Acompanhe métricas de acessos e preferências e saiba o que está funcionando</p>
          </div>

          <div className='bg-[var(--primario-700)] text-[var(--terciario-50)] grid gap-2.5 px-3 py-6 rounded-md'>
          <img className='w-12' src={emojiComemorando} alt="" />
          <p>Diga adeus aos gastos com papel! Digitalize seu cardápio e faça atualização</p>
          </div>

          <div className='bg-[var(--primario-700)] text-[var(--terciario-50)] grid gap-2.5 px-3 py-6 rounded-md'>
          <img className='w-12' src={emojiRostoOculos} alt="" />
          <p>Organiza seu cardápio de forma simples e intuitiva, melhorando a experiência do cliente</p>
          </div>
        </div>
      </section>

      <section>
      <h2 className='text-xl text-[var(--primario-700)] text-center font-semibold pb-6 sm:text-2xl'>O melhor para seu restaurante, tudo em um só lugar!</h2>

      <div>
        <div className='bg-[var(--terciario-50)] px-4 py-3 rounded-lg grid gap-2'>
          <div className='block m-0'>
            <img className='w-full' src={fotoCardapio} alt="" />
          </div>
          <h3 className='text-xl font-sans font-medium text-[var(--primario-800)] sm:text-2xl'>Cardápio digital sempre atualizado</h3>
          <p className='text-[var(--primario-800)] font-serif text-lg sm:text-xl'>Menu interativo para o cliente visualizar e pedir  diretamente do celular</p>
          <div className='flex gap-2.5 hover:gap-5 hover:transition duration-300 ease-initial max-w-max'>
            <span className='font-sans font-medium text-[var(--secundario-800)] transition duration-700 ease-in-out sm:text-xl'>Ver Mais</span>
            <img src={seta} alt="seta" />
          </div>
        </div>
      </div>
      </section>
    </main>
    </>
  )
}

export default App
