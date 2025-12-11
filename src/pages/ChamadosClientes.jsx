import { Store, OctagonAlert,LogOut, Table } from 'lucide-react';
import MenuAberto from "../assets/menu-aberto.svg"
import MenuFechado from "../assets/menu-fechado.svg"
import {  NavLink } from "react-router-dom"
import React from "react";

export default function ChamadosClientes() {
    const [chamados, setChamados] = React.useState([
        { id: 1, mesa: "Mesa 01", horario: "18:42", status: "Pendente" },
        { id: 2, mesa: "Mesa 07", horario: "18:45", status: "Pendente" },
        { id: 3, mesa: "Mesa 12", horario: "18:47", status: "Atendido" },
        { id: 4, mesa: "Mesa 03", horario: "18:50", status: "Pendente" },
        { id: 5, mesa: "Mesa 09", horario: "18:25", status: "Pendente" },
        { id: 6, mesa: "Mesa 16", horario: "18:17", status: "Atendido" },
        { id: 7, mesa: "Mesa 29", horario: "18:52", status: "Pendente" },
      ]);
  const [aberto, setAberto] = React.useState(false);

  const alternarMenu = () => {
    setAberto(prev => !prev);
  };

  function atenderChamado(id) {
    setChamados((prev) =>
      prev.map((ch) =>
        ch.id === id ? { ...ch, status: "Atendido" } : ch
      )
    );
  }

  return (
    <main>
    <header className="fixed top-0 z-50 w-full bg-(--primario-700)">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between">
          {/* logo waiter */}
          <h2 className="text-2xl text-(--terciario-300)">Chamados dos Clientes</h2>

          {/* navegação desktop */}
          <div className="flex items-center gap-8">
              <ul className="hidden md:flex gap-8 text-xl text-(--terciario-50)">
                <li><NavLink to="/">Home</NavLink></li>
              </ul>


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
        <div className="grid pt-4 p-6">
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


          <div className="flex flex-col gap-8 text-xl ">
            <div className='grid gap-6 py-10 pb-60'>
                <NavLink to="/modo-garcom" className='flex text-sm gap-2 items-center'>
                    <Table />
                    <p>Mapa das mesas</p>
                </NavLink>
                <NavLink to="/chamados-clientes" className='flex text-sm gap-2 items-center'>
                    <OctagonAlert />
                    <p>Chamados dos clientes</p>
                </NavLink>
            </div>
            
            <div className="flex gap-2 items-center pt-6">
                <Store className='bg-(--terciario-200) w-10 h-7 rounded-lg text-(--primario-800)' />
              <div className='grid'>
                <p className="text-sm">Carlos Corrêa</p>
                <h3 className='text-sm'>Loja do Sr. Chicó</h3>
              </div>
            </div>

            <div className=" flex gap-3 items-center justify-center py-2 px-1 rounded-lg bg-(--terciario-300) text-(--secundario-900) cursor-pointer">
              <LogOut className="text-(--secundario-900)" />
              Sair
            </div>
          </div>
        </div>
      </div>
     </header>

        <div className="min-h-screen bg-(--primario-900) p-6 pt-24 max-w-lg mx-auto">

      <div className="space-y-3">
        {chamados.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white p-4 shadow rounded-lg border"
          >
            <div className="grid max-w-min gap-1.5">
              <span
                className={`px-2 py-1 rounded-full text-sm ${
                  item.status === "Pendente"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {item.status}
              </span>

              <div>
                <p className="text-lg font-semibold">{item.mesa}</p>
                <p className="text-sm text-gray-500">
                  Chamado às{" "}
                  <span className="font-medium">{item.horario}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {item.status === "Pendente" && (
                <button
                  onClick={() => atenderChamado(item.id)}
                  className="px-3 py-2 bg-(--primario-600) text-white text-sm rounded-md hover:bg-blue-700"
                >
                  Atender
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    </main>
  );
}
