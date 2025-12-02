"use client";


import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardAction, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableRow, TableCell, TableHead, TableHeader} from "@/components/ui/table";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Dashboard() {
  const data = [
    { name: "01 Ago", uv: 12, pv: 20, amt: 320 },
    { name: "02 Ago", uv: 8,  pv: 15, amt: 210 },
    { name: "03 Ago", uv: 25, pv: 40, amt: 780 },
    { name: "04 Ago", uv: 34, pv: 55, amt: 1100 },
    { name: "05 Ago", uv: 15, pv: 22, amt: 350 },
    { name: "06 Ago", uv: 50, pv: 80, amt: 1850 },
    { name: "07 Ago", uv: 60, pv: 95, amt: 2200 },  // pico forte
    { name: "08 Ago", uv: 18, pv: 28, amt: 460 },
    { name: "09 Ago", uv: 10, pv: 18, amt: 280 },
    { name: "10 Ago", uv: 42, pv: 70, amt: 1600 },
    { name: "11 Ago", uv: 45, pv: 75, amt: 1700 },
    { name: "12 Ago", uv: 6,  pv: 10, amt: 140 },   // dia fraco
    { name: "13 Ago", uv: 55, pv: 90, amt: 2100 },
    { name: "14 Ago", uv: 58, pv: 96, amt: 2280 },
    { name: "15 Ago", uv: 20, pv: 33, amt: 600 },
    
    // Continuação com variação realista
    { name: "16 Ago", uv: 13, pv: 22, amt: 340 },
    { name: "17 Ago", uv: 70, pv: 110, amt: 2600 }, // mega pico
    { name: "18 Ago", uv: 32, pv: 52, amt: 1000 },
    { name: "19 Ago", uv: 28, pv: 45, amt: 880 },
    { name: "20 Ago", uv: 14, pv: 23, amt: 360 },
    { name: "21 Ago", uv: 67, pv: 105, amt: 2450 },
    { name: "22 Ago", uv: 75, pv: 120, amt: 2800 }, // muito forte
    { name: "23 Ago", uv: 21, pv: 35, amt: 670 },
    { name: "24 Ago", uv: 18, pv: 28, amt: 490 },
    { name: "25 Ago", uv: 48, pv: 79, amt: 1650 },
    { name: "26 Ago", uv: 52, pv: 85, amt: 1780 },
    { name: "27 Ago", uv: 9,  pv: 15, amt: 210 },   // bem fraco
    { name: "28 Ago", uv: 61, pv: 100, amt: 2300 },
    { name: "29 Ago", uv: 65, pv: 108, amt: 2450 },
    { name: "30 Ago", uv: 80, pv: 130, amt: 3200 }, // estourado final do mês
    { name: "31 Ago", uv: 17, pv: 26, amt: 430 },   // volta ao normal
  
    // Setembro
    { name: "01 Set", uv: 20, pv: 32, amt: 580 },
    { name: "02 Set", uv: 12, pv: 19, amt: 290 },
    { name: "03 Set", uv: 55, pv: 90, amt: 2100 },
    { name: "04 Set", uv: 62, pv: 102, amt: 2400 },
    { name: "05 Set", uv: 30, pv: 50, amt: 980 },
    { name: "06 Set", uv: 6,  pv: 9,  amt: 120 },   // dia morto
    { name: "07 Set", uv: 78, pv: 125, amt: 2980 }, // feriado forte
    { name: "08 Set", uv: 40, pv: 66, amt: 1400 },
    { name: "09 Set", uv: 22, pv: 34, amt: 610 },
    { name: "10 Set", uv: 68, pv: 112, amt: 2600 },
    { name: "11 Set", uv: 71, pv: 118, amt: 2750 },
    { name: "12 Set", uv: 15, pv: 24, amt: 380 },
    { name: "13 Set", uv: 50, pv: 85, amt: 1820 },
    { name: "14 Set", uv: 54, pv: 90, amt: 1950 },
    { name: "15 Set", uv: 60, pv: 98, amt: 2200 },
    { name: "16 Set", uv: 12, pv: 18, amt: 260 },   // queda forte
    { name: "17 Set", uv: 65, pv: 110, amt: 2500 },
    { name: "18 Set", uv: 72, pv: 122, amt: 2900 },
    { name: "19 Set", uv: 25, pv: 40, amt: 780 }
  ];
  
  
  
  const pedidos = [
    {
      id_produto: 1,
      denominacao: "Hambúrguer Artesanal",
      quantidade: 2,
      data: "12/08/2025 12:20",
      preco: 32.90,
      mesa: 5,
      status: "pendente"
    },
    {
      id_produto: 2,
      denominacao: "Batata Frita",
      quantidade: 1,
      data: "12/08/2025 12:23",
      preco: 12.00,
      mesa: 6,
      status: "preparando"
    },
    {
      id_produto: 3,
      denominacao: "Coca-Cola Lata",
      quantidade: 3,
      data: "12/08/2025 12:25",
      preco: 6.50,
      mesa: 3,
      status: "entregue"
    },
    {
      id_produto: 4,
      denominacao: "Pizza Calabresa",
      quantidade: 1,
      data: "12/08/2025 12:28",
      preco: 49.90,
      mesa: 6,
      status: "pendente"
    },
    {
      id_produto: 5,
      denominacao: "Lasanha à Bolonhesa",
      quantidade: 1,
      data: "12/08/2025 12:30",
      preco: 29.90,
      mesa: 5,
      status: "preparando"
    },
    {
      id_produto: 6,
      denominacao: "Suco Natural de Laranja",
      quantidade: 2,
      data: "12/08/2025 12:33",
      preco: 9.90,
      mesa: 3,
      status: "entregue"
    },
    {
      id_produto: 7,
      denominacao: "Pastel de Carne",
      quantidade: 4,
      data: "12/08/2025 12:35",
      preco: 7.00,
      mesa: 6,
      status: "pendente"
    },
    {
      id_produto: 8,
      denominacao: "Café Expresso",
      quantidade: 1,
      data: "12/08/2025 12:38",
      preco: 5.00,
      mesa: 5,
      status: "entregue"
    },
    {
      id_produto: 9,
      denominacao: "Torta de Limão",
      quantidade: 1,
      data: "12/08/2025 12:40",
      preco: 14.90,
      mesa: 3,
      status: "preparando"
    },
    {
      id_produto: 10,
      denominacao: "Salada Caesar",
      quantidade: 1,
      data: "12/08/2025 12:42",
      preco: 22.50,
      mesa: 6,
      status: "entregue"
    },
    {
      id_produto: 11,
      denominacao: "Água com Gás",
      quantidade: 1,
      data: "12/08/2025 12:45",
      preco: 4.50,
      mesa: 5,
      status: "pendente"
    },
    {
      id_produto: 12,
      denominacao: "Milkshake de Chocolate",
      quantidade: 2,
      data: "12/08/2025 12:47",
      preco: 18.90,
      mesa: 3,
      status: "preparando"
    },
    {
      id_produto: 13,
      denominacao: "Espetinho de Frango",
      quantidade: 3,
      data: "12/08/2025 12:50",
      preco: 8.90,
      mesa: 6,
      status: "pendente"
    },
    {
      id_produto: 14,
      denominacao: "Suco de Maracujá",
      quantidade: 1,
      data: "12/08/2025 12:52",
      preco: 9.50,
      mesa: 5,
      status: "entregue"
    },
    {
      id_produto: 15,
      denominacao: "Picanha na Chapa",
      quantidade: 1,
      data: "12/08/2025 12:55",
      preco: 69.90,
      mesa: 3,
      status: "preparando"
    }
  ];
  

  return (
    <div className="flex pl-24 flex-col gap-6 p-6">
      <h1 className="text-2xl lg:text-4xl font-bold text-(--primario-800)">Dashboard de Vendas</h1>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      <Card className="@container/card bg-linear-to-b from-(--primario-700) via-(--primario-800)  to-(--primario-900) text-(--terciario-200)">
        <CardHeader>
          <CardDescription className='text-(--terciario-200) text-xl lg:text-2xl font-bold'>Produtos</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            234
          </CardTitle>
        </CardHeader>
      </Card>
      <Card className="@container/card bg-linear-to-b from-(--primario-700) via-(--primario-800)  to-(--primario-900) text-(--terciario-200)">
        <CardHeader>
          <CardDescription className='text-(--terciario-200) text-xl lg:text-2xl font-bold'>Faturamento</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            R$1,250.00
          </CardTitle>
          <CardAction>
            <Badge className='bg-(--terciario-300) text-(--primario-800)' variant="outline">
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
      </Card>
      <Card className="@container/card bg-linear-to-b from-(--primario-700) via-(--primario-800)  to-(--primario-900) text-(--terciario-200)">
        <CardHeader>
          <CardDescription className='text-(--terciario-200) text-xl lg:text-2xl font-bold'>Quantidade de vendas</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            5,678
          </CardTitle>
          <CardAction>
            <Badge className='bg-(--terciario-300) text-(--primario-800)' variant="outline">
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>

      </Card>
      <Card className="@container/card bg-linear-to-b from-(--primario-700) via-(--primario-800)  to-(--primario-900) text-(--terciario-200)">
        <CardHeader>
          <CardDescription className='text-(--terciario-200) text-xl lg:text-2xl font-bold'>Ticked medio</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            R$ 42,00
          </CardTitle>
          <CardAction>
            <Badge className='bg-(--terciario-300) text-(--primario-800)' variant="outline">
              +4.5%
            </Badge>
          </CardAction>
        </CardHeader>
      </Card>
      </div>

      {/* Gráfico */}
      <Card className="w-full bg-linear-to-b from-(--primario-700) via-(--primario-900) to-[#011411]">
        <CardHeader>
          <CardTitle className='text-(--terciario-300) lg:text-2xl'>Vendas Mensais</CardTitle>
        </CardHeader>
        <CardContent>
        <div className="  w-full h-[400px] min-w-0">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 20,
                right: 0,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid stroke="#1a3d1a" strokeDasharray="3 3" />
              <XAxis stroke="#c7e5c7" dataKey="name" />
              <YAxis stroke="#c7e5c7" />
              <Tooltip />

              <Area type="monotone" name="Número de pedidos feitos no dia" dataKey="uv" stackId="1" stroke="#3b82f6" fill="#3b82f6" />
              <Area type="monotone" name="Quantidade total de itens vendidos" dataKey="pv" stackId="1" stroke="#a3e635" fill="#a3e635"  />
              <Area type="monotone" name="Faturamento do dia" dataKey="amt" stackId="1" stroke="#22c55e" fill="#22c55e" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        </CardContent>
      </Card>

      {/* Tabela simples */}
      <Card className='bg-(--primario-900) '>
        <CardHeader>
          <CardTitle className='text-(--terciario-300) lg:text-2xl'>Últimos pedidos</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
          <TableHeader>
            <TableRow className='*:text-(--primario-50) *:text-center'>
              <TableHead>ID Produto</TableHead>
              <TableHead>Denominação</TableHead>
              <TableHead>Quantidade</TableHead>
              <TableHead>Data</TableHead>
              <TableHead>Preço</TableHead>
              <TableHead>Mesa</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
            <TableBody>
              {
                pedidos.map(({id_produto,denominacao,quantidade,data,preco,mesa,status}) => {
                  return(
                  <TableRow  className='*:text-(--terciario-50) *:text-center'>
                   <TableCell>{id_produto}</TableCell>
                   <TableCell>{denominacao}</TableCell>
                   <TableCell>{quantidade}</TableCell>
                   <TableCell>{data}</TableCell>
                   <TableCell>{preco}</TableCell>
                   <TableCell>{mesa}</TableCell>
                   <TableCell>{status}</TableCell>
                  </TableRow>
                  )
                })
              }
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
