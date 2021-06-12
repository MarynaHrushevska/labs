import React from 'react';
import Card from '../Card';
import './Main.css';
import PropTypes from 'prop-types';

const Main = (props) => {
  const createCard = () => {
    return props.data.map((el) => <Card data={el} key={el.description} />);
  };
  return <div className='main-wrapper'>{createCard()}</div>;
};
Main.propTypes = {
    description: PropTypes.string,
    data: PropTypes.array,
};
export default Main;
