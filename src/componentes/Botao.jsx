import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

const defaultButtonClasses = "py-2 px-4 text-lg rounded-sm md:text-xl";

const variants = {
  'primario': "bg-(--primario-700) text-(--terciario-400) cursor-pointer hover:bg-(--primario-900)",
  'secundario': "bg-(--terciario-400) text-(--primario-700) border border-(--primario700) hover:bg-(--terciario-200) hover:text-(--primario-500)"
};


const Botao = ({text, path, variant = "primario", img}) => {
  return (
    <button className={cn(defaultButtonClasses, variants[variant])}>
        {
            img ? 
            <Link to={path}>
                <img src={img} alt={text} />
            {text}
            </Link> : 
            <Link to={path}>{text}</Link>
        }
        
    </button>
  )
}

export default Botao