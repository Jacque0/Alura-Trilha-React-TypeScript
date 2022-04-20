import { ITarefas } from '../../../types/tarefa'
import style from './Item.module.scss'

interface Props extends ITarefas {
    selecionaTarefa: (tarefaSelecionada: ITarefas) => void
}

export default function Item({
    tarefa,
    tempo,
    selecionado,
    completado,
    id,
    selecionaTarefa}: Props) {
    
    return(
    <li 
        className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`}
        onClick={()=>selecionaTarefa(
            {
                tarefa,
                tempo,
                completado,
                selecionado,
                id
            })}>
        <h3> {tarefa} </h3>
        <span> {tempo} </span>
    </li>)
}