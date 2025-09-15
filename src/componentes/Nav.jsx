import Logo from "../assets/waiter.svg"
import Menufechado from "../assets/menu-fechado.svg"
import "../index.css"
import React from "react"

const Nav = () => {

  const [aberto, setAberto] = React.useState(false)
  return (
    <header className="bg-[var(--primario-700)] px-8 py-7 flex justify-between">
    <nav className="">
      <div className="">
        <a href="">
          <img src={Logo} alt="logo waiter"/>
        </a>
      </div>

      <div className="hidden">
        <ul className="">
          <li className=""><a href="">Home</a></li>
          <li className=""><a href="">Qr-code</a></li>
          <li className=""><a href="">Cardápio web</a></li>
        </ul>

        <a className="" onclick="">
          <img src="./assets/menu-aberto.svg" alt="botão pra abrir o menu"/>
        </a>
      </div>
    </nav>

    <div className="">
      <div>
        <button className={aberto ? "bg-amber-200" : aberto} onClick={() => setAberto(!aberto)} >
          <img className="w-6" src={Menufechado} alt="fechar menu"/>
        </button>
      </div>

      <ul className="hidden">
        <li className=""><a href="">Home</a></li>
        <li className=""><a href="">Qr-code</a></li>
        <li className=""><a href="">Cardápio web</a></li>
      </ul>
    </div>
    </header>
  )
}

export default Nav