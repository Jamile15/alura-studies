import React, { ReactNode } from "react";
import style from './Botao.module.scss';

interface BotaoProps {
  type?: "button" | "submit" | "reset" | undefined
  children?: ReactNode;
}

class Botao extends React.Component<BotaoProps> {
  render() {
    const { type, children } = this.props;
    return (
      <button type={type} className={style.botao}>{children}</button>
    );
  }
}

export default Botao;