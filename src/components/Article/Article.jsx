import React from 'react';
import './Article.css';
import PropTypes from 'prop-types';

const Article = ({ title, src, description, сomment }) => {
  return (
    <div className='article'>
      <div className='article__title'>{title}</div>
      <img className='article__img' src={src} alt='imageUrl'></img>
      <div className='article__desc'>{description}</div>
      <div className='article__comment'>
        <h2 className='article__expert'>Experts Comment</h2>
        {сomment}
      </div>
    </div>
  );
};
Article.propTypes = {
    src: PropTypes.any.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    сomment: PropTypes.string
};
export default Article;
