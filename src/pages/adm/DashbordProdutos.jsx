"use client";


import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardAction, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableRow, TableCell, TableHead, TableHeader} from "@/components/ui/table";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ComposedChart, Line, Bar, Legend } from 'recharts';

import QtdVendas from '@/assets/icon-vendas-dashboard.svg'
import Produto from '@/assets/icon-produto-dashboard.svg'
import faturamento from '@/assets/icon-faturamento-dashboard.svg'
import Ticked from '@/assets/icon-ticket-dashboard.svg'



export default function Dashboard() {
  const data = [
    { name: "01 Ago", pedido: 12, itensVendidos: 20, faturamento: 320, categoria: "Lanches" },
    { name: "02 Ago", pedido: 8,  itensVendidos: 15, faturamento: 210, categoria: "Bebidas" },
    { name: "03 Ago", pedido: 25, itensVendidos: 40, faturamento: 780, categoria: "Porções" },
    { name: "04 Ago", pedido: 34, itensVendidos: 55, faturamento: 1100, categoria: "Combos" },
    { name: "05 Ago", pedido: 15, itensVendidos: 22, faturamento: 350, categoria: "Lanches" },
    { name: "06 Ago", pedido: 50, itensVendidos: 80, faturamento: 1850, categoria: "Sobremesas" },
    { name: "07 Ago", pedido: 60, itensVendidos: 95, faturamento: 2200, categoria: "Porções" },
    { name: "08 Ago", pedido: 18, itensVendidos: 28, faturamento: 460, categoria: "Bebidas" },
    { name: "09 Ago", pedido: 10, itensVendidos: 18, faturamento: 280, categoria: "Combos" },
    { name: "10 Ago", pedido: 42, itensVendidos: 70, faturamento: 1600, categoria: "Lanches" },
    { name: "11 Ago", pedido: 45, itensVendidos: 75, faturamento: 1700, categoria: "Sobremesas" },
    { name: "12 Ago", pedido: 6,  itensVendidos: 10, faturamento: 140, categoria: "Bebidas" },
    { name: "13 Ago", pedido: 55, itensVendidos: 90, faturamento: 2100, categoria: "Porções" },
    { name: "14 Ago", pedido: 58, itensVendidos: 96, faturamento: 2280, categoria: "Combos" },
    { name: "15 Ago", pedido: 20, itensVendidos: 33, faturamento: 600, categoria: "Lanches" },
  
    { name: "16 Ago", pedido: 13, itensVendidos: 22, faturamento: 340, categoria: "Sobremesas" },
    { name: "17 Ago", pedido: 70, itensVendidos: 110, faturamento: 2600, categoria: "Lanches" },
    { name: "18 Ago", pedido: 32, itensVendidos: 52, faturamento: 1000, categoria: "Porções" },
    { name: "19 Ago", pedido: 28, itensVendidos: 45, faturamento: 880, categoria: "Combos" },
    { name: "20 Ago", pedido: 14, itensVendidos: 23, faturamento: 360, categoria: "Bebidas" },
    { name: "21 Ago", pedido: 67, itensVendidos: 105, faturamento: 2450, categoria: "Lanches" },
    { name: "22 Ago", pedido: 75, itensVendidos: 120, faturamento: 2800, categoria: "Porções" },
    { name: "23 Ago", pedido: 21, itensVendidos: 35, faturamento: 670, categoria: "Sobremesas" },
    { name: "24 Ago", pedido: 18, itensVendidos: 28, faturamento: 490, categoria: "Bebidas" },
    { name: "25 Ago", pedido: 48, itensVendidos: 79, faturamento: 1650, categoria: "Combos" },
    { name: "26 Ago", pedido: 52, itensVendidos: 85, faturamento: 1780, categoria: "Porções" },
    { name: "27 Ago", pedido: 9,  itensVendidos: 15, faturamento: 210, categoria: "Lanches" },
    { name: "28 Ago", pedido: 61, itensVendidos: 100, faturamento: 2300, categoria: "Sobremesas" },
    { name: "29 Ago", pedido: 65, itensVendidos: 108, faturamento: 2450, categoria: "Porções" },
    { name: "30 Ago", pedido: 80, itensVendidos: 130, faturamento: 3200, categoria: "Combos" },
    { name: "31 Ago", pedido: 17, itensVendidos: 26, faturamento: 430, categoria: "Bebidas" },
  
    { name: "01 Set", pedido: 20, itensVendidos: 32, faturamento: 580, categoria: "Lanches" },
    { name: "02 Set", pedido: 12, itensVendidos: 19, faturamento: 290, categoria: "Sobremesas" },
    { name: "03 Set", pedido: 55, itensVendidos: 90, faturamento: 2100, categoria: "Porções" },
    { name: "04 Set", pedido: 62, itensVendidos: 102, faturamento: 2400, categoria: "Combos" },
    { name: "05 Set", pedido: 30, itensVendidos: 50, faturamento: 980, categoria: "Lanches" },
    { name: "06 Set", pedido: 6,  itensVendidos: 9,  faturamento: 120, categoria: "Bebidas" },
    { name: "07 Set", pedido: 78, itensVendidos: 125, faturamento: 2980, categoria: "Sobremesas" },
    { name: "08 Set", pedido: 40, itensVendidos: 66, faturamento: 1400, categoria: "Porções" },
    { name: "09 Set", pedido: 22, itensVendidos: 34, faturamento: 610, categoria: "Bebidas" },
    { name: "10 Set", pedido: 68, itensVendidos: 112, faturamento: 2600, categoria: "Lanches" },
    { name: "11 Set", pedido: 71, itensVendidos: 118, faturamento: 2750, categoria: "Combos" },
    { name: "12 Set", pedido: 15, itensVendidos: 24, faturamento: 380, categoria: "Sobremesas" },
    { name: "13 Set", pedido: 50, itensVendidos: 85, faturamento: 1820, categoria: "Porções" },
    { name: "14 Set", pedido: 54, itensVendidos: 90, faturamento: 1950, categoria: "Combos" },
    { name: "15 Set", pedido: 60, itensVendidos: 98, faturamento: 2200, categoria: "Lanches" },
    { name: "16 Set", pedido: 12, itensVendidos: 18, faturamento: 260, categoria: "Bebidas" },
    { name: "17 Set", pedido: 65, itensVendidos: 110, faturamento: 2500, categoria: "Sobremesas" },
    { name: "18 Set", pedido: 72, itensVendidos: 122, faturamento: 2900, categoria: "Porções" },
    { name: "19 Set", pedido: 25, itensVendidos: 40, faturamento: 780, categoria: "Lanches" },
  ];
  
  const dataCategoria = [
    {
      name: 'Lanches',
      uv: 590,
      pv: 800,
      amt: 1400,
    },
    {
      name: 'Bebidas',
      uv: 868,
      pv: 967,
      amt: 1506,
    },
    {
      name: 'Combos',
      uv: 1397,
      pv: 1098,
      amt: 989,
    },
    {
      name: 'Porções',
      uv: 1480,
      pv: 1200,
      amt: 1228,
    },
    {
      name: 'Aperitivos',
      uv: 1520,
      pv: 1108,
      amt: 1100,
    },
    {
      name: 'Sobremesas',
      uv: 1400,
      pv: 680,
      amt: 1700,
    },
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
    <main className="grid pb-8 w-full md:pl-10 md:pb-0">
      <div className="flex flex-col gap-6 p-6 ">
        <h1 className="text-2xl lg:text-4xl font-bold text-(--primario-800)">Dashboard de Vendas</h1>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="@container/card bg-linear-to-b from-(--primario-700) via-(--primario-800)  to-(--primario-900) text-(--terciario-200)">
        <div className="flex px-6 lg:px-10">
          <div className="bg-(--primario-50) max-w-max rounded-xl">
            <img className="w-20" src={Produto} alt="" />
          </div>
            <CardHeader>
              <CardDescription className='text-(--terciario-200) text-xl lg:text-2xl font-bold'>Produtos</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                234
              </CardTitle>
            </CardHeader>
        </div>
        </Card>
        <Card className="@container/card bg-linear-to-b from-(--primario-700) via-(--primario-800)  to-(--primario-900) text-(--terciario-200)">
        <div className="flex px-6 lg:px-10">
          <div className="bg-(--primario-50) px-2.5 py-2 max-w-max rounded-xl">
            <img className="w-17" src={faturamento} alt="" />
          </div>
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
        </div>
        </Card>

        <Card className="@container/card bg-linear-to-b from-(--primario-700) via-(--primario-800)  to-(--primario-900) text-(--terciario-200)">
        <div className="flex px-6 lg:px-10">
          <div className="bg-(--primario-50) px-2.5 py-2.5 max-w-max rounded-xl">
            <img className="w-19" src={QtdVendas} alt="" />
          </div>
          <CardHeader>
            <CardDescription className='text-(--terciario-200) text-xl lg:text-2xl w-2xs font-bold'>Qtd vendas</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            5,678
            </CardTitle>
            <CardAction>
              <Badge className='bg-(--terciario-300) text-(--primario-800)' variant="outline">
                +4.5%
              </Badge>
            </CardAction>
          </CardHeader>
        </div>
        </Card>
        

        <Card className="@container/card bg-linear-to-b from-(--primario-700) via-(--primario-800)  to-(--primario-900) text-(--terciario-200)">
        <div className="flex px-6 lg:px-10">
        <div className="bg-(--primario-50) px-2.5 py-2 max-w-max rounded-xl">
            <img className="w-17" src={Ticked} alt="" />
          </div>
        <CardHeader>
            <CardDescription className='text-(--terciario-200) w-2xs text-xl lg:text-2xl font-bold'>Ticked medio</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              R$ 42,00
            </CardTitle>
          </CardHeader>
        </div>
        </Card>
        </div>

        {/* Gráfico */}
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
        <Card className="w-full lg:col-span-2 bg-linear-to-b from-(--primario-700) via-(--primario-900) to-[#011411]">
          <CardHeader>
            <CardTitle className='text-(--terciario-300) lg:text-2xl'>Vendas Mensais</CardTitle>
          </CardHeader>
          <CardContent>
          <div className="w-full h-[400px] min-w-0">
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

                <Area type="monotone" name="Número de pedidos feitos no dia" dataKey="pedido" stackId="1" stroke="#3b82f6" fill="#3b82f6" />
                <Area type="monotone" name="Quantidade total de itens vendidos" dataKey="itensVendidos" stackId="1" stroke="#a3e635" fill="#a3e635"  />
                <Area type="monotone" name="Faturamento do dia" dataKey="faturamento" stackId="1" stroke="#22c55e" fill="#22c55e" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          </CardContent>
        </Card>

        <Card className="w-full bg-linear-to-b from-(--primario-700) via-(--primario-900) to-[#011411]">
          <CardHeader>
            <CardTitle className='text-(--terciario-300) lg:text-2xl'>Vendas por categoria</CardTitle>
          </CardHeader>
          <CardContent>
          <div className="w-full h-[400px] min-w-0">
            <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              responsive
              data={dataCategoria}
              margin={{
                top: 20,
                right: 0,
                bottom: 0,
                left: 0,
              }}
            >
              <CartesianGrid stroke="#1a3d1a" />
              <XAxis stroke="#c7e5c7" dataKey="name" scale="band" />
              <YAxis stroke="#c7e5c7" width="auto" />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" name='Produtos' barSize={20} fill="#a3e635" />
              <Line type="monotone" dataKey="uv" name="Faturamento" stroke="#3b82f6" />
            </ComposedChart>
            </ResponsiveContainer>
          </div>
          </CardContent>
        </Card>
        </div>
        

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
    </main>
  );
}
