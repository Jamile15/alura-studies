import  Style  from '../Lista.module.scss';

export default function Item( {tarefa, tempo} : {tarefa: string, tempo: string}){
    return(
        <li className={Style.item}>
        <h3>{tarefa}</h3>
        <span>{tempo}</span>
    </li>
    )
}