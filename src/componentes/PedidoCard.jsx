const PedidoCard = ({ pedido, onAvancar }) => {
    return (
      <div className="bg-amber-50 px-1.5 py-2 grid gap-3 rounded-lg">
        <div className="flex justify-between gap-2">
          <h3>Pedido #{pedido.id}</h3>
          <p>{pedido.horario}</p>
        </div>
  
        <div>
          <p>Mesa {pedido.mesa}</p>
        </div>
  
        <p>Pagamento: {pedido.pagamento}</p>
  
        <button
          onClick={() => onAvancar(pedido.id)}
          className="bg-(--primario-700) rounded-lg text-(--terciario-100) py-2 px-1.5"
        >
          Avançar
        </button>
      </div>
    );
  };

export default PedidoCard;