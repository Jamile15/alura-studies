import { ITarefa } from '../../../types/tarefa';
import  Style  from '../Lista.module.scss';

export default function Item( {tarefa, tempo, selecionado, completado, id} : ITarefa){
    console.log('item atual:', {tarefa, tempo, selecionado, completado, id});
    return(
        <li className={Style.item}>
        <h3>{tarefa}</h3>
        <span>{tempo}</span>
    </li>
    )
}