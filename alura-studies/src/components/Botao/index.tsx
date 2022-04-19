import React from 'react';
import style from './Botao.module.scss';

class Botao extends React.Component<{texto: string, tipo?: "button" | "submit" | "reset" | undefined}> {
  render() {
    return (
      <button type={this.props.tipo} className={style.botao}>
        {this.props.texto}
      </button>
    )
  }
}

export default Botao;