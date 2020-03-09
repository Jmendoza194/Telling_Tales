import React from 'react';
import Card from './Card';

const CardList = ({ pic, name }) =>{

    const renderList = name.map((name, index) =>{
        return <Card name={name} portrait={pic[index]} order={index%3} />
    })

    return (
        <div className='card-grid'>
            {renderList}
        </div>
    )
}

export default CardList;