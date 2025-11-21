import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
  } from "@/components/ui/dialog"

import Contador from "./Contador"
import { useState } from "react"

const Dialogo = ({item}) => {
  const [qtd, setQtd] = useState(1);

  const total = qtd * item.preco;
  return (
    <Dialog>
  <DialogTrigger>
      <button className="grid gap-4 min-w-[220px] w-full border border-(--primario-800) rounded-lg py-2 px-3">
        <h3 className="text-left text-(--primario-800)">{item.nome}</h3>
        <div className="flex flex-col items-start gap-3">
            <p className="">R$ {item.preco} </p>
        </div>
    </button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader className='text-left'>
      <DialogTitle className=' text-xl mb-4 text-(--primario-800)'>{item.nome}</DialogTitle>
      <DialogDescription className='grid gap-4'>
        <div className="flex  md:flex-row gap-2.5 justify-between">
            <h3 className="text-lg text-(--primario-800)">R$ {total}</h3>
            <Contador onChange={(value) => setQtd(value)} className="max-w-max" />
        </div>
        <div className="flex flex-col gap-3">
           <label className="text-(--primario-900)">Observação: </label>
           <textarea className="w-full border border-(--primario-800) py-2 px-2 rounded-md" name="" id="" cols="30" rows="5" placeholder="Adicione uma observação..."></textarea>
        </div>
        <div className="grid gap-2.5">
            <button className="bg-(--primario-700) text-(--terciario-400) gap-3 py-3 text-lg px-2.5 flex justify-center rounded-xl hover:bg-(--primario-600) cursor-pointer">
            Adicionar ao carrinho
            </button>
        </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
  )
}

export default Dialogo