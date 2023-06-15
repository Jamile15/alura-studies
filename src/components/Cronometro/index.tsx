import { tempoParaSegundos } from "../../common/utils/date";
import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './cronometro.module.scss';

export default function Cronometro() {
    console.log('conversao: ', tempoParaSegundos ('01:01:01'))
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