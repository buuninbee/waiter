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


import Lupa from "./Lupa"
import addCategoria from "@/assets/icon-adicionar.svg"
import Dialogo from "./Dialogo"


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


export default function MenuLateral() {


  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-(--primario-700) text-(--terciario-400) gap-3 py-6 text-lg px-4.5 flex justify-center rounded-xl hover:bg-(--primario-600) cursor-pointer">
        <img className="w-6" src={addCategoria} alt="" />
          Novo pedido</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className='text-(--primario-800)'>Pedidos balcão (PDV)</SheetTitle>
        </SheetHeader>
        <div  className='overflow-y-auto overscroll-contain overflow-hidden'>
          <div className="grid grid-cols-1  px-4">
              <div className="grid gap-6 md:grid-cols-4">
                  <div className="grid gap-7 md:col-span-2 ">
                    <Lupa placeholder="Buscar grupo" value=''/>
                    <div className="grid gap-2">
                      <h3 className="text-(--primario-900)">Bebidas</h3>
                      <div className="flex flex-wrap gap-2.5">
                        {
                          produtos.refrigerante.map((item, index) => (
                          <div key={index}  className="grid">
                              <Dialogo item={item} />
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
                              <Dialogo item={item} />
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
                              <Dialogo item={item} />
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-rows-12 md:col-start-3 md:col-span-3">
                    <h3 className="text-xl mb-2">Itens do pedido</h3>
                    <div className="grid  gap-2 border py-2 px-1.5 rounded-lg border-(--primario-800) bg-(--terciario-200) md:row-span-11">
                      {/* itens adicionados ao pedido vão aparecer aqui */}
                      <div className="grid gap-1.5 border-b border-b-(--primario-700) md:max-h-32">
                        <div className="flex flex-col gap-1 justify-between">
                          <h4>2x Refrigerante de 600ml</h4>
                          <span>R$ 12,00</span>
                        </div>
                          <p className=" mb-3">Observação: lore</p>
                      </div>
                      
                      <div className="grid gap-1.5  border-b border-b-(--primario-700) md:max-h-32">
                        <div className="flex flex-col gap-1 justify-between">
                          <h4>2x Refrigerante de 600ml</h4>
                          <span>R$ 12,00</span>
                        </div>
                          <p className=" mb-3">Observação: </p>
                      </div>

                      <div className="grid gap-1.5  border-b border-b-(--primario-700) md:max-h-32">
                        <div className="flex flex-col gap-1 justify-between">
                          <h4>2x Refrigerante de 600ml</h4>
                          <span>R$ 12,00</span>
                        </div>
                          <p className=" mb-3">Observação: </p>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
        </div>
          <div className="grid py-3 border flex-1 auto-rows-min gap-6 px-4">
              <div className="grid gap-3 pt-2">
                  <Label htmlFor="sheet-demo-name">Telefone</Label>
                  <Input id="sheet-demo-name" type='number' placeholder="XX XXXXXXXXX" />
              </div>
              <div className="grid gap-3">
                  <Label htmlFor="sheet-demo-username">Nome</Label>
                  <Input id="sheet-demo-username" placeholder="Rafael Sacramento" />
              </div>
          </div>
        <SheetFooter>
          <Button className="bg-(--primario-700) text-(--terciario-400) gap-3 py-5 text-lg px-2.5 flex justify-center rounded-xl hover:bg-(--primario-600) cursor-pointer" type="submit">Finalizar pedido</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
