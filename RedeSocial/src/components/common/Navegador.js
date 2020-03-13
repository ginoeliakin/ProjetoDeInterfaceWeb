import React, { Component } from 'react';
import './Navegador.css';


class Navegador extends Component {
    state = {  }
    render() { 
        return (
            <nav className="navegador">
                <span>Mundo Geek</span>
                <a href= ' '>Linha do tempo</a>
                <a href= ' '>Perfil</a>
                <span className='user'>Wolverine da Silva </span>
            </nav>
        );
    }
}
 
export default Navegador;