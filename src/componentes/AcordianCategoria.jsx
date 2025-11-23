import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
  
import DialogoEditarProduto from "./DialogoEditarProduto"
function AccordionDemo() {

    // const [open, setOpen] = React.useState(false);

    return (
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Ver itens</AccordionTrigger>
          <AccordionContent className='relative'>
            <div>
                <h3>Coca-cola de 600ml</h3>
                <p>Descrição: </p>
                <p>R$ 12,00</p>
                <DialogoEditarProduto />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
}

export default AccordionDemo


  