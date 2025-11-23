"use client"
import React from "react";

export default function InputPreco({ value, onChange }) {

    const [localValue, setLocalValue] = React.useState(value || "");

    function formatar(valor) {
      const apenasNumeros = valor.replace(/\D/g, "");
      const numero = (Number(apenasNumeros) / 100).toFixed(2);
      return numero.replace(".", ",");
    }
  
    function handleChange(e) {
      const valorFormatado = formatar(e.target.value);
      setLocalValue(valorFormatado);
      onChange(valorFormatado);   // <<====== manda pro PAI
    }
  return (
    <div className="grid gap-1.5">
    <label htmlFor="">Preço</label>
    <input
      type="text"
      value={localValue}
      onChange={handleChange}
      placeholder="0,00"
      className="w-full rounded-md border px-3 py-2"
    />
    </div>
  );
}
