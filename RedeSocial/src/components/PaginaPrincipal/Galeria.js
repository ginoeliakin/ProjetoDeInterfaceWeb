import React, { Component } from 'react';
import CardPost from './CardPost';
import './Galeria.css'


class Galeria extends Component {
    state = { }
    render() { 
        return ( 
            
            <div className = 'Galeria'>              
                                
                <CardPost nome="João e Maria" post="Um Bom dia para caçar bruxas."></CardPost>
                <CardPost nome="Harry Potter" post="Wingardium Leviosa"></CardPost>
                <CardPost nome="Chris" post="Sacomé né?"></CardPost>
                <CardPost nome="Alvo Percival Wulfrico Brian Dubledore" post="De que adianta viver sonhando e esquecer de viver?"></CardPost>
                <CardPost nome="Smeagol" post="My precious"></CardPost>
                <CardPost nome="Edward Eric" post="Sempre existem coisas mais importantes do que sonhos"></CardPost>
                    

                
                

            </div>
         );
    }
}
 
export default Galeria;