import { Link } from "react-router-dom";
import Botao from "../componentes/Botao";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

const Login = () => {
  return (
    <main className="grid justify-center align-middle h-[700px]">
        <section className="self-center  max-w-[700px]  px-8 py-6 md:py-7 lg:pt-11">
            <h1 className='text-xl text-(--primario-700) text-center font-medium pb-7 sm:text-2xl md:text-3xl lg:text-4xl'>Chegou o momento de evoluir, e nós vamos com você.</h1>

            <div className="grid bg-(--primario-800) text-(--primario-50) px-3 py-4 rounded-lg">
            <FieldSet  className="">
                <FieldGroup>
                <Field>
                    <FieldLabel htmlFor="nome">Nome</FieldLabel>
                    <Input className="text-(--primario-900)" id="nome" type="nome" placeholder="Francisco paulo alves" />
                </Field>
                <Field>
                    <FieldLabel htmlFor="email">E-mail</FieldLabel>
                    <Input className="text-(--primario-900)" id="email" type="email" placeholder="seuemailgmail.com" />
                </Field>
                <Field>
                    <FieldLabel htmlFor="senha">Senha</FieldLabel>
                    <Input className="text-(--primario-900)" id="senha" type="password" placeholder="********" />
                </Field>
                </FieldGroup>

                <Link className="w-max" to='/login' > Já tem conta? Clique aqui</Link>
                <Botao path='/sis' text="Criar conta" />
            </FieldSet>
        </div>
        </section>
    </main>
  )
}

export default Login