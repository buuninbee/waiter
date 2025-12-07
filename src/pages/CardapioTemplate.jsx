import MenuSeçao from "@/componentes/MenuSeçao";
import DialogoChamaAtendente from "@/componentes/DialogoChamaAtendente";
import CarrinhoCompra from "@/componentes/CarrinhoCompra";

function CardapioTemplate() {
  const entradas = [
    {
      id: 1,
      categoria: "Entradas",
      titulo: "Almoço",
      descricao: "Arroz, feijão, macarrão e salada + acompanhamentos",
      imagem: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      preco: 24.90,
      quantidade: 1,
      acompanhamentos: ["Espetinho de carne", "Espetinho de frango", "Linguiça"],
    },
    {
      id: 2,
      categoria: "Entradas",
      titulo: "Almoço do dia",
      descricao: "Arroz, feijão, macarrão e salada",
      imagem: "https://img.freepik.com/fotos-gratis/xatrade-de-marmitas-com-sabor-tipico-brasileiro-e-a-base-da-comida-brasileira-arroz-e-feijao_317111-1183.jpg",
      preco: 22.90,
      quantidade: 1,
      acompanhamentos: ["Carne", "Frango"],
    },
    {
      id: 3,
      categoria: "Entradas",
      titulo: "Feijoada",
      descricao: "Feijão preto, arroz, couve e farofa",
      imagem: "https://th.bing.com/th/id/R.eaeb7da9bd7462940f0b07dcb1b50f02?rik=fwx22JblWyPwow&pid=ImgRaw&r=0",
      preco: 29.90,
      quantidade: 1,
    },
    {
      id: 4,
      categoria: "Entradas",
      titulo: "Strogonoff de Frango",
      descricao: "Acompanha arroz e batata palha",
      imagem: "https://tudodereceitas.com.br/wp-content/uploads/2024/11/Strogonoff-de-frango-.jpeg",
      preco: 27.90,
      quantidade: 1,
    },
    {
      id: 5,
      categoria: "Entradas",
      titulo: "Parmegiana",
      descricao: "Carne empanada com queijo",
      imagem: "https://th.bing.com/th/id/R.cd49ea1e4bb22d9cf9bfc372dff3e6e5?rik=ElXpQ7j4W4gvlQ&riu=http%3a%2f%2fonthelist.com.br%2fuploads%2f2014%2f07%2fMilanesa-Parmegiana.jpg&ehk=OtZqCX%2fY43J8uypoKxPHuJQiZkYhJFUu7SMOh6gBqZ4%3d&risl=&pid=ImgRaw&r=0",
      preco: 31.90,
      quantidade: 1,
    },
    {
      id: 6,
      categoria: "Entradas",
      titulo: "Macarrão à Bolonhesa",
      descricao: "Massa com molho de carne",
      imagem: "https://tse4.mm.bing.net/th/id/OIP.t8YneLjpyUTZOmgnvYZdtwHaFO?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
      preco: 23.90,
      quantidade: 1,
    },
    {
      id: 7,
      categoria: "Entradas",
      titulo: "Frango Grelhado",
      descricao: "Acompanha legumes e arroz",
      imagem: "https://bellami.com.br/2017/wp-content/uploads/2017/01/file-de-frango-grelhado-1.jpg",
      preco: 25.90,
      quantidade: 1,
    },
  ];
  
  
  const bebidas = [
    {
      id: 8,
      categoria: "Bebidas",
      titulo: "Pepsi",
      descricao: "500 ml",
      imagem: "https://i0.wp.com/dailymarket.com.gt/wp-content/uploads/2022/10/901146-PEPSI-LATA.jpg?fit=1040%2C1040&ssl=1",
      preco: 6.50,
      quantidade: 1,
    },
    {
      id: 9,
      categoria: "Bebidas",
      titulo: "Coca-cola",
      descricao: "500 ml",
      imagem: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97",
      preco: 7.00,
      quantidade: 1,
    },
    {
      id: 10,
      categoria: "Bebidas",
      titulo: "Heineken",
      descricao: "500 ml",
      imagem: "https://www.everythingwine.ca/media/catalog/product/3/3/337949_heinekan_tc_new_version.jpg",
      preco: 12.00,
      quantidade: 1,
    },
    {
      id: 11,
      categoria: "Bebidas",
      titulo: "Suco Natural Marácuja",
      descricao: "500 ml",
      imagem: "https://tse4.mm.bing.net/th/id/OIP.Khd2_6HbShAMSDniCy9q1wHaHa",
      preco: 8.00,
      quantidade: 1,
    },
    {
      id: 12,
      categoria: "Bebidas",
      titulo: "Água Sem Gás",
      descricao: "500 ml",
      imagem: "https://images.unsplash.com/photo-1616118132534-381148898bb4",
      preco: 4.00,
      quantidade: 1,
    },
    {
      id: 13,
      categoria: "Bebidas",
      titulo: "Guaraná Antarctica",
      descricao: "500 ml",
      imagem: "https://dcdn-us.mitiendanube.com/stores/005/069/840/products/1-refrigerante-guarana-antarctica-zero-lata-350ml-b5225835a0532a890717304348710890-1024-1024.png",
      preco: 6.50,
      quantidade: 1,
    },
    {
      id: 14,
      categoria: "Bebidas",
      titulo: "Energético Red Bull",
      descricao: "355 ml",
      imagem: "https://th.bing.com/th/id/R.aabea5fa6b63d7a8c95c35488267546a?rik=P1u1RhFR5Zy%2feQ&pid=ImgRaw&r=0",
      preco: 14.00,
      quantidade: 1,
    },
  ];
  
  
  const aperitivos = [
    {
      id: 15,
      categoria: "Aperitivo",
      titulo: "Churrasquinho",
      imagem: "https://tse4.mm.bing.net/th/id/OIP.LaC48Gk1R169tj4YoLfn8QHaE7?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
      preco: 18.90,
      quantidade: 1,
      acompanhamentos: ["Espetinho de carne", "Espetinho de frango"],
    },
    {
      id: 16,
      categoria: "Aperitivo",
      titulo: "Torresmo",
      descricao: "Carne de porco crocante",
      imagem: "https://tse3.mm.bing.net/th/id/OIP.rED9hEmbEIIPaoxooVaBVgHaEK?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
      preco: 16.50,
      quantidade: 1,
    },
    {
      id: 17,
      categoria: "Aperitivo",
      titulo: "Tilápia frita",
      descricao: "600 g",
      imagem: "https://receitasdothales.com/wp-content/uploads/2023/03/file-de-tilapia-frito.jpg",
      preco: 34.90,
      quantidade: 1,
    },
    {
      id: 18,
      categoria: "Aperitivo",
      titulo: "Batata Frita",
      descricao: "Porção média",
      imagem: "https://th.bing.com/th/id/R.9bfbfc3c085f85cff5f8c571ce5e6f46?rik=HJxlurDItzrchA&riu=http%3a%2f%2fs2.glbimg.com%2fD7CDxKqnsn1t5wHozJeYgJHmwMs%3d%2fsmart%2fe.glbimg.com%2fog%2fed%2ff%2foriginal%2f2015%2f05%2f26%2fthinkstockphotos-177334426.jpg&ehk=2DR%2fAygQ53WT0AhXkI2Oc8C1w66HkumwVeaHcWrrQus%3d&risl=&pid=ImgRaw&r=0",
      preco: 14.90,
      quantidade: 1,
    },
    {
      id: 19,
      categoria: "Aperitivo",
      titulo: "Calabresa Acebolada",
      descricao: "Porção 500 g",
      imagem: "https://manualdohomemmoderno.com.br/files/2020/05/como-fazer-calabresa-acebolada-na-cachaca-petiscos-pra-fazer-em-casa-como-fazer-calabresa-acebolada-na-cachaca-petiscos-pra-fazer-em-casa.jpg",
      preco: 19.90,
      quantidade: 1,
    },
    {
      id: 20,
      categoria: "Aperitivo",
      titulo: "Pastéis",
      descricao: "6 unidades",
      imagem: "https://s2.glbimg.com/sS3P20QS_pQZiVcKDpzSrOxQt8A=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_b58693ed41d04a39826739159bf600a0/internal_photos/bs/2022/A/B/n6cY5FQqK97tiDLvJERQ/pasteeel.jpg",
      preco: 17.90,
      quantidade: 1,
    },
    {
      id: 21,
      categoria: "Aperitivo",
      titulo: "Isca de Frango",
      descricao: "Empanado crocante",
      imagem: "https://folhago.com.br/blogs/receitas-faceis/wp-content/uploads/2021/01/iscas-de-frango-empanado-super-crocante.jpg",
      preco: 22.90,
      quantidade: 1,
    },
  ];
  
  
  return (
    <main className="">
      <section className="text-center mb-10 px-3.5 py-8 text-(--primario-100) bg-(--primario-900) relative">
        <h1 className="text-3xl font-bold mb-4">
          Olá, sejam bem-vindos ao nosso cardápio
        </h1>
        <h2>Restaurante do Sr. Chicó</h2>
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

        <div className="fixed bottom-29 left-5.5">
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