import React, { Component } from 'react';
import './CardPost.css'

 export default class CardPost extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="card">
                <h3>{this.props.nome}</h3>
                <span>{this.props.post}</span>
            </div>
        );
    }
}
 