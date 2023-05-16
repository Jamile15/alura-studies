import React from "react";
import Botao from "../Botao";
import style from './Formulario.module.scss';
import { GenericHTMLFormElement } from "axios";

class Formulario extends React.Component {
    state = {
        tarefa: "",
        tempo: "00:00"
    }

    adicionarTarefa(evento: React.FormEvent<GenericHTMLFormElement>) {
        evento.preventDefault();
        console.log('state:', this.state)
    }

    render() {
        
        return (
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>

                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input
                        type="text"
                        name="tarefa"
                        value={this.state.tarefa}
                        onChange={evento => this.setState({...this.state, tarefa:evento.target.value})}
                        id="tarefa"
                        placeholder="O que você quer estudar"
                        required />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">

                    </label>
                    <input
                        type="time"
                        step="1"
                        name="tempo"
                        value={this.state.tempo}
                        //pegar o valor do imput
                        onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
                        id="tempo"
                        min={"00:00:00"}
                        max={"01:30:00"}
                        required />

                </div>
                <Botao
                    texto="Adicionar"
                />

            </form>
        )
    }
}

export default Formulario