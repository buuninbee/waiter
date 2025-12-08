import { Store } from 'lucide-react';
import MenuAberto from "../assets/menu-aberto.svg"
import MenuFechado from "../assets/menu-fechado.svg"
import {  NavLink } from "react-router-dom"
import React from "react"
import addCategoria from "@/assets/icon-adicionar.svg"
import { useState } from "react";
import ModalComanda from "@/componentes/ModalComanda";

import {
  LogOut,
} from "lucide-react"


export default function ModoGarcom() {

  const comandas = [
    {
      id: 1,
      nome: "Mesa 01",
      cliente: "João",
      status: "Aberta",
      itens: [
        { nome: "Parmegiana", qtd: 2, preco: 28 },
        { nome: "Coca-Cola", qtd: 1, preco: 8 },
      ],
    },
    {
      id: 2,
      nome: "Mesa 02",
      cliente: "Maria",
      status: "Fechada",
      itens: [
        { nome: "X-Burguer", qtd: 2, preco: 18 },
        { nome: "Suco", qtd: 2, preco: 6 },
      ],
    },
    {
      id: 3,
      nome: "Mesa 03",
      cliente: "Bruno",
      status: "Aberta",
      itens: [
        { nome: "Feijoada", qtd: 1, preco: 42 },
        { nome: "Caipirinha", qtd: 2, preco: 14 },
      ],
    },
    {
      id: 4,
      nome: "Mesa 04",
      cliente: "Ana",
      status: "Aberta",
      itens: [
        { nome: "Strogonoff", qtd: 1, preco: 32 },
        { nome: "Suco de Laranja", qtd: 1, preco: 7 },
      ],
    },
    {
      id: 5,
      nome: "Mesa 05",
      cliente: "Carlos",
      status: "Fechada",
      itens: [
        { nome: "Pizza", qtd: 1, preco: 45 },
        { nome: "Refrigerante", qtd: 2, preco: 7 },
      ],
    },
    {
      id: 6,
      nome: "Mesa 06",
      cliente: "Juliana",
      status: "Aberta",
      itens: [
        { nome: "Hambúrguer Artesanal", qtd: 2, preco: 25 },
        { nome: "Batata Frita", qtd: 1, preco: 12 },
      ],
    },
    {
      id: 7,
      nome: "Mesa 07",
      cliente: "Rafael",
      status: "Aberta",
      itens: [
        { nome: "Macarrão", qtd: 1, preco: 29 },
        { nome: "Vinho", qtd: 1, preco: 38 },
      ],
    },
    {
      id: 8,
      nome: "Mesa 08",
      cliente: "Fernanda",
      status: "Fechada",
      itens: [
        { nome: "Panqueca", qtd: 2, preco: 22 },
        { nome: "Suco de Uva", qtd: 2, preco: 8 },
      ],
    },
    {
      id: 9,
      nome: "Mesa 09",
      cliente: "Lucas",
      status: "Aberta",
      itens: [
        { nome: "Escondidinho", qtd: 1, preco: 34 },
        { nome: "Cerveja", qtd: 3, preco: 10 },
      ],
    },
    {
      id: 10,
      nome: "Mesa 10",
      cliente: "Patrícia",
      status: "Fechada",
      itens: [
        { nome: "Salada Caesar", qtd: 1, preco: 26 },
        { nome: "Água", qtd: 2, preco: 5 },
      ],
    },
    {
      id: 11,
      nome: "Mesa 11",
      cliente: "Diego",
      status: "Aberta",
      itens: [
        { nome: "Costela", qtd: 1, preco: 58 },
        { nome: "Refrigerante", qtd: 1, preco: 7 },
      ],
    },
    {
      id: 12,
      nome: "Mesa 12",
      cliente: "Camila",
      status: "Fechada",
      itens: [
        { nome: "Sushi", qtd: 1, preco: 65 },
        { nome: "Chá Gelado", qtd: 2, preco: 6 },
      ],
    },
    {
      id: 13,
      nome: "Mesa 13",
      cliente: "Eduardo",
      status: "Aberta",
      itens: [
        { nome: "Lasanha", qtd: 1, preco: 36 },
        { nome: "Suco Natural", qtd: 1, preco: 9 },
      ],
    },
    {
      id: 14,
      nome: "Mesa 14",
      cliente: "Larissa",
      status: "Aberta",
      itens: [
        { nome: "Frango Grelhado", qtd: 1, preco: 33 },
        { nome: "Isotônico", qtd: 1, preco: 9 },
      ],
    },
  ];

  const [mesas, setMesas] = useState(comandas);

  function criarMesa() {
    const novaMesa = {
      id: mesas.length + 1,
      nome: `Mesa ${String(mesas.length + 1).padStart(2, "0")}`,
      cliente: "Novo Cliente",
      status: "Aberta",
      itens: [],
    };

    setMesas((prev) => [...prev, novaMesa]);
  }
  
  const [aberto, setAberto] = React.useState(false);

  const alternarMenu = () => {
    setAberto(prev => !prev);
  };

  
  const [filtro, setFiltro] = useState("Todas");
  const [comandaSelecionada, setComandaSelecionada] = useState(null);

  const listaFiltrada =
  filtro === "Todas"
    ? mesas
    : mesas.filter((c) => c.status === filtro);

  return (
    <main>
        <header className="fixed top-0 z-50 w-full bg-(--primario-700)">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between">
          {/* logo waiter */}
          <h2 className="text-2xl text-(--terciario-300)">Mapa das mesas</h2>

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
          <div className="flex flex-col gap-8 text-xl">
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
        <section className="min-h-screen bg-(--primario-900) p-6 pt-24 text-white">

          <div className='grid gap-3'>
            <button onClick={criarMesa} className="bg-(--primario-700) text-(--terciario-400) gap-3 py-2 text-lg px-1.5 flex justify-center rounded-lg cursor-pointer">
                <img className="w-6" src={addCategoria} alt="" />
                <p>Adicionar Mesa</p>
            </button>
        
            <div className="flex gap-2
            pb-8">
              {["Todas", "Aberta", "Fechada"].map((status) => (
                <button
                  key={status}
                  onClick={() => setFiltro(status)}
                  className={`rounded  w-full px-4 py-2 text-sm font-semibold ${
                    filtro === status
                      ? "bg-(--primario-700) text-(--terciario-200)"
                      : "bg-(--terciario-400) text-(--primario-700) border border-(--primario-700)"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

      {/* loop da comanda */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {listaFiltrada.map((item) => {
          const total = item.itens.reduce(
            (acc, i) => acc + i.qtd * i.preco,
            0
          );

          return (
            <div
              key={item.id}
              className="rounded-xl bg-(--terciario-500) p-4 shadow transition hover:bg-zinc-800"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm text-zinc-900">{item.nome}</span>
                <span
                  className={`rounded px-2 py-1 text-xs font-semibold ${
                    item.status === "Aberta"
                      ? "bg-(--primario-700)"
                      : "bg-zinc-600"
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <p className="text-lg text-(--primario-800) font-semibold">{item.cliente}</p>

              <p className="mt-2 text-sm text-zinc-400">Total</p>
              <p className="text-xl font-bold text-(--primario-500)">
                R$ {total.toFixed(2)}
              </p>

              <button
                onClick={() => setComandaSelecionada(item)}
                className="mt-4 w-full rounded bg-(--primario-800) py-2 text-sm font-semibold hover:bg-green-500"
              >
                Ver Pedido
              </button>
            </div>
          );
        })}
      </div>
      {/* MODAL */}
      <ModalComanda
        comanda={comandaSelecionada}
        onClose={() => setComandaSelecionada(null)}
      />
        </section>
    </main>
  );
}
