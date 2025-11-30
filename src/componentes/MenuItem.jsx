import fotocarda from "@/assets/imagem-padaro-cadarpio.svg"
import Botao from "./Botao";


function MenuItem({ item }) {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 flex flex-col gap-3">
        <h2 className="text-lg font-semibold">{item.categoria}</h2>
  
        <div className="block m-auto">
          <img src={item.image ? item.image : fotocarda} alt={item.titulo} className=" w-min-[300px] min-h-[300px] rounded-md" />
        </div>
  
        <div>
          <h3 className="text-xl font-semibold">{item.titulo}</h3>
          {item.descricao && (
            <p className="text-gray-600 text-sm">{item.descricao}</p>
          )}
        </div>
  
        {item.acompanhamentos?.length > 0 && (
          <div>
            <h4 className="font-semibold mb-1">Acompanhamento</h4>
            <div className="flex flex-col gap-1">
              {item.acompanhamentos.map((ac, idx) => (
                <label key={idx} className="flex items-center gap-2">
                  <input type="checkbox" />
                  {ac}
                </label>
              ))}
            </div>
          </div>
        )}
  
        <button className="bg-(--primario-700) text-(--terciario-400) cursor-pointer hover:bg-(--primario-900) py-2 px-4 text-lg rounded-sm md:text-xl">Adicionar ao carrinho</button>
      </div>
    );
  }

  export default MenuItem