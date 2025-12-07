import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog"
import Seletor from "./Seletor"
import iconChamarAtendente from '@/assets/icon-chamar-atendente.svg'

const opcoes = [
    {
        label: 'Primeiro pedido',
        htmlFor: 'opcao1',
        name: 'opcao'
    },
    {
        label: 'Pedir algo mais',
        htmlFor: 'opcao2',
        name: 'opcao'
    },
    {
        label: 'Outras Solicitações',
        htmlFor: 'opcao3',
        name: 'opcao'
    }
]

const DialogoChamaAtendente = () => {
    return (
        <Dialog>
          <DialogTrigger className='flex items-center gap-2 bg-(--primario-800) text-(--terciario-400) cursor-pointer hover:bg-(--primario-800) py-2 px-4 rounded-lg text-sn'>
            <img className="w-5" src={iconChamarAtendente} alt="" />
                Chamar atendente
         </DialogTrigger>
          <DialogContent>
            <DialogHeader className='text-left'>
                <DialogTitle className=' text-xl mb-4 text-(--primario-800) text-center md:text-2xl'>Chamar atendetende do restaurante do Sr. Chicó</DialogTitle>

                <div>
                    <form className="grid gap-2.5">
                        <div className="grid gap-2">
                            <label htmlFor="numeroMesa">Digite o número da sua mesa</label>
                            <input className="border border-(--primario-800)  py-1.5 px-2 rounded-sm" type="number" name="numeroMesa" id="numeroMesa" />
                        </div>

                        <div className="grid gap-1">
                            <h2 className='text-(--primario-900) text-xl'>
                                O que você gostaria?
                            </h2>
                            <ul className="grid gap-1 text-(--primario-800) text-lg">
                                {
                                    opcoes.map((opcao, index) => {
                                        return(
                                            <li key={index} id={index + 1} className="flex gap-2.5">
                                                <input type="radio" name={opcao.name} id={opcao.htmlFor} />
                                                <label htmlFor={opcao.htmlFor}>{opcao.label}</label>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <button className='bg-(--primario-800) text-(--terciario-300) py-1.5 px-2 rounded-sm'>Chamar o atendente</button>
                    </form>
                </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
    )
}

export default DialogoChamaAtendente