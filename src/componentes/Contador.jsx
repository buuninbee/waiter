import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Counter({ onChange, className }) {
  const [qty, setQty] = useState(1);

  const update = (newValue) => {
    if (newValue < 1) return;      // trava no mínimo 1
    setQty(newValue);
    onChange?.(newValue);          // envia valor para o pai/backend
  };

  return (
    <div className={cn(`flex items-center border rounded-md`,  className)}>
    <button onClick={() => update(qty - 1)} className="size-10">−</button>

    <span className="h-10 w-16 flex justify-center items-center">
      {qty}
    </span>

    <button onClick={() => update(qty + 1)} className="size-10">+</button>
    </div>
  );
}
