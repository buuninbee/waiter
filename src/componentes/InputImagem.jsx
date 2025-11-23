"use client"
import { HandPlatter } from "lucide-react";
import { useState } from "react"
import { Trash2, Image as ImageIcon } from "lucide-react";

function InputImagem() {
  const [preview, setPreview] = useState(null);

  function handleImage(e) {
    const file = e.target.files[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));
  }

  function limparImagem() {
    setPreview(null);
  }

  return (

<div className="space-y-3 grid">
    <h3 className="">Coloque uma imagem do seu produto</h3>

    <div className="grid justify-center">
        {!preview ? (
            <div className="grid ">
                <label
                    className="
                    flex flex-col items-center justify-center 
                    w-70 h-40 border-2 border-dashed rounded-xl
                    cursor-pointer transition
                    text-(--primario-600)
                    hover:border-(--primario-800)
                    hover:text-(--primario-800)
                    bg-(--primario-100)/60 hover:bg-(--primario-50)/40
                    "
                >
                    <HandPlatter className="w-15 h-15 opacity-80 mb-1" />
                    <span className="text-xs">Escolher imagem</span>

                    <input
                    type="file"
                    accept="image/*"
                    onChange={handleImage}
                    className="hidden"
                    />
                </label>
            </div>
    
        ) : (

        /* Preview da imagem */
        <div className="relative center w-40 h-40 group ">
            <img
            src={preview}
            alt="Preview"
            className="w-full h-full object-cover rounded-xl border shadow-sm"
            />

            {/* Botão de remover */}
            <button
            type="button"
            onClick={limparImagem}
            className="
                absolute top-2 right-2 p-1 rounded-full 
                bg-white/90 hover:bg-red-500 hover:text-white 
                shadow opacity-0 group-hover:opacity-100 
                transition
            "
            >
            <HandPlatter className="" />
            </button>
        </div>
        )}
    </div>

{/* Informações */}
<div className="grid justify-center text-(--terciario-800) text-xs leading-tight">
  <span>Formatos: PNG, JPG, JPEG, WEBP</span>
  <span>Peso máximo: 1MB</span>
  <span>Resolução ideal: 200px</span>
</div>

</div>
  )
}

export default InputImagem;
