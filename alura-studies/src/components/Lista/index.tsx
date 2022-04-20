import Item from "./Item";
import style from './Lista.module.scss'
import { ITarefas } from "../../types/tarefa";

interface Props {
    tarefas: ITarefas[]
    selecionaTarefa: (tarefaSelecionada: ITarefas) => void
}

function Lista({ tarefas, selecionaTarefa }: Props){
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item) => (
                <Item 
                    key={item.id}
                    {...item}
                    selecionaTarefa={selecionaTarefa} />))}
            </ul>
        </aside>
    )
}
export default Lista;