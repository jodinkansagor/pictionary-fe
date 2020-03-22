import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Card = () => {

  const [card, setCard] = useState('');

  return (
    <section>
      <h1>Pictionary</h1>
      <h2>{cardPhrase}</h2>
    </section>

  )
};

Card.propTypes = {};

export default Card;