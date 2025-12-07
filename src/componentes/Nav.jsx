import Logo from "../assets/waiter.svg"
import MenuAberto from "../assets/menu-aberto.svg"
import MenuFechado from "../assets/menu-fechado.svg"
import "../index.css"
import React from "react"
import {  NavLink } from "react-router-dom"
import Botao from "./Botao"

const Nav = () => {
  const [aberto, setAberto] = React.useState(false);

  const alternarMenu = () => {
    setAberto(prev => !prev);
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-(--primario-700)">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between">
          {/* logo waiter */}
          <NavLink to="/">
            <img className="w-32" src={Logo} alt="logo waiter" />
          </NavLink>

          {/* navegação desktop */}
          <div className="flex items-center gap-8">
              <ul className="hidden md:flex gap-8 text-xl text-(--terciario-50)">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/qrCode">Qr-code</NavLink></li>
                <li><NavLink to="/cardapioDigital">Cardápio digital</NavLink></li>
              </ul>

              <div className="hidden md:block">
                <Botao path="/login" variant="secundario" text="Login" />
              </div>

              <button
                onClick={alternarMenu}
                className="md:hidden"
              >
                <img
                  className="w-8"
                  src={ MenuAberto}
                  alt="Menu"
                />
              </button>
          </div>

        </div>
      </div>

      {/* OVERLAY */}
      {aberto && (
        <div
          onClick={alternarMenu}
          className="fixed inset-0 bg-black/50 md:hidden"
        />
      )}

      {/* navegação mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-(--primario-700) text-(--terciario-50) transform transition-transform duration-300 md:hidden
        ${aberto ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="grid pt-4  p-6 ">

        <button
            onClick={alternarMenu}
            className="justify-self-end md:hidden"
          >
            <img
              className="w-8"
              src={ MenuFechado}
              alt="Menu"
            />
          </button>
        <div className="flex flex-col gap-8 text-xl">
          <NavLink onClick={alternarMenu} to="/">Home</NavLink>
          <NavLink onClick={alternarMenu} to="/qrCode">Qr-code</NavLink>
          <NavLink onClick={alternarMenu} to="/cardapioDigital">Cardápio Digital</NavLink>

          <Botao path="/login" variant="secundario" text="Login" />
        </div>
        </div>
      </div>
    </header>
  );
}

export default Nav