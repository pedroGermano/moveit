import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContexts';
import styles from '../../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext)
  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/pedroGermano.png" alt="Foto Profile" />
      <div>
        <strong>Pedro Germano</strong>
        <p>
          <img src="icons/level.svg" alt="Level Icon" />
          Level {level}
        </p>
      </div>
    </div>
  )
}