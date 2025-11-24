import addCategoria from "@/assets/icon-adicionar.svg"
import lupa from "@/assets/lupa.svg"
// import editar from "@/assets/icon-editar.svg"

import config from "@/assets/icon-config-cardapio.svg"
import ProdutosCategoria from "@/componentes/AcordianCategoria"

const Cardapio = () => {
  return (
    <main className="grid pb-8 md:pl-10 md:pb-0 md:w-[1200px] md:ml-auto md:mr-auto">
        <section className="grid gap-3.5 px-8 py-6 md:py-7 lg:pt-11">
            <div className="grid gap-7">
                <button className="bg-(--primario-700) text-(--terciario-400) gap-3 py-3 text-lg px-1.5 flex justify-center rounded-xl cursor-pointer">
                    <img className="w-6" src={addCategoria} alt="" />
                    <p>Adicionar categoria</p>
                </button>

                <div className='flex gap-2 px-2 py-1.5  items-center border rounded-lg'>
                <img className='' src={lupa} alt="" />
                <input className='bg-[--terciario-400] w-full text-base appearance-none focus:outline-0' type="text" placeholder='Digite o número do seu pedido' name="" id="" />
                </div>
            </div>
        </section>
        <section className="grid gap-3.5 px-8 py-6 md:py-7 lg:pt-11 md:gap-5">
            <div className="grid border border-(--primario-600) py-2 px-3 rounded-lg">
                <div className="flex justify-between pb-1.5">
                    <h2 className="text-2xl">Bebidas</h2>
                    <button><img src={config} alt="" /></button>
                </div>

                <ProdutosCategoria />

                <button className="bg-(--primario-700) text-(--terciario-400) gap-3 py-3 text-lg px-1.5 flex justify-center rounded-xl cursor-pointer">
                    <img className="w-6" src={addCategoria} alt="" />
                    <p>Adicionar produto</p>
                </button>
            </div>

            <div className="grid border border-(--primario-600) py-2 px-3 rounded-lg">
                <div className="flex justify-between pb-1.5">
                    <h2 className="text-2xl">Petisco</h2>
                    <button><img src={config} alt="" /></button>
                </div>

                <ProdutosCategoria />

                <button className="bg-(--primario-700) text-(--terciario-400) gap-3 py-3 text-lg px-1.5 flex justify-center rounded-xl cursor-pointer">
                    <img className="w-6" src={addCategoria} alt="" />
                    <p>Adicionar produto</p>
                </button>
            </div>

            <div className="grid border border-(--primario-600) py-2 px-3 rounded-lg">
                <div className="flex justify-between pb-1.5">
                    <h2 className="text-2xl">Almoço</h2>
                    <button><img src={config} alt="" /></button>
                </div>

                <ProdutosCategoria />

                <button className="bg-(--primario-700) text-(--terciario-400) gap-3 py-3 text-lg px-1.5 flex justify-center rounded-xl cursor-pointer">
                    <img className="w-6" src={addCategoria} alt="" />
                    <p>Adicionar produto</p>
                </button>
            </div>
        </section>
    </main>
  )
}

export default Cardapio