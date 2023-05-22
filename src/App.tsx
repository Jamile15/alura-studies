import React, {useState} from 'react';
import Formulario from './components/Formulario';
import Lista from './components/Lista';

function App() {
  const [tarefas, setTarefas] = useState(
    [{
        tarefa: 'React',
        tempo: '02:00:00'
      }, {
        tarefa: 'Javascript',
        tempo: '01:00:00'
      }, {
        tarefa: "Typescript",
        tempo: "03:00:00"
      }]);

  return (
    <div className="App">
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}/>
    </div>
  );
}

export default App;
