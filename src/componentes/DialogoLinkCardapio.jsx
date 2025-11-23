import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog"

import qrscan from "@/assets/icon-qrscan.svg"
import iconWhatsapp from "@/assets/icon-whatsapp.svg"
import Copiatexto from "./CopiaTexto"
import Botao from "./Botao"

const DialogoLinkCardapio = () => {
    return (
        <Dialog>
          <DialogTrigger>
                <button className="bg-(--terciario-300) py-2.5 px-2.5 rounded-full">
                    <img src={qrscan} alt="" />
                </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader className='text-left'>
              <DialogTitle className=' text-xl mb-4 text-(--primario-800) text-center md:text-2xl'>Compartilhe o link do seu cardápio digital!</DialogTitle>
              <DialogDescription className='grid gap-4'>
                <span className="text-(--terciario-900)">Copie o link e cole onde quiser para compatilhar!</span>
                <Copiatexto className='text-center py-2.5 px-4 gap-1 rounded-sm bg-(--primario-700) text-(--terciario-500)' texto='https://waiterg.vercel.app/adm/main' />
                <div className="grid gap-2.5">
                    <Botao variant="secundario" text="Compartilhar link" img={iconWhatsapp} />
                    <Botao variant="primario" text="Abrir cadárpio" />
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )
}

export default DialogoLinkCardapio