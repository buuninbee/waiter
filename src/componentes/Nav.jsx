import Logo from "../assets/waiter.svg"
import MenuAberto from "../assets/menu-aberto.svg"
import MenuFechado from "../assets/menu-fechado.svg"
import "../index.css"
import React from "react"

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
    <nav className="">
      <div className={aberto ? 'block' : 'hidden'}>
        <a href="">
          <img src={Logo} alt="logo waiter"/>
        </a>
      </div>

      <div className={aberto ? 'hidden' : 'grid'}>
        <ul className="grid gap-2 pt-10 text-2xl text-[var(--terciario-50)]">
          <li className=""><a href="">Home</a></li>
          <li className=""><a href="">Qr-code</a></li>
          <li className=""><a href="">Cardápio web</a></li>
        </ul>
      </div>
    </nav>

    <div>
      <div>
        <button onClick={alternarMenu} >
          <img className="w-6 " src={aberto ? MenuAberto : MenuFechado} alt="icone do menu"/>
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