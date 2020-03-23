import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.css';

const Card = ({ cardPhrase, onClick }) => {


  return (
    <section className={styles.cardAndButton}>
      <section className={styles.Card}>
        <h1>Sequester Pictionary</h1>
        <h2>{cardPhrase}</h2>
      </section>
      <button onClick={onClick}>Get New Card</button>
      <section className={styles.rules}>
        <p>Welcome to Sequester Pictionary. Chose your favorite video chat option. I like <a href="https://zoom.us">Zoom</a> and < a href="https://chrome.google.com/webstore/detail/google-hangouts/nckgahadagoaajjgafhacjanaoiihapd?hl=en"> GoogleHangouts.</a> Get your friends together and either screenshare your Paint files or focus your webcam on your drawings! Pair up into teams and each team has 1 minute for a drawer to draw a picture and the guesser to guess what it is!</p>
      </section>
    </section>
  );
};

Card.propTypes = {
  cardPhrase: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Card;
