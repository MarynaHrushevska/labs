import React from 'react';
import './Article';
import PropTypes from 'prop-types';

function Article ({ title, img, description, commentName, сomment }) {
    return (
        <div className="container">
            <div>{title}</div>
            <img src={img}></img>
            <div>{description}</div>
            <h2>{commentName}</h2>
            {сomment}
        </div>
    ) 
}
Article.propTypes = {
    img: PropTypes.any.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    commentName: PropTypes.string,
    сomment: PropTypes.string
};
export default Article;
