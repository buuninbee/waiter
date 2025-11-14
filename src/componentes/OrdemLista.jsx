const statusBotoes = [
{ label: "Análise", color: "var(--secundario-600)" },
{ label: "Produção", color: "#DDBF1A" },
{ label: "Pronto", color: "var(--primario-800)" },  
]

const OrdemLista = () => {
  return (
    <div className='grid gap-4'>
        <div className="flex justify-between gap-2">
        {statusBotoes.map((botao, index) => (
            <button 
            key={index} 
            className="px-4 py-3 rounded-lg text-(--terciario-100) w-full font-medium sm:text-lg"
            style={{ backgroundColor: botao.color }}
            >
            {botao.label}
            </button>
        ))}
        </div>
        {/* status do pedido*/}
        <div className='flex gap-1.5 justify-center'>
            <div className="bg-(--secundario-600) w-full min-h-[500px] rounded-xl">
            <div className="px-4 py-3 md:px-2">
                <p className="text-(--terciario-100) border-b mb-3">Em análise</p>

                <div className='bg-amber-50 px-1.5 py-2 grid gap-3 rounded-lg'>
                <div className='flex justify-between gap-2'>
                    <h3>Pedido #6</h3>
                    <p>Há 12:32</p>
                </div>

                <div>
                    <p>Mesa 2</p>
                </div>

                <p>Pagamento: Não registrado</p>

                <button className='bg-(--primario-700) rounded-lg text-(--terciario-100) py-2 px-1.5'>Avançar</button>
                </div>
            </div>
            </div>

            <div className=" bg-[#DDBF1A]  w-full min-h-[500px] rounded-xl">
            <div className="px-4 py-3">
                <p className="text-(--terciario-100) border-b">Produção</p>
            </div>
            </div>

            <div className="bg-(--primario-800) w-full min-h-[500px] rounded-xl">
            <div className="px-4 py-3">
                <p className="text-(--terciario-100) border-b">Pronto</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default OrdemLista