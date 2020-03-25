import React, { useState } from 'react';
const CountDown = () => {

  const [timerOn, setTimerOn] = useState(false);
  const [timerStart, setTimerStart] = useState(0);
  const [timerTime, setTimerTime] = useState(0);

  let timer;

  const startTimer = () => {
    setTimerOn(true);
    setTimerStart(timerTime);
    setTimerTime(timerTime);
    timer =
      setInterval(() => {
        const newTime = timerTime - 1000;
        if (newTime >= 0) {
          setTimerTime(newTime);
        } else {
          clearInterval(timer);
          setTimerOn(false);
          alert('Countdown Ended');
        }
      }, 1000);
  };

  const resetTimer = () => {
    if (timerOn === false) {
      setTimerOn(timerStart);
    }
  };

  const stopTimer = () => {
    clearInterval(timer);
    setTimerOn(false);
    resetTimer();
  };

  const adjustTimer = input => {
    const max = 216000000;
    if (!timerOn) {
      if (input === 'incMinutes' && timerTime + 60000 < max) {
        setTimerTime(timerTime + 60000);
      } else if (input === 'decMinutes' && timerTime - 60000 >= 0) {
        setTimerTime(timerTime - 60000);
      } else if (input === 'incSeconds' && timerTime + 1000 < max) {
        setTimerTime(timerTime + 1000);
      } else if (input === 'decSeconds' && timerTime - 1000 >= 0) {
        setTimerTime(timerTime - 1000);
      }
    }
  };

  let seconds = ('0' + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
  let minutes = ('0' + Math.floor((timerTime / 60000) % 60)).slice(-2);

  return (
    <section className="Countdown">
      <section className="Countdown-header"><div className="Countdown-label">Minutes : Seconds</div>
        <div className="Countdown-display">
          <button onClick={() => adjustTimer('incMinutes')}>&#8679;</button>
          <button onClick={() => adjustTimer('incSeconds')}>&#8679;</button>
          <button onClick={() => adjustTimer('decMinutes')}>&#8681;</button>
          <button onClick={() => adjustTimer('decSeconds')}>&#8681;</button>
        </div>
        <div className="Countdown-time">
          {minutes} : {seconds}
        </div>
        {timerOn === false &&
          (timerStart === 0 || timerTime === timerStart) && (
            <button onClick={startTimer}>Start</button>
          )}
        {timerOn === true && timerTime >= 1000 && (
          <button onClick={stopTimer}>Stop</button>
        )}
        {timerOn === false &&
          (timerStart !== 0 && timerStart !== timerTime && timerTime !== 0) && (
            <button onClick={startTimer}>Resume</button>
          )}
        {(timerOn === false || timerTime < 1000) &&
          (timerStart !== timerTime && timerStart > 0) && (
            <button onClick={resetTimer}>Reset</button>
          )}
      </section>
    </section>
  );
};

CountDown.propTypes = {};

export default CountDown;
