import React from "react";
import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss'
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefas } from "../../types/tarefa";

interface Props {
    selecionado: ITarefas | undefined,
    finalizarTarefa: () => void
}

export default function Cronometro({ selecionado, finalizarTarefa}: Props){
    const [tempo, setTempo] = React.useState<number>()
    
    React.useEffect(()=>{
        if(selecionado?.tempo){
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    },[selecionado])
    
    function regressiva(contador: number = 0){
        setTimeout(()=>{
            if(contador > 0){
                setTempo(contador - 1);
                return regressiva(contador - 1);
            }
            finalizarTarefa();
        }, 1000)
    }

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Botao onClick={()=>{regressiva(tempo)}} texto="Começar!" />
        </div>
    )
}