import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

function Card (props) {
    return (
        <div>
            <div className="card">
                <img src={props.imageUrl} alt="" />
                <div>{props.title}</div>
            </div>
        </div>
    );
}
Card.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string
  };
export default Card;
