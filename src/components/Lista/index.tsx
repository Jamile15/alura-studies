import React from 'react';
import './style.css';

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
    <aside className='listaTarefas'>
        <h2>Estudos do dia</h2>
        <ul>
            {tarefas.map((item, index) =>(
                <li key={index} className='item'>
                    <h3>{item.tarefa}</h3>
                    <span>{item.tempo}</span>
                </li>
            ))}
            
        </ul>
    </aside>
)
}

export default Lista;