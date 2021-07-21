import React from 'react';
import './card.css';

export default class Card extends React.Component{
  constructor(props){
      super(props)
  }
   render(){
    return (
        <div class="card"
         
            style={{width: this.props.width ? this.props.width : '90vw', 
                    height: this.props.height ? this.props.height : 'auto',
                    padding: this.props.padding ? this.props.padding : 'none' }}>
            <h1>
                {this.props.title}
            </h1>
            <span>
                {this.props.content}            
            </span>
        </div>
      );
   }
}
