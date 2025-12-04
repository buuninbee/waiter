import React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Label } from "@/components/ui/label"


import Lupa from "@/componentes/Lupa"
import DialogoPedido from "@/componentes/DialogoPedido"
import { useContext } from "react"
import CardapioContext from "@/context/CardapioContext"
import Loading from "@/loading/Loading"


const produtos = {  
  refrigerante: [
    {
      nome: "Refrigerante 600ml",
      preco: 5.00
    },
    {
      nome: "Refrigerante 1L",
      preco: 8.00
    },
    {
      nome: "Refrigerante 2L",
      preco: 12.00
    },
    {
      nome: "Refrigerante 3L",
      preco: 15.00
    },
     {
      nome: "Refrigerante Diet 600ml",
      preco: 6.00
     },
     {
      nome: "Refrigerante 1L",
      preco: 8.00
    },
  ],

  almoço: [
    {
      nome: "Prato Executivo",
      preco: 20.00
    },
    {
      nome: "Salada Completa",
      preco: 15.00
    },
    {
      nome: "Marmitex",
      preco: 18.00
    }
  ],

  petisco: [
    {
      nome: "Batata Frita",
      preco: 10.00
    },
    {
      nome: "Frango à Passarinho",
      preco: 12.00
    },
    {
      nome: "Calabresa Acebolada",
      preco: 14.00
    }
  ]
}

const pedidos = [
  {
    item: "Refrigerante 600ml",
    quantidade: 2,
    observacao: "quero com dois cubos de gelos",
    preco: 5.00
  },
  {
    item: "Hamburger de salsicha",
    quantidade: 1,
    observacao: "",
    preco: 8.00
  },
  {
    item: "Batata frita",
    quantidade: 1,
    observacao: "Quero bem frita, quase torrada",
    preco: 10.00
  },
  {
    item: "Batata frita",
    quantidade: 1,
    observacao: "Quero bem frita, quase torrada",
    preco: 10.00
  },
  {
      item: "Batata frita",
      quantidade: 1,
      observacao: "Quero bem frita, quase torrada",
      preco: 10.00
  },
  {
    item: "Hamburger de salsicha",
    quantidade: 1,
    observacao: "",
    preco: 8.00
  },
  {
    item: "Batata frita",
    quantidade: 1,
    observacao: "Quero bem frita, quase torrada",
    preco: 10.00
},
{
  item: "Hamburger de salsicha",
  quantidade: 1,
  observacao: "",
  preco: 8.00
},
{
  item: "Hamburger de salsicha",
  quantidade: 1,
  observacao: "",
  preco: 8.00
},
{
  item: "Batata frita",
  quantidade: 1,
  observacao: "Quero bem frita, quase torrada",
  preco: 10.00
},
{
item: "Hamburger de salsicha",
quantidade: 1,
observacao: "",
preco: 8.00
},
]



function NovoPedido() {
  const { loading} = useContext(CardapioContext)
  return (
    <main className="grid pb-8 w-full md:pl-10 md:pb-0">
        <div className='overflow-y-auto overscroll-contain overflow-hidden'>
          <div className="grid grid-cols-1  px-4">
            {
              loading ? (
                <Loading/>
              ) : (
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="grid gap-7 md:col-span-1 md:overflow-y-auto overscroll-contain overflow-hidden">
                    <Lupa placeholder="Buscar produto..." value=''/>
                    <div className="grid gap-2">
                      <h3 className="text-(--primario-900)">Bebidas</h3>
                      <div className="flex flex-wrap gap-2.5">
                        {
                          produtos.refrigerante.map((item, index) => (
                          <div key={index}  className="grid">
                              <DialogoPedido item={item} />
                          </div>
                          )
                        )}
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <h3>Almoço</h3>
                      <div className="flex flex-wrap gap-2.5">
                        {
                          produtos.almoço.map((item, index) => (
                            <div key={index}  className="grid">
                              <DialogoPedido item={item} />
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <h3>Petisco</h3>
                      <div className="flex flex-wrap gap-2.5">
                        {
                          produtos.petisco.map((item, index) => (
                            <div key={index}  className="grid">
                              <DialogoPedido item={item} />
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <h3 className="text-(--primario-900)">Bebidas</h3>
                      <div className="flex flex-wrap gap-2.5">
                        {
                          produtos.refrigerante.map((item, index) => (
                          <div key={index}  className="grid">
                              <DialogoPedido item={item} />
                          </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-5 md:col-start-2 md:gap-4">
                    <div className="grid  md:gap-7 ">
                      <h3 className="text-xl mb-2 md:mb-0 md:h-0">Itens do pedido</h3>
                      <div className="grid  gap-2 border py-2 px-1.5 rounded-lg border-(--primario-800) bg-(--terciario-200) md:h-[500px]  overflow-y-auto overscroll-contain">
                        {
                          pedidos.map((pedido, index) => (
                            <div key={index} className="grid gap-1 border-b pb-2 last:border-0">
                              <div className="flex justify-between items-center">
                                <span className="font-medium text-(--primario-800)">{pedido.quantidade}x {pedido.item}</span>
                                <span className="font-medium text-(--primario-800)">R$ {(pedido.preco * pedido.quantidade).toFixed(2)}</span>
                              </div>
                              {pedido.observacao && (
                                <span className="text-sm text-(--primario-900)">Obs: {pedido.observacao}</span>
                              )}
                            </div>
                          ))
                        }
                      </div>
                    </div>

                    <div className="grid py-3 border rounded-xl flex-1 auto-rows-min gap-6 px-4 md:content-center">
                        <div className="grid gap-3 pt-2">
                            <Label htmlFor="sheet-demo-name">Telefone</Label>
                            <Input id="sheet-demo-name" type='number' placeholder="XX XXXXXXXXX" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="sheet-demo-username">Nome</Label>
                            <Input id="sheet-demo-username" placeholder="Rafael Sacramento" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="sheet-demo-username">Endereço</Label>
                            <Input id="sheet-demo-username" placeholder="Guara, casa 45" />
                        </div>
                    </div>
                  </div>
              </div>
              )
            }
          </div>
        </div>
          
        <SheetFooter>
          <Button className="bg-(--primario-700) text-(--terciario-400) gap-3 py-5 text-lg px-2.5 flex justify-center rounded-xl hover:bg-(--primario-600) cursor-pointer" type="submit">Gerar pedido</Button>
        </SheetFooter>

    </main>
  )
}

export default  NovoPedido