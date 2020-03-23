import { useState, useEffect } from 'react';
import { getCard } from '../services/getCard';

export const useCard = () => {
  const [cardPhrase, setCardPhrase] = useState('');
  const [cardLoading, setCardLoading] = useState(true);

  useEffect(() => {
    setCardLoading(true);
    getCard()
      .then(card => setCardPhrase(card.cardPhrase))
      .finally(() => setCardLoading(false));
  }, []);

  const handleClick = () => {
    setCardLoading(true);
    getCard()
      .then(card => setCardPhrase(card.cardPhrase))
      .finally(() => setCardLoading(false));
  };

  return { cardPhrase, handleClick };
};
