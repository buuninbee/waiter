import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useContext, useState } from "react"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import CardapioContext from "@/context/CardapioContext"

import { toast, Toaster } from "sonner"
import { useNavigate } from "react-router-dom";


const usuarioFormSchema = z.object({
  nome: z.string().min(1, "Nome obrigatório"),
  numero: z
    .string()
    .transform((val) => val.replace(/\D/g, ""))
    .refine((val) => /^(\d{2})9\d{8}$/.test(val), {
      message: "Número de WhatsApp inválido",
    }),
})

const DialogoWhatsApp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(usuarioFormSchema),
    defaultValues: {
      nome: "",
      numero: "",
    },
  })
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const { totalPreco, cartItens } = useContext(CardapioContext)

  const itensFormatados = cartItens
  .map(item => `- ${item.quantidade}x - ${item.titulo}`)
  .join("\n");


 async function enviarMensagem({numero, nome}) {
    const mensagem = `
*Sr. CHICÓ — PEDIDO CONFIRMADO* ✅

*Cliente:* ${(nome).toUpperCase()}  
*Telefone:* ${numero}  

🛒 *Itens do Pedido:*
${itensFormatados}

💰 *Total:* R$ ${totalPreco}  

 _Seu pedido já está em preparo!_  
 _Agradecemos a preferência._  


*Sr. Chicó, Sabor que conquista!*  
`;
    try {
      console.log("URL:", import.meta.env.GZAPPY_URL);

      const response = await fetch('https://v2-api.gzappy.com/message/send-text', {
        method: 'POST',
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNfaW5zdGFuY2VfaWQiOiJQR0w0SSoqKioqKioqKioqKioqS01PVU8iLCJleHBpcmVzX2F0IjoiMjAyNi0xMi0xMFQxNDoyMTowOS4zMThaIiwiaWF0IjoxNzY1Mzc2NDY5LCJleHAiOjIzNzAxNzY0Njl9.Yx_dWl9wn2-QVRmrYh-GCWuQh6v4HmS2xLDb5yh_LZ0",
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: [numero],
          message: [mensagem],
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar mensagem");
      }

      const data = await response.json();
      console.log('Mensagem enviada com sucesso:', data);

      // ✅ FECHA O DIALOG
      setOpen(false);

      // ✅ REDIRECIONA PRO CARDÁPIO
      setTimeout(() => {
        navigate("/cardapio-template"); // ajuste sua rota aqui
      }, 1500);
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
    }
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className='bg-(--terciario-100) w-full text-(--primario-700) border border-(--primario700) hover:bg-(--terciario-200) hover:text-(--primario-500) py-2 px-4 text-lg rounded-sm md:text-xl'>
        Adicionar a comanda
      </DialogTrigger>

      <DialogContent>
        <DialogHeader className='text-left'>
          <DialogTitle className='text-xl mb-4 text-(--primario-800) text-center md:text-2xl'>
            Digite seu WhatsApp para acompanhar o seu pedido
          </DialogTitle>

          <Toaster richColors position="top-right" />
          <form onSubmit={handleSubmit(enviarMensagem)} className="grid gap-2.5">

            <div className="grid gap-2">
              <label>Nome:</label>
              <input
                {...register("nome")}
                className="border border-(--primario-800) py-1.5 px-2 rounded-sm"
                type="text"
                placeholder="Fernando Silva"
              />
              {errors.nome && (
                <span className="text-red-500 text-sm">
                  {errors.nome.message}
                </span>
              )}
            </div>

            <div className="grid gap-2">
              <label>Digite o seu Telefone:</label>
              <input
                {...register("numero")}
                className="border border-(--primario-800) py-1.5 px-2 rounded-sm"
                type="tel"
                placeholder="61999998888"
              />
              {errors.numero && (
                <span className="text-red-500 text-sm">
                  {errors.numero.message}
                </span>
              )}
            </div>

            <button
             onClick={() => toast.success("Pedido enviado com sucesso!", {
              description: "Seu pedido já está sendo preparado com carinho 💛",
            })}
              type="submit"
              className='bg-(--primario-800) text-(--terciario-300) py-1.5 px-2 rounded-sm'
            >
              Pronto
            </button>

          </form>

        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default DialogoWhatsApp
