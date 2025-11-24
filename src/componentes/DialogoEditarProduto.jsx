import {useState} from "react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog"
import Seletor from "./Seletor"
import { SquarePen } from "lucide-react"


import Botao from "./Botao"
import InputImagem from "./InputImagem"
import InputPreco from "./InputPreco"

const categorias = [
    {value: 'almoco', label: 'Almoço'},
    {value: 'petisco', label: 'Petisco'},
    {value: 'bebidas', label: 'Bebidas'},
]

const DialogoLinkCardapio = () => {
   const [produtoNome, setProdutoNome] = useState('');
   const [descricaoProduto, setDescricaoProduto] = useState('');
   const [categoriaSelecionada, setCategoriaSelecionada] = useState('');

   const [preco, setPreco] = useState("");
    const precoNumero = Number(preco.replace(".", "").replace(",", "."));

   console.log(categoriaSelecionada, produtoNome, descricaoProduto, precoNumero);
    return (
        <Dialog>
          <DialogTrigger className='flex items-center gap-2 bg-(--primario-700) text-(--terciario-400) cursor-pointer hover:bg-(--primario-900) py-2 px-4 rounded-lg'>
            <SquarePen />
                Editar Produto
         </DialogTrigger>
          <DialogContent>
            <DialogHeader className='text-left'>
                <DialogTitle className=' text-xl mb-4 text-(--primario-800) text-center md:text-2xl'>Editar Produto</DialogTitle>
                <form className="grid gap-4">
                    <div>
                        <label htmlFor="">Categoria</label>
                        <Seletor items={categorias} onChange={(categoria) => setCategoriaSelecionada(categoria)}  />
                    </div>
                    <div>
                        <label htmlFor="">Nome do produto</label>
                        <input onChange={(e) => setProdutoNome(e.target.value)} value={produtoNome} type="text" className="w-full rounded-md border border-(--primario-600) px-3 py-2 mt-1" />
                    </div>
                    <div>
                        <label htmlFor="">Descrição</label>
                        <textarea onChange={(e) => setDescricaoProduto(e.target.value)} value={descricaoProduto} className="w-full rounded-md border border-(--primario-600) px-3 py-2 mt-1" rows="4"></textarea>
                    </div>
                        <InputImagem />
                        <InputPreco
                        value={preco}
                        onChange={(valor) => setPreco(valor)}  // <<==== recebe do filho
                        />
                    <Botao  text="Salvar alterações" variant="primario" />
                </form>
            </DialogHeader>
          </DialogContent>
        </Dialog>
    )
}


export default DialogoLinkCardapio