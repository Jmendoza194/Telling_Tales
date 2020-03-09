import React from 'react';
import CardPop from './CardPop';
import '../css/card-styles.css';

class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            popUp:false,
            card_order: ''
        }
    }

    togglePopUp = (event) =>{
        this.setState({popUp: !this.state.popUp})
        console.log(this.state.popUp)
    }

    render(){

            let show = this.state.popUp ? <CardPop hero={this.props.name}/>: null;
            

        return(
            <div className={`card-container ${this.props.name}`} onClick={this.togglePopUp}>
                {this.props.name}
                {show}
            </div>
        )
    }
}

export default Card;