import { match } from 'assert'
import Style from './relogio.module.scss'
interface Props{
    tempo: number | undefined
}

export default function Relogio({tempo = 0} : Props) {
    const minutos = Math.floor(tempo /60);
    const segundos = tempo % 60;
    const  [minutoDezenna, minutoUnidade] = String(minutos). padStart(2, '0');
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0');
    return (
        <>
            <span className={Style.relogioNumero}>{minutoDezenna}</span>
            <span className={Style.relogioNumero}>{minutoUnidade}</span>
            <span className={Style.relogioDivisao}>:</span>
            <span className={Style.relogioNumero}>{segundoDezena}</span>
            <span className={Style.relogioNumero}>{segundoUnidade}</span>
        </>
    )
}