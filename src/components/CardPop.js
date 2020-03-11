import React from 'react';
import '../css/card-styles.css';

const CardPop = (props) =>{

    return(
        <div className='PopUp-Container'>
            <div className='popup'>
                <div className='popContainer'>
                    <h1>{props.hero}</h1> 
                    <br></br>
                        
                        <div className='Image_Container'>  
                            <img className='Meme' src={props.description.meme} alt='Achilles'/>
                        </div>
                        
                </div>  
                
                
            </div>
        </div>  
    )
}

export default CardPop;