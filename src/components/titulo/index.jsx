import React from 'react';
import { Component } from 'react';

class Titulo extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <h1>{this.props.text}</h1>
                <p>{this.props.descricao || 'Não passou a descrição'}</p>
            </div>
        )
    }
}

export default Titulo;