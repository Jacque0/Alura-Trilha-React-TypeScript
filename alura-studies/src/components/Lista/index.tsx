import Item from "./Item";
import style from './Lista.module.scss'
import { ITarefas } from "../../types/tarefa";

function Lista({ tarefas }:{tarefas: ITarefas[]}){
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => <Item key={index} {...item} />)}
            </ul>
        </aside>
    )
}
export default Lista;