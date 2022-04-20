import React from "react";
import Botao from "../Botao";
import style from './Formulario.module.scss';
import { ITarefas } from "../../types/tarefa";
import {v4 as uuidv4} from 'uuid'

interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>>
}

function Formulario({setTarefas}: Props) {
    const [tarefa, setTarefa] = React.useState("")
    const [tempo, setTempo] = React.useState("00:00")

    function adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setTarefas(tarefasAntigas => [...tarefasAntigas, 
            {tarefa,
            tempo,
            selecionado: false,
            completado: false,
            id: uuidv4()}])
        setTarefa("")
        setTempo("00:00")
    }
    
    return(
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input 
                    type="text"
                    name="tarefa"
                    value={tarefa}
                    onChange={(e)=>setTarefa(e.target.value)}
                    id="tarefa"
                    placeholder="O que você quer estudar"
                    required />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input
                    type="time"
                    step={1}
                    value={tempo}
                    onChange={(e)=>setTempo(e.target.value)}
                    name="tempo"
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required
                    />
            </div>
            <Botao tipo="submit" texto="Adicionar" />
        </form>
    )
}
export default Formulario;