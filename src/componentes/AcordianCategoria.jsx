import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
  
import DialogoEditarProduto from "./DialogoEditarProduto"
function ProdutosCategoria() {
    // const [open, setOpen] = React.useState(false);

    return (
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Ver itens
            </AccordionTrigger>
          <AccordionContent className='relative grid gap-2'>
            <div className=" border border-(--primario-800) py-5 px-3 rounded-lg">
                <h3 className="text-xl">Coca-cola de 600ml</h3>
                <p>Descrição: </p>
                <p className="text-lg font-bold">R$ 12,00</p>
                <DialogoEditarProduto />
            </div>
            <div className=" border border-(--primario-800) py-5 px-3 rounded-lg">
                <h3 className="text-xl">Coca-cola de 200ml</h3>
                <p>Descrição: </p>
                <p className="text-lg font-bold">R$ 5,00</p>
                <DialogoEditarProduto />
            </div>
             <div className=" border border-(--primario-800) py-5 px-3 rounded-lg">
                <h3 className="text-xl">Coca-cola de 1L</h3>
                <p>Descrição: </p>
                <p className="text-lg font-bold">R$ 8,00</p>
                <DialogoEditarProduto />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
}

export default ProdutosCategoria


  