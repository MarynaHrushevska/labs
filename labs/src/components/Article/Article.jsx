import React from 'react';
import Card from '../Card/index';
import data from '../../data/data.json';

function Article () {
    const card = data.map((el, index) => <Card src={el.imageUrl} key={index} title={el.title} />);
    return (
        <div>
         {card}
        </div>
    );
}
export default Article;
