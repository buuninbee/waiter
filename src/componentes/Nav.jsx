import Logo from "../assets/Waiter.svg"
import "../index.css"

const Nav = () => {
  return (
    <header className="header">
    <nav className="">
      <div className="">
        <a href={Logo}>
          <img src="./assets/logo-waiter.svg" alt="logo waiter"/>
        </a>
      </div>

      <div className="">
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
        <button className="">
          <img className="w-6" src="./assets/menu-fechado.svg" alt="fechar menu"/>
        </button>
      </div>

      <ul className="">
        <li className=""><a href="">Home</a></li>
        <li className=""><a href="">Qr-code</a></li>
        <li className=""><a href="">Cardápio web</a></li>
      </ul>
    </div>
  </header>
  )
}

export default Nav