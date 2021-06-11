import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function Card ({ id, img, title, link }) {
    return (
        <NavLink to={`/articles/${id}`}>
            <div className="card">
                <img className="card__img" src={img} alt="img"></img>
                    <div>{title}</div>
                <p to={link} className="link"></p>
            </div>
        </NavLink>
    );
}
Card.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.number,
    link: PropTypes.string
};
export default Card;
