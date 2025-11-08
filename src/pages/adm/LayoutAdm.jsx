import { Outlet } from "react-router-dom";
import Logo from "../../assets/waiter.svg"
import {  NavLink } from "react-router-dom"


const LayoutAdm = () => {
  return (
    <>
       <header className="bg-(--primario-700) h-auto rounded-bl-4xl w-full px-8 py-7 flex mb-6">
        <nav className= 'flex justify-between items-center-safe w-full xl:px-24'>
            <NavLink to="/">
              <img className="w-36 h-auto" src={Logo} alt="logo waiter"/>
            </NavLink>

          <div className='grid'>
            <NavLink to="/">
                <p className="bg-(--terciario-400) text-(--primario-800) py-1.5 px-2 rounded-sm lg: text-lg">Voltar</p>
              </NavLink>
          </div>
        </nav>
      </header>
       <Outlet />
    </>
  )
}

export default LayoutAdm