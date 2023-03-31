import React from 'react';import style from './Lista.module.css';
import Item from './Item';

function Lista() {
    const tarefas = [{
        tarefa: 'React',
        tempo: '01:00:00'
    }, {
        tarefa: 'javascript',
        tempo: '01:00:00'
    
    },{
        tarefa: 'Typescript',
        tempo: '03:00:00'
    }]
return (
    <aside className={style.listaTarefas}>
        <h2>Estudos do dia</h2>
        <ul>
            {tarefas.map((item, index) =>(
             <Item
             key={index}
               tarefa={item.tarefa}
               tempo={item.tempo}
             />
            ))}
            
        </ul>
    </aside>
)
}

export default Lista;