import React from 'react';
import style from './Botao.module.scss';

interface Props {
  texto: string,
  tipo?: "button" | "submit" | "reset" | undefined,
  onClick?: ()=> void
}

function Botao({texto, tipo, onClick}: Props){

  return (
    <button onClick={onClick} type={tipo} className={style.botao}>
      {texto}
    </button>
  )
}

export default Botao;