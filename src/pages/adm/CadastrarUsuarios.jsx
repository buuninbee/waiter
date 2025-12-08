import Seletor from '@/componentes/Seletor';
import React from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardAction, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableRow, TableCell,TableFooter, TableHead, TableHeader} from "@/components/ui/table";


const CadastrarUsuario = () => {

    const funcionarios = [
        { nome: "João Silva", email: "joao.silva@empresa.com", cargo: "Garçom", cpf: "123.456.789-01", telefone: "(61) 91234-5678", status: "Ativo" },
        { nome: "Maria Oliveira", email: "maria.oliveira@empresa.com", cargo: "Garçom", cpf: "234.567.891-02", telefone: "(61) 92345-6789", status: "Ativo" },
        { nome: "Carlos Pereira", email: "carlos.pereira@empresa.com", cargo: "Garçom", cpf: "345.678.912-03", telefone: "(61) 93456-7890", status: "Inativo" },
        { nome: "Ana Costa", email: "ana.costa@empresa.com", cargo: "Gerente", cpf: "456.789.123-04", telefone: "(61) 94567-8901", status: "Ativo" },
        { nome: "Bruno Ferreira", email: "bruno.ferreira@empresa.com", cargo: "Garçom", cpf: "567.891.234-05", telefone: "(61) 95678-9012", status: "Ativo" },
        { nome: "Patrícia Lima", email: "patricia.lima@empresa.com", cargo: "Atendente", cpf: "678.912.345-06", telefone: "(61) 96789-0123", status: "Inativo" },
        { nome: "Rafael Souza", email: "rafael.souza@empresa.com", cargo: "Garçom", cpf: "789.123.456-07", telefone: "(61) 97890-1234", status: "Ativo" },
        { nome: "Camila Rocha", email: "camila.rocha@empresa.com", cargo: "Atendente", cpf: "891.234.567-08", telefone: "(61) 98901-2345", status: "Ativo" },
        { nome: "Lucas Martins", email: "lucas.martins@empresa.com", cargo: "Garçom", cpf: "912.345.678-09", telefone: "(61) 99012-3456", status: "Ativo" },
        { nome: "Fernanda Alves", email: "fernanda.alves@empresa.com", cargo: "Gerente", cpf: "102.345.678-10", telefone: "(61) 99123-4567", status: "Ativo" },
        { nome: "Diego Nogueira", email: "diego.nogueira@empresa.com", cargo: "Garçom", cpf: "213.456.789-11", telefone: "(61) 99234-5678", status: "Ativo" },
        { nome: "Renata Pacheco", email: "renata.pacheco@empresa.com", cargo: "Atendente", cpf: "324.567.891-12", telefone: "(61) 99345-6789", status: "Ativo" },
        { nome: "Eduardo Farias", email: "eduardo.farias@empresa.com", cargo: "Garçom", cpf: "435.678.912-13", telefone: "(61) 99456-7890", status: "Ativo" },
        { nome: "Larissa Ramos", email: "larissa.ramos@empresa.com", cargo: "Atendente", cpf: "546.789.123-14", telefone: "(61) 99567-8901", status: "Inativo" },
        { nome: "Gustavo Teixeira", email: "gustavo.teixeira@empresa.com", cargo: "Garçom", cpf: "657.891.234-15", telefone: "(61) 99678-9012", status: "Ativo" },
        { nome: "Beatriz Mendonça", email: "beatriz.mendonca@empresa.com", cargo: "Atendente", cpf: "768.912.345-16", telefone: "(61) 99789-0123", status: "Ativo" },
        { nome: "Thiago Barros", email: "thiago.barros@empresa.com", cargo: "Garçom", cpf: "879.123.456-17", telefone: "(61) 99890-1234", status: "Ativo" },
        { nome: "Juliana Pires", email: "juliana.pires@empresa.com", cargo: "Gerente", cpf: "981.234.567-18", telefone: "(61) 99901-2345", status: "Ativo" },
        { nome: "Rodrigo Azevedo", email: "rodrigo.azevedo@empresa.com", cargo: "Garçom", cpf: "192.345.678-19", telefone: "(61) 99912-3456", status: "Ativo" },
        { nome: "Natália Cunha", email: "natalia.cunha@empresa.com", cargo: "Atendente", cpf: "203.456.789-20", telefone: "(61) 99923-4567", status: "Ativo" },
      ];
      
  
  return (
   <main  className="grid justify-center  pb-8 w-full md:pl-10 md:pb-0">
    <section className="grid gap-3.5 px-8 py-6 md:py-7 lg:pt-11">
        <form className='flex-col gap-3.5 md:flex md:flex-row md:justify-center' action="">
            <div>
                <label htmlFor="">Nome</label>
                <input type='text' min='0' className="w-full rounded-md border border-(--primario-600) px-3 py-2 mt-1" rows="4"/>
            </div>
            <div>
                <label htmlFor="">Telefone</label>
                <input type='tel' className="w-full rounded-md border border-(--primario-600) px-3 py-2 mt-1" rows="4"/>
            </div>

            <div>
                <label htmlFor="">E-mail</label>
                <input type='email' min='0' className="w-full rounded-md border border-(--primario-600) px-3 py-2 mt-1" rows="4"/>
            </div>

            <div>
                <label htmlFor="">Cargo</label>
                <input type='email' min='0' className="w-full rounded-md border border-(--primario-600) px-3 py-2 mt-1" rows="4"/>
            </div>

            <div>
                <label htmlFor="">CPF</label>
                <input type='number' className="w-full rounded-md border border-(--primario-600) px-3 py-2 mt-1" rows="4"/>
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
            <CardTitle className='text-(--terciario-300) lg:text-2xl'>Lista dos Usuários</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
            <TableHeader>
              <TableRow className='*:text-(--primario-50) *:text-center'>
                <TableHead>Nome</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Cargo</TableHead>
                <TableHead>CPF</TableHead>
                <TableHead>Telefone</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
              <TableBody>
                {
                  funcionarios.map(({nome,email,status,cargo,cpf ,telefone}) => {
                    return(
                    <TableRow  className='*:text-(--terciario-50) *:text-center'>
                    <TableCell>{nome}</TableCell>
                    <TableCell>{email}</TableCell>
                    <TableCell>{cargo}</TableCell>
                    <TableCell>{cpf}</TableCell>
                    <TableCell>{telefone}</TableCell>
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

export default CadastrarUsuario