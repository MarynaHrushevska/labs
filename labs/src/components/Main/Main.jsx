import React from 'react';
import Card from '../Card';
import data from '../../data/data.json';

function Main () {
    return (
        <div>
            {data.map((card) => (
                <Card 
                src={card.img}
                title={card.description} 
                {...card}
                key={card.id}
                />
            ))}
        </div>
    )
}
export default Main;
