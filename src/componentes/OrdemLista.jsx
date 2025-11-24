import React from "react";

const statusBotoes = [
  { label: "Análise", value: "Analise", color: "var(--secundario-600)" },
  { label: "Produção", value: "Producao", color: "#DDBF1A" },
  { label: "Pronto", value: "Pronto", color: "var(--primario-800)" },
];

const OrdemLista = () => {

  // -----------------------------
  // STATE DE PEDIDOS
  // -----------------------------
  const [pedidos, setPedidos] = React.useState([
    {
      id: 6,
      horario: "12:32",
      mesa: 2,
      pagamento: "Não registrado",
      status: "Analise",
    },
    {
      id: 7,
      horario: "12:40",
      mesa: 5,
      pagamento: "PIX",
      status: "Producao",
    },
  ]);

  const [statusAtivo, setStatusAtivo] = React.useState("Analise");

  // -----------------------------
  // FUNÇÃO PARA AVANÇAR STATUS
  // -----------------------------
  const avancarStatus = (id) => {
    setPedidos((prev) =>
      prev.map((p) => {
        if (p.id !== id) return p;

        if (p.status === "Analise") return { ...p, status: "Producao" };
        if (p.status === "Producao") return { ...p, status: "Pronto" };

        return p;
      })
    );
  };

  // -----------------------------
  // CARD DO PEDIDO
  // -----------------------------
  const PedidoCard = ({ pedido }) => (
    <div className="bg-amber-50 px-1.5 py-2 grid gap-3 rounded-lg">
      <div className="flex justify-between">
        <h3>Pedido #{pedido.id}</h3>
        <p>{pedido.horario}</p>
      </div>

      <p>Mesa {pedido.mesa}</p>
      <p>Pagamento: {pedido.pagamento}</p>

      {/* Só mostra botão se NÃO estiver em "Pronto" */}
      {pedido.status !== "Pronto" && (
        <button
          onClick={() => avancarStatus(pedido.id)}
          className="bg-(--primario-700) rounded-lg text-(--terciario-100) py-2 px-1.5"
        >
          Avançar
        </button>
      )}
    </div>
  );

  return (
    <div className="grid gap-4">
      <div className="flex justify-between gap-2">
        {statusBotoes.map((botao) => (
            <button
            key={botao.value}
            onClick={() => setStatusAtivo(botao.value)}
            className={`px-4 py-3 rounded-lg w-full font-medium sm:text-lg text-(--terciario-100)
                ${statusAtivo === botao.value ? "ring-4 ring-(--terciario-50)" : ""}
            `}
            style={{ backgroundColor: botao.color }}
            >
            {botao.label}
            </button>
    ))}
    </div>

      <div>
        <div className="flex gap-1.5 justify-center md:hidden">
            {/* COLUNA ANÁLISE */}
            {statusAtivo === "Analise" && (
                <div className="bg-(--secundario-600) w-full min-h-[500px] rounded-xl lg:block">
                <div className="px-4 py-3">
                    <p className="text-(--terciario-100) border-b mb-3">Em análise</p>

                    <div className="grid gap-3">
                    {pedidos
                        .filter((p) => p.status === "Analise")
                        .map((p) => <PedidoCard key={p.id} pedido={p} />)}
                    </div>
                </div>
                </div>
            )}

            {/* COLUNA PRODUÇÃO */}
            {statusAtivo === "Producao" && (
                <div className="bg-[#DDBF1A] w-full min-h-[500px] rounded-xl lg:block">
                <div className="px-4 py-3">
                    <p className="text-(--terciario-100) border-b mb-3">Produção</p>

                    <div className="grid gap-3">
                    {pedidos
                        .filter((p) => p.status === "Producao")
                        .map((p) => <PedidoCard key={p.id} pedido={p} />)}
                    </div>
                </div>
                </div>
            )}

            {/* COLUNA PRONTO */}
            {statusAtivo === "Pronto" && (
                <div className="bg-(--primario-800) w-full min-h-[500px] rounded-xl lg:block">
                <div className="px-4 py-3">
                    <p className="text-(--terciario-100) border-b mb-3">Pronto</p>

                    <div className="grid gap-3">
                    {pedidos
                        .filter((p) => p.status === "Pronto")
                        .map((p) => <PedidoCard key={p.id} pedido={p} />)}
                    </div>
                </div>
                </div>
            )}
        </div>

        <div className="hidden md:flex gap-1.5 justify-center">            
            <div className="bg-(--secundario-600) w-full min-h-[500px] rounded-xl lg:block">
            <div className="px-4 py-3">
                <p className="text-(--terciario-100) border-b mb-3">Em análise</p>

                <div className="grid gap-3">
                {pedidos
                    .filter((p) => p.status === "Analise")
                    .map((p) => <PedidoCard key={p.id} pedido={p} />)}
                </div>
            </div>
            </div>

            <div className="bg-[#DDBF1A] w-full min-h-[500px] rounded-xl lg:block">
            <div className="px-4 py-3">
                <p className="text-(--terciario-100) border-b mb-3">Produção</p>

                <div className="grid gap-3">
                {pedidos
                    .filter((p) => p.status === "Producao")
                    .map((p) => <PedidoCard key={p.id} pedido={p} />)}
                </div>
            </div>
            </div>

            <div className="bg-(--primario-800) w-full min-h-[500px] rounded-xl lg:block">
            <div className="px-4 py-3">
                <p className="text-(--terciario-100) border-b mb-3">Pronto</p>

                <div className="grid gap-3">
                {pedidos
                    .filter((p) => p.status === "Pronto")
                    .map((p) => <PedidoCard key={p.id} pedido={p} />)}
                </div>
            </div>
            </div>
        </div>
      </div>

    </div>
  );
};
export default OrdemLista;