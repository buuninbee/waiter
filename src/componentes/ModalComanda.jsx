export default function ModalComanda({ comanda, onClose }) {
    if (!comanda) return null;
  
    const total = comanda.itens.reduce(
      (acc, item) => acc + item.qtd * item.preco,
      0
    );
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
        <div className="w-full max-w-md rounded-xl bg-(--primario-800) p-6 text-white">
          <div className="mb-4 flex justify-between">
            <h2 className="text-xl font-bold">{comanda.nome}</h2>
            <button onClick={onClose}>✖</button>
          </div>
  
          <p className="mb-4 text-sm text-zinc-400">
            Cliente: {comanda.cliente}
          </p>
  
          <div className="space-y-3">
            {comanda.itens.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-(--terciario-100) pb-2"
              >
                <span>
                  {item.qtd}x {item.nome}
                </span>
                <span>R$ {(item.qtd * item.preco).toFixed(2)}</span>
              </div>
            ))}
          </div>
  
          <div className="mt-4 flex justify-between text-lg font-bold">
            <span>Total</span>
            <span className="text-(--terciario-100)">R$ {total.toFixed(2)}</span>
          </div>
  
          <button
            onClick={onClose}
            className="mt-6 w-full rounded bg-(--terciario-100) text-(--primario-700) border border-(--primario700) hover:text-(--primario-500) py-2 font-semibold hover:bg-green-500"
          >
            Fechar
          </button>
        </div>
      </div>
    );
  }
  