import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function Seletor({items = [], onChange}) {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="selecione um item" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
            {items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                {item.label}
                </SelectItem>
            ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default Seletor
