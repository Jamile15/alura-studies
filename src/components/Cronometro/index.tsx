import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './cronometro.module.scss';

export default function Cronometro() {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
            <div className={style.relogioWrapper}>

                <Relogio />

            </div>
            <Botao type="submit">
                Começar
            </Botao>
        </div>



    )

}