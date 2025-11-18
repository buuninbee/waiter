import addCategoria from "@/assets/icon-adicionar.svg"
import lupa from "@/assets/lupa.svg"
import seta from "@/assets/seta.svg"
import editar from "@/assets/icon-editar.svg"

import config from "@/assets/icon-config-cardapio.svg"

const Cardapio = () => {
  return (
    <main className="grid pb-8 w-full">
        <section className="grid gap-3.5 px-8 py-6 md:py-7 lg:pt-11">
            <div className="grid gap-7">
                <button className="bg-(--primario-700) text-(--terciario-400) gap-3 py-3 text-lg px-1.5 flex justify-center rounded-xl">
                    <img className="w-6" src={addCategoria} alt="" />
                    <p>Adicionar categoria</p>
                </button>

                <div className='flex gap-2 px-2 py-1.5  items-center border rounded-lg'>
                <img className='' src={lupa} alt="" />
                <input className='bg-[--terciario-400] w-full text-base appearance-none focus:outline-0' type="text" placeholder='Digite o número do seu pedido' name="" id="" />
                </div>
            </div>
        </section>
        <section className="grid gap-3.5 px-8 py-6 md:py-7 lg:pt-11">
            <div className="grid border border-(--primario-600) py-2 px-3 rounded-lg">
                <div className="flex justify-between pb-1.5">
                    <h2 className="text-2xl">Bebidas</h2>
                    <button><img src={config} alt="" /></button>
                </div>
                <div className="">
                    <div className="flex justify-between text-(--primario-800)">
                        <img className="w-32 rounded-lg" src="https://tse4.mm.bing.net/th/id/OIP.HLWGfV7i1irY6sqRMzfrPAHaHa?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" srcset="" />
                        <div className="grid">
                            <h3 className="text-lg">Coca-cola de 600ml</h3>
                            <div className="flex text-sm">
                                <button >Preço: R$ 18,00</button>
                                <button className="flex align-middle gap-1 ">
                                    <img className="w-6 h-auto" src={editar} alt="" />
                                    <p>Editar</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button>Ver adicionais</button>
                    </div>
                </div>

                <button className="bg-(--primario-700) text-(--terciario-400) gap-3 py-3 text-lg px-1.5 flex justify-center rounded-xl">
                    <img className="w-6" src={addCategoria} alt="" />
                    <p>Adicionar categoria</p>
                </button>
            </div>
        </section>
    </main>
  )
}

export default Cardapio