import React from 'react';
import Header from './common/Header';
import Card from './Card';
import { useCard } from '../hooks/useCard';
import styles from './PictionaryPage.css';
import Timer from './Timer';

const PictionaryPage = () => {

  const { handleClick, cardPhrase } = useCard();

  return (
    <section >
      <Header />
      <section className={styles.card}>
        <Card cardPhrase={cardPhrase} onClick={handleClick} />
      </section>
      <section className={styles.timer}>
        <Timer />
      </section>
    </section>
  );
};

export default PictionaryPage;
