import React, { Component } from 'react';
import Galeria from './Galeria';
import Navegador from '../common/Navegador'

export default class PaginaPrincipal extends Component {
    render(){
        return(
            <div>
                <Navegador/>
                <Galeria/>
            </div>
        );
    }
}