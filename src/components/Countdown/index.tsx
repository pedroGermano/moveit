import { useContext } from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';
import styles from '../../styles/components/Countdown.module.css';


export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    handleCountdown,
    handleResetCountdown } = useContext(CountdownContext)



  const [minuteLeft, minuteLeftRight] = String(minutes).padStart(2, '0').split('');
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');



  return (
    <div>
      <div className={styles.countdow}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteLeftRight}</span>
        </div>
        <span>:</span>

        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button
          disabled
          className={styles.countdownButton}
        >
          Ciclo encerrado
          <img src="/icons/check_circle.svg" alt="check" />
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              onClick={handleResetCountdown}
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              type='button'
            >
              Abandonar ciclo
              <img className="closeSvg" src="/icons/close.svg" alt="arrow" />
            </button>
          ) : (
            <button
              onClick={handleCountdown}
              className={styles.countdownButton}
              type='button'
            >
              Iniciar ciclo
              <img src="/icons/play-arrow.svg" alt="arrow" />
            </button>
          )}
        </>
      )}
    </div>
  );
}