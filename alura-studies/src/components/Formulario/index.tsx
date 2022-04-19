import React from "react";
import Botao from "../Botao";
import style from './Formulario.module.scss';
import { ITarefas } from "../../types/tarefa";
import {v4 as uuidv4} from 'uuid'

class Formulario extends React.Component<{setTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>>}> {
    state = {
        tarefa: "",
        tempo: "00:00"
    }
    adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, 
            {...this.state,
                selecionado: false,
                completado: false,
                id: uuidv4()}])
        this.setState({
            tarefa: "",
            tempo: "00:00"})
    }
    render(){
        return(
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input 
                        type="text"
                        name="tarefa"
                        value={this.state.tarefa}
                        onChange={(e)=>this.setState({...this.state, tarefa: e.target.value})}
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
                        value={this.state.tempo}
                        onChange={(e)=>this.setState({...this.state, tempo: e.target.value})}
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
}
export default Formulario;