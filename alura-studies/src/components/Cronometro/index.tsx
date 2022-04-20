import React from "react";
import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss'
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefas } from "../../types/tarefa";

interface Props {
    selecionado: ITarefas | undefined
}

export default function Cronometro({ selecionado}: Props){
    const [tempo, setTempo] = React.useState<number>()
    
    React.useEffect(()=>{
        if(selecionado?.tempo){
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    },[tempo])
    

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Botao texto="Começar!" />
        </div>
    )
}