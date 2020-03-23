import { useState, useEffect } from 'react';
const chance = require('chance').Chance();
import { getCard } from '../services/getCard';
import { data } from '../data/words';

export const useCard = () => {
  const [cardPhrase, setCardPhrase] = useState('');
  
  const getRandomWord = data => {
    const card = chance.pickone(data);
    const word = card.word;
    return word;
  };

  useEffect(() => {
    setCardPhrase(getRandomWord(data));
  }, []);

  const handleClick = () => {
    setCardPhrase(getRandomWord(data));
  };

  return { cardPhrase, handleClick };
};
