import React, { Component } from 'react';
import CardPost from './CardPost';
import './Galeria.css'


export default class Galeria extends Component {
    state = {posts:[
        {
            nome:"Harry Potter",
            post:"Eu não saio por aí procurando encrenca. Em geral as encrencas é que vêm ao meu encontro.",
        },

        {
            nome:"Chris",
            post:"Sacomé né?",
        },

        {
            nome:"Alvo Percival Wulfrico Brian Dumbledore",
            post:"Não vale a pena mergulhar nos sonhos e esquecer de viver.",
        },

        {
            nome:"Semagol",
            post:"My precious",
        },

        {
            nome:"Edward Eric",
            post:"Sempre existem coisas mais importantes do que sonhos"
        }
    ]}

    foiCurtido= (curtidas) => {
        console.log("Seu post foi curtido" + curtidas + "vezes")
    }


    render() { 
        return ( 
            
            <div className = 'Galeria'>              
                                
                {/* <CardPost nome="João e Maria" post="Um Bom dia para caçar bruxas."></CardPost>
                <CardPost nome="Harry Potter" post="Wingardium Leviosa"></CardPost>
                <CardPost nome="Chris" post="Sacomé né?"></CardPost>
                <CardPost nome="Alvo Percival Wulfrico Brian Dubledore" post="De que adianta viver sonhando e esquecer de viver?"></CardPost>
                <CardPost nome="Smeagol" post="My precious"></CardPost>
                <CardPost nome="Edward Eric" post="Sempre existem coisas mais importantes do que sonhos"></CardPost>
                     */}
                {this.state.posts.map(
                    (postagem) => (<CardPost
                    nome={postagem.nome}
                    post={postagem.post}
                    curtiu={this.foiCurtido}></CardPost>)
                )}

                
                

            </div>
         );
    }
}
 
