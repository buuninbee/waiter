import meuspedidos from "../assets/meusPedidos-icon.svg"
import novoPedido from "../assets/novoPedido-icon.svg"
import cardapio from "../assets/cardapio-icon.svg"
import config from "../assets/config-icon.svg"

import { useState } from "react";

export default function MobileBottomNav() {
  const [value, setValue] = useState(0);

  const items = [
    { label: "Cardápio", icon: cardapio },
    { label: "Meus pedidos", icon: meuspedidos },
    { label: "Novo pedido", icon: novoPedido},
    { label: "Configuração", icon: config },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 rounded-t-lg bg-(--primario-800) shadow-md">
      <div className="flex justify-around py-2">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => setValue(index)}
            className={`flex flex-col items-center text-sm transition-all
              ${value === index ? "text-(--primario-400)" : "text-(--terciario-300)"}`}
          >
            <img className="" src={item.icon} alt="" srcset="" />
            <span
              className={`mt-1 ${
                value === index ? "font-semibold" : "font-normal"
              }`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

console.log(meuspedidos)