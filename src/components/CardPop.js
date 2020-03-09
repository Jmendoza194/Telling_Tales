import React from 'react';
import '../css/card-styles.css';

const CardPop = (props) =>{
    return(
        <div className='PopUp-Container'>
            <div className='popup'>  
                <h1>{props.hero}</h1>  
            </div>
        </div>  
    )
}

export default CardPop;