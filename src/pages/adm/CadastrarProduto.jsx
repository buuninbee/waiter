import Seletor from '@/componentes/Seletor';
import React from 'react'
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardAction, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableRow, TableCell, TableHead, TableHeader} from "@/components/ui/table";

const categorias = [
    {value: 'almoco', label: 'Almoço'},
    {value: 'petisco', label: 'Petisco'},
    {value: 'bebidas', label: 'Bebidas'},
]

const CadastrarProduto = () => {
   const [categoriaSelecionada, setCategoriaSelecionada] = useState('');

   const produtos = [
    { codigo: 1, denominacao: "Hambúrguer Artesanal", status: "ativo", preco: 32.90, categoria: "Lanches" },
    { codigo: 2, denominacao: "Batata Frita", status: "ativo", preco: 12.00, categoria: "Porções" },
    { codigo: 3, denominacao: "Coca-Cola Lata", status: "ativo", preco: 6.50, categoria: "Bebidas" },
    { codigo: 4, denominacao: "Pizza Calabresa", status: "ativo", preco: 49.90, categoria: "Lanches" },
    { codigo: 5, denominacao: "Lasanha à Bolonhesa", status: "ativo", preco: 29.90, categoria: "Pratos" },
    { codigo: 6, denominacao: "Suco Natural de Laranja", status: "ativo", preco: 9.90, categoria: "Bebidas" },
    { codigo: 7, denominacao: "Pastel de Carne", status: "ativo", preco: 7.00, categoria: "Petiscos" },
    { codigo: 8, denominacao: "Café Expresso", status: "ativo", preco: 5.00, categoria: "Bebidas" },
    { codigo: 9, denominacao: "Torta de Limão", status: "ativo", preco: 14.90, categoria: "Sobremesas" },
    { codigo: 10, denominacao: "Salada Caesar", status: "ativo", preco: 22.50, categoria: "Pratos" },
    { codigo: 11, denominacao: "Água com Gás", status: "inativo", preco: 4.50, categoria: "Bebidas" },
    { codigo: 12, denominacao: "Milkshake de Chocolate", status: "ativo", preco: 18.90, categoria: "Bebidas" },
    { codigo: 13, denominacao: "Espetinho de Frango", status: "ativo", preco: 8.90, categoria: "Petiscos" },
    { codigo: 14, denominacao: "Suco de Maracujá", status: "ativo", preco: 9.50, categoria: "Bebidas" },
    { codigo: 15, denominacao: "Picanha na Chapa", status: "ativo", preco: 69.90, categoria: "Pratos" },
    { codigo: 16, denominacao: "Coca-Cola Lata", status: "ativo", preco: 6.50, categoria: "Bebidas" },
    { codigo: 17, denominacao: "Pizza Calabresa", status: "ativo", preco: 49.90, categoria: "Lanches" },
    { codigo: 18, denominacao: "Lasanha à Bolonhesa", status: "ativo", preco: 29.90, categoria: "Pratos" },
    { codigo: 19, denominacao: "Suco Natural de Laranja", status: "ativo", preco: 9.90, categoria: "Bebidas" },
    { codigo: 20, denominacao: "Pastel de Carne", status: "ativo", preco: 7.00, categoria: "Petiscos" },
    { codigo: 21, denominacao: "Café Expresso", status: "ativo", preco: 5.00, categoria: "Bebidas" },
    { codigo: 22, denominacao: "Torta de Limão", status: "ativo", preco: 14.90, categoria: "Sobremesas" },
  ];
  
   console.log(categoriaSelecionada)
  return (
   <main  className="grid justify-center  pb-8 w-full md:pl-10 md:pb-0">
    <section className="grid gap-3.5 px-8 py-6 md:py-7 lg:pt-11">
        <form className='flex-col gap-3.5 md:flex md:flex-row md:justify-center' action="">
            <div>
                <label htmlFor="">Código</label>
                <input type='number' min='0' className="w-full rounded-md border border-(--primario-600) px-3 py-2 mt-1" rows="4"/>
            </div>
            <div>
                <label htmlFor="">Denominação</label>
                <input type='text' className="w-full rounded-md border border-(--primario-600) px-3 py-2 mt-1" rows="4"/>
            </div>

            <div>
                <label htmlFor="">Preço</label>
                <input type='number' min='0' className="w-full rounded-md border border-(--primario-600) px-3 py-2 mt-1" rows="4"/>
            </div>

            <div className='grid'>
                <label htmlFor="">Categoria</label>
                <Seletor items={categorias} onChange={(categoria) => setCategoriaSelecionada(categoria)}  />
            </div>

            <div className='grid gap-1.5'>
                <label htmlFor="status">Status</label>
                <div className='flex items-center gap-3'>
                    <div className='flex gap-2.5 items-center'>
                        <label htmlFor="status">Inativo</label>
                        <input className='accent-(--primario-700)' type="radio" id='inativo' name='status' />
                    </div>

                    <div className='flex gap-2.5 items-center'>
                        <label htmlFor="status">Ativo</label>
                        <input className='accent-(--primario-700)'  type="radio" id='Ativo' name='status' />
                    </div>
                </div>

            </div>
        </form>
    </section>
    <section>
    <div  className="grid pb-8 max-w-[1500px md:pb-0" >
         <Card className='bg-(--primario-900) '>
          <CardHeader>
            <CardTitle className='text-(--terciario-300) lg:text-2xl'>Lista de Produtos</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
            <TableHeader>
              <TableRow className='*:text-(--primario-50) *:text-center'>
                <TableHead>Código</TableHead>
                <TableHead>Denominação</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Preço</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
              <TableBody>
                {
                  produtos.map(({codigo,denominacao,status,preco,categoria}) => {
                    return(
                    <TableRow  className='*:text-(--terciario-50) *:text-center'>
                    <TableCell>{codigo}</TableCell>
                    <TableCell>{denominacao}</TableCell>
                    <TableCell>{categoria}</TableCell>
                    <TableCell>{preco}</TableCell>
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
    </section>
   </main>
  )
}

export default CadastrarProduto