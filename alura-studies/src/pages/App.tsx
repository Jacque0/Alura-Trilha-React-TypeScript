import React from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import { ITarefas } from '../types/tarefa';
import style from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = React.useState<ITarefas[] | []>([])
  const [selecionado, setSelecionado] = React.useState<ITarefas>()

  function selecionaTarefa(tarefaSelecionada: ITarefas){
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id===tarefaSelecionada.id ? true : false
    })))
  }

  function finalizarTarefa(){
    if(selecionado) {
      setTarefas(tarefasAnteriores =>
        tarefasAnteriores.map(tarefa => {
          if(tarefa.id === selecionado.id){
            return {
              ...tarefa,
              selecionado: false,
              completado: true
            }
          }
          return tarefa
        }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa} />
      <Cronometro
        selecionado={selecionado}
        finalizarTarefa={finalizarTarefa} />
    </div>
  );
}

export default App;
