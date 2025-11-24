import Logo from "../assets/waiter.svg"
import MenuAberto from "../assets/menu-aberto.svg"
import MenuFechado from "../assets/menu-fechado.svg"
import "../index.css"
import React from "react"
import {  NavLink } from "react-router-dom"

const Nav = () => {
  const [aberto, setAberto] = React.useState(false)

  const alternarMenu = () => {
    setAberto(prev => !prev)
  }
  
  const styleNav = "grid justify-between items-center-safe w-full xl:px-24"

  return (
      <header className={aberto ?
       "bg-(--primario-700) px-8 py-5 flex justify-between" :
       "bg-(--primario-700) h-auto rounded-bl-4xl w-full fixed px-8 py-7 flex justify-between"}
       >
        <nav className={aberto ? `${styleNav}  grid-cols-2` : `${styleNav} grid-cols-4`}>
          <div className={aberto ? 'block' : 'hidden'}>
            <NavLink to="/">
              <img className="w-36 h-auto" src={Logo} alt="logo waiter"/>
            </NavLink>
          </div>

          <div className={aberto ? 'hidden transition duration-800 ease-in-out' : 'grid self-start col-span-3 '}>
            <ul className="grid gap-6 pt-10 text-2xl text-(--terciario-50)">
              <li className=""><NavLink to="/">Home</NavLink></li>
              <li className=""><NavLink to="/qrCode">Qr-code</NavLink></li>
              <li className="w-full"><NavLink to="/cardapioDigital">Cardápio digital</NavLink></li>
            </ul>
          </div>
          <div className={aberto ? 'grid justify-self-end' : 'grid justify-self-end self-start'}>
              <button className="self-start block md:hidden" onClick={alternarMenu} >
                <img className="w-7" src={aberto ? MenuAberto : MenuFechado} alt="icone do menu"/>
              </button>

            <ul className="hidden md:flex gap-7 text-xl text-(--terciario-50)">
              <li className="link-paginas"><NavLink to="/">Home</NavLink></li>
              <li className="link-paginas"><NavLink to="/qrCode">Qr-code</NavLink></li>
              <li className="link-paginas"><NavLink to="/cardapioDigital">Cardápio digital</NavLink></li>
            </ul>
          </div>
        </nav>
      </header>
  )
}

export default Nav