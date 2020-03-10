import React from 'react';
import Card from './Card';

const CardList = ({ description, name, container }) =>{

    const renderList = name.map((name, index) =>{
        return <Card name={name} description={description[index]} />
    })

    return (
        <div className={`card-grid-${container}`}>
            {renderList}
        </div>
    )
}

export default CardList;