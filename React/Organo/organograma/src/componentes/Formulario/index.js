import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
const Formulario = () => {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'Ux e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('funcionou', nome, cargo, imagem, time)
    }
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card do colaborador</h2>

            <CampoTexto 
                obrigatorio={true} 
                label="Nome" 
                placeholder="Digite seu Nome"
                valor={nome}
                aoAlterado={valor => setNome(valor)}
            />

            <CampoTexto 
                obrigatorio={true} 
                label="Cargo" 
                placeholder="Digite seu Cargo"
                value={cargo}
                aoAlterado={valor => setCargo(valor)}
            />

            <CampoTexto 
                obrigatorio={true} 
                label="Imagem" 
                placeholder="Digite o endereço da Imagem"
                value={imagem}
                aoAlterado={valor => setImagem(valor)}
            />

            <ListaSuspensa 
                obrigatorio={true} 
                label="Time" 
                itens={times}
                value={time}
                aoAlterado={valor => setTime(valor)}
            />
            <Botao>
                Criar card
            </Botao>
            </form>
        </section>
    )
}

export default Formulario