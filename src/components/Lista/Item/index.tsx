import { ITarefa } from '../../../types/tarefa';
import Style from './Item.module.scss';

interface Props extends ITarefa {

    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Item(
    {
        tarefa,
        tempo,
        selecionado,
        completado,
        id,
        selecionaTarefa

    }: Props) {

    return (
        <li
            className={`${Style.item} ${selecionado ? Style.
                itemSelecionado : ''} ${completado ? Style.itemCompletado : ''}`}
            onClick={() => ! completado && selecionaTarefa({
                tarefa,
                tempo,
                selecionado,
                completado,
                id
            })}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {completado && <span className={Style.concluido}
                aria-label="tarefa completada">
            </span>}
        </li>
    )

}