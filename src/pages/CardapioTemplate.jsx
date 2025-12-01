// pages/Cardapio.jsx
import MenuSeçao from "@/componentes/MenuSeçao";
import DialogoChamaAtendente from "@/componentes/DialogoChamaAtendente";
import CarrinhoCompra from "@/componentes/CarrinhoCompra";

function CardapioTemplate() {
  // 👉 FUTURAMENTE: isso vira dados do banco (API)
  const entradas = [
    {
      id: 1,
      categoria: "Entradas",
      titulo: "Almoço",
      descricao: "Arroz, feijão, macarrão e salada + acompanhamentos",
      imagem: "/assets/almoco1.png",
      acompanhamentos: [
        "Espetinho de carne",
        "Espetinho de frango",
        "Espetinho de linguiça de porco",
      ],
    },
    {
      id: 2,
      categoria: "Entradas",
      titulo: "Almoço do dia",
      descricao: "Arroz, feijão, macarrão e salada + acompanhamentos",
      imagem: "/assets/almoco2.png",
      acompanhamentos: [
        "Espetinho de carne",
        "Espetinho de frango",
        "Espetinho de linguiça de frango",
      ],
    },
  ];

  const bebidas = [
    {
      id: 3,
      categoria: "Bebidas",
      titulo: "Pepsi",
      descricao: "500 ml",
      imagem: "/assets/bebida2.png",
    },
    {
      id: 4,
      categoria: "Bebidas",
      titulo: "Coca-cola",
      descricao: "500 ml",
      imagem: "/assets/bebida1.png",
    },
    {
      id: 5,
      categoria: "Bebidas",
      titulo: "Heineken",
      descricao: "500 ml",
      imagem: "/assets/bebida3.png",
      acompanhamentos: ["1 litro", "600 ml"],
    },
  ];

  const aperitivos = [
    {
      id: 6,
      categoria: "Aperitivo",
      titulo: "Churrasquinho",
      imagem: "/assets/aperitivo1.png",
      acompanhamentos: [
        "Espetinho de carne",
        "Espetinho de frango",
        "Espetinho de linguiça de porco",
      ],
    },
    {
      id: 7,
      categoria: "Aperitivo",
      titulo: "Torresmo",
      descricao: "Carne de porco",
      imagem: "/assets/aperitivo2.png",
    },
    {
      id: 8,
      categoria: "Aperitivo",
      titulo: "Tilápia frita",
      descricao: "600 g",
      imagem: "/assets/aperitivo3.png",
    },
  ];

  return (
    <main className="">
      <section className="text-center mb-10 px-3.5 py-8 text-(--primario-100) bg-(--primario-900) relative">
        <h1 className="text-3xl font-bold mb-4">
          Olá, sejam bem-vindos ao nosso cardápio
        </h1>
        <h2>Restaurante do seu chico</h2>
      </section>
      <section className="px-6 max-w-4xl mx-auto">
        {/* Navegação rápida */}
        <div className="flex gap-4 justify-center">
          <a href="#entradas" className="text-(--secundario-900) font-semibold">Entradas</a>
          <a href="#bebidas" className="text-(--secundario-900) font-semibold">Bebidas</a>
          <a href="#aperitivos" className="text-(--secundario-900) font-semibold">Aperitivos</a>
        </div>

        <MenuSeçao id="entradas" titulo="Entradas" items={entradas} />
        <MenuSeçao id="bebidas" titulo="Bebidas" items={bebidas} />
        <MenuSeçao id="aperitivos" titulo="Aperitivos" items={aperitivos} />

        <div className="fixed bottom-19 left-5.5">
          <DialogoChamaAtendente />
        </div>
        <div className="fixed right-0 left-0 bottom-0">
          <CarrinhoCompra />
        </div>
      </section>
    </main>

  );
}

export default CardapioTemplate