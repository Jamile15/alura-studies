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
                itemSelecionado : ''}`}
            onClick={() => selecionaTarefa({
                tarefa,
                tempo,
                selecionado,
                completado,
                id
            })}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )

}