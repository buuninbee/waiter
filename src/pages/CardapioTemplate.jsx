import MenuSeçao from "@/componentes/MenuSeçao";
import DialogoChamaAtendente from "@/componentes/DialogoChamaAtendente";
import CarrinhoCompra from "@/componentes/CarrinhoCompra";
import CardapioContext from "@/context/CardapioContext";
import { useContext } from "react";

function CardapioTemplate() {
  const entradas = [
    {
      id: 1,
      categoria: "Entradas",
      titulo: "Almoço",
      descricao: "Arroz, feijão, macarrão e salada + acompanhamentos",
      imagem: "/assets/almoco1.png",
      preco: 24.90,
      acompanhamentos: ["Espetinho de carne", "Espetinho de frango", "Linguiça"],
    },
    {
      id: 2,
      categoria: "Entradas",
      titulo: "Almoço do dia",
      descricao: "Arroz, feijão, macarrão e salada",
      imagem: "/assets/almoco2.png",
      preco: 22.90,
      acompanhamentos: ["Carne", "Frango"],
    },
    {
      id: 3,
      categoria: "Entradas",
      titulo: "Feijoada",
      descricao: "Feijão preto, arroz, couve e farofa",
      imagem: "/assets/feijoada.png",
      preco: 29.90,
    },
    {
      id: 4,
      categoria: "Entradas",
      titulo: "Strogonoff de Frango",
      descricao: "Acompanha arroz e batata palha",
      imagem: "/assets/strogonoff.png",
      preco: 27.90,
    },
    {
      id: 5,
      categoria: "Entradas",
      titulo: "Parmegiana",
      descricao: "Carne empanada com queijo",
      imagem: "/assets/parmegiana.png",
      preco: 31.90,
    },
    {
      id: 6,
      categoria: "Entradas",
      titulo: "Macarrão à Bolonhesa",
      descricao: "Massa com molho de carne",
      imagem: "/assets/macarrao.png",
      preco: 23.90,
    },
    {
      id: 7,
      categoria: "Entradas",
      titulo: "Frango Grelhado",
      descricao: "Acompanha legumes e arroz",
      imagem: "/assets/frango.png",
      preco: 25.90,
    },
  ];
  
  const bebidas = [
    { id: 8, categoria: "Bebidas", titulo: "Pepsi", descricao: "500 ml", imagem: "/assets/bebida2.png", preco: 6.50 },
    { id: 9, categoria: "Bebidas", titulo: "Coca-cola", descricao: "500 ml", imagem: "/assets/bebida1.png", preco: 7.00 },
    { id: 10, categoria: "Bebidas", titulo: "Heineken", descricao: "500 ml", imagem: "/assets/bebida3.png", preco: 12.00 },
    { id: 11, categoria: "Bebidas", titulo: "Suco Natural", descricao: "500 ml", imagem: "/assets/suco.png", preco: 8.00 },
    { id: 12, categoria: "Bebidas", titulo: "Água Sem Gás", descricao: "500 ml", imagem: "/assets/agua.png", preco: 4.00 },
    { id: 13, categoria: "Bebidas", titulo: "Guaraná Antarctica", descricao: "500 ml", imagem: "/assets/guarana.png", preco: 6.50 },
    { id: 14, categoria: "Bebidas", titulo: "Energético", descricao: "473 ml", imagem: "/assets/energetico.png", preco: 14.00 },
  ];
  

  const aperitivos = [
    {
      id: 15,
      categoria: "Aperitivo",
      titulo: "Churrasquinho",
      imagem: "/assets/aperitivo1.png",
      preco: 18.90,
      acompanhamentos: ["Espetinho de carne", "Espetinho de frango"],
    },
    {
      id: 16,
      categoria: "Aperitivo",
      titulo: "Torresmo",
      descricao: "Carne de porco crocante",
      imagem: "/assets/aperitivo2.png",
      preco: 16.50,
    },
    {
      id: 17,
      categoria: "Aperitivo",
      titulo: "Tilápia frita",
      descricao: "600 g",
      imagem: "/assets/aperitivo3.png",
      preco: 34.90,
    },
    {
      id: 18,
      categoria: "Aperitivo",
      titulo: "Batata Frita",
      descricao: "Porção média",
      imagem: "/assets/batata.png",
      preco: 14.90,
    },
    {
      id: 19,
      categoria: "Aperitivo",
      titulo: "Calabresa Acebolada",
      descricao: "Porção 500 g",
      imagem: "/assets/calabresa.png",
      preco: 19.90,
    },
    {
      id: 20,
      categoria: "Aperitivo",
      titulo: "Pastéis",
      descricao: "6 unidades",
      imagem: "/assets/pasteis.png",
      preco: 17.90,
    },
    {
      id: 21,
      categoria: "Aperitivo",
      titulo: "Isca de Frango",
      descricao: "Empanado crocante",
      imagem: "/assets/isca.png",
      preco: 22.90,
    },
  ];

  const {name} = useContext(CardapioContext)

  return (
    <main className="">
      <section className="text-center mb-10 px-3.5 py-8 text-(--primario-100) bg-(--primario-900) relative">
        <h1 className="text-3xl font-bold mb-4">
          Olá, sejam bem-vindos ao nosso cardápio
        </h1>
        <h2>Restaurante do seu chico {name}</h2>
      </section>
      <section className="px-6 max-w-4xl mx-auto pb-17">
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