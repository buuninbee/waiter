import { useState } from "react";
import { cn } from "@/lib/utils"
import { Link } from "lucide-react";


function Copiatexto({ texto, className }) {
  const [copied, setCopied] = useState(false);

  const copiaTexto = async () => {
    try {
      await navigator.clipboard.writeText(texto);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Erro ao copiar:", err);
    }
  };

  return (
    <span
      onClick={copiaTexto}
      className={cn("flex justify-between cursor-pointer active:scale-95 transition select-none", className)}
    >
      {copied ? "Copiado!" : texto}
      <Link className="text-(--primario-200)" />
    </span>
  );
}

export default Copiatexto;