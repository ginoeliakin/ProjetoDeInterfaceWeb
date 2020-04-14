import React, { Component } from 'react';
import './CardPost.css'

 export default class CardPost extends Component {
    state = {
        curtidas:0,
    }

    incrementarCurtidas=() =>{
        this.setState({curtidas: this.state.curtidas+1})
    }

    curtiu=() =>{
        this.incrementarCurtidas()
        this.props.curtiu(this.state.curtidas)
    }

    render() { 
        return ( 
            <div className="card">
                <h3>{this.props.nome}</h3><br></br>
                <span>{this.props.post}</span><br></br>
                <br></br>
                <button onClick= {this.curtiu}>Curtir</button>
            </div>
        );
    }
}
 