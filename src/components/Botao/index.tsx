import React from 'react';
import style from './Botao.module.scss';

interface Props {
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
    children: React.ReactNode;
}

class Botao extends React.Component<Props> {
    render() {
        const { type = "button", onClick, children } = this.props;
        return (
            <button onClick={onClick} type={type} className={style.botao}>
                {children}
            </button>
        );
    }
}

export default Botao;
