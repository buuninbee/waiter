import React from 'react'

import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardAction, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableRow, TableCell, TableHead, TableHeader} from "@/components/ui/table";

const OrdemServico = () => {

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
    <main  className="grid pb-8 w-full md:pl-15 md:pb-0" >
         <Card className='bg-(--primario-900) '>
          <CardHeader>
            <CardTitle className='text-(--terciario-300) lg:text-2xl'>Ordem de serviço</CardTitle>
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
    </main>
  )
}

export default OrdemServico