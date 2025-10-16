import Logo from "../assets/waiter.svg"
import MenuAberto from "../assets/menu-aberto.svg"
import MenuFechado from "../assets/menu-fechado.svg"
import "../index.css"
import React from "react"
import {  NavLink } from "react-router-dom"

const Nav = () => {
  const [aberto, setAberto] = React.useState(() => {
    const valorSalvo = localStorage.getItem("menuAberto")
    return valorSalvo === "true"
  })
  
  const alternarMenu = () => {
    const novoEstado = !aberto
    setAberto(novoEstado)
    localStorage.setItem("menuAberto", novoEstado)
  }
  
  return (
      <header className={aberto ? "bg-[var(--primario-700)] px-8 py-7 flex justify-between" : "bg-[var(--primario-700)] h-dvh w-full fixed px-8 py-7 flex justify-between"}>
        <nav className="flex justify-between items-center-safe w-full xl:px-24">
          <div className={aberto ? 'block' : 'hidden'}>
            <NavLink to="/">
              <img className="w-36 h-auto" src={Logo} alt="logo waiter"/>
            </NavLink>
          </div>

          <div className={aberto ? 'hidden' : 'grid'}>
            <ul className="grid gap-2 pt-10 text-2xl text-[var(--terciario-50)]">
              <li className=""><NavLink to="/">Home</NavLink></li>
              <li className=""><NavLink to="/qrCode">Qr-code</NavLink></li>
              <li className=""><NavLink to="/cardapioDigital">Cardápio digital</NavLink></li>
            </ul>
          </div>
          <div>
            <div className="md:hidden">
              <button onClick={alternarMenu} >
                <img className="w-7" src={aberto ? MenuAberto : MenuFechado} alt="icone do menu"/>
              </button>
            </div>

            <ul className="hidden md:flex gap-7 text-xl text-[var(--terciario-50)]">
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