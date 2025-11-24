import Logo from "../assets/waiter.svg"
import MenuAberto from "../assets/menu-aberto.svg"
import MenuFechado from "../assets/menu-fechado.svg"
import "../index.css"
import React from "react"
import {  NavLink } from "react-router-dom"
import Botao from "./Botao"

const Nav = () => {
  const [aberto, setAberto] = React.useState(false)

  const alternarMenu = () => {
    setAberto(prev => !prev)
  }
  
  const styleNav = "grid justify-between items-center-safe w-full xl:px-24"

  return (
      // <header className={aberto ?
      //  "bg-(--primario-700) px-8 py-5 flex justify-between" :
      //  "bg-(--primario-700) h-auto rounded-bl-4xl w-full fixed px-8 py-7 flex justify-between"}
      //  >
      //   <nav className={aberto ? `${styleNav}  grid-cols-2` : `${styleNav} grid-cols-4`}>
      //     <div className={aberto ? 'block' : 'hidden'}>
      //       <NavLink to="/">
      //         <img className="w-36 h-auto" src={Logo} alt="logo waiter"/>
      //       </NavLink>
      //     </div>

      //     <div className={aberto ? 'hidden transition duration-800 ease-in-out' : 'grid self-start col-span-3 '}>
      //       <ul className="grid gap-6 pt-10 text-2xl text-(--terciario-50)">
      //         <li className=""><NavLink to="/">Home</NavLink></li>
      //         <li className=""><NavLink to="/qrCode">Qr-code</NavLink></li>
      //         <li className="w-full"><NavLink to="/cardapioDigital">Cardápio digital</NavLink></li>
      //       </ul>
      //     </div>
      //     <div className={aberto ? 'grid justify-self-end' : 'grid justify-self-end self-start'}>
      //         <button className="self-start block md:hidden" onClick={alternarMenu} >
      //           <img className="w-7" src={aberto ? MenuAberto : MenuFechado} alt="icone do menu"/>
      //         </button>

      //       <ul className="hidden md:flex gap-7 text-xl text-(--terciario-50)">
      //         <li className="link-paginas"><NavLink to="/">Home</NavLink></li>
      //         <li className="link-paginas"><NavLink to="/qrCode">Qr-code</NavLink></li>
      //         <li className="link-paginas"><NavLink to="/cardapioDigital">Cardápio digital</NavLink></li>
      //       </ul>
      //     </div>
      //   </nav>
      // </header>

      <header class={aberto ?
        "bg-(--primario-700) px-8 py-5 " :
        "bg-(--primario-700) h-auto rounded-bl-4xl fixed w-full px-4 py-6"}>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex gap-6 h-16 items-center justify-between">
      <div className='grid'>
             <NavLink to="/">
               <img className="w-36 h-auto" src={Logo} alt="logo waiter"/>
             </NavLink>
      </div>

{/* menun mobile */}
      <div class="md:flex md:items-center md:gap-12">
        <nav aria-label="Global" class="block md:hidden">
        <ul className="hidden items-center text-sm gap-6 text-(--terciario-50)">
               <li className=""><NavLink to="/">Home</NavLink></li>
               <li className=""><NavLink to="/qrCode">Qr-code</NavLink></li>
               <li className="w-full"><NavLink to="/cardapioDigital">Cardápio digital</NavLink></li>
             </ul>
        </nav>
{/*  */}

{/* nav desktop */}

        <div className="md:grid">
          <ul className="hidden md:flex gap-7 text-xl text-(--terciario-50)">
                <li className="link-paginas"><NavLink to="/">Home</NavLink></li>
                <li className="link-paginas"><NavLink to="/qrCode">Qr-code</NavLink></li>
                <li className="link-paginas"><NavLink to="/cardapioDigital">Cardápio digital</NavLink></li>
          </ul>
        </div>

        <div class="flex items-center gap-4">
          <div class="sm:flex sm:gap-4">
           <Botao path='/login' variant="secundario" text='Login' />
          </div>

          <div class="block md:hidden">
            <button class="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
              <svg xmlns="http://www.w3.org/2000/svg" class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
  )
}

export default Nav