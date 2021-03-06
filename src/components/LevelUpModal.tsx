import { useContext } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContexts';

import styles from '../styles/components/LevelUpModal.module.css';

export const LevelUpModal = () => {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level</p>

        <button type='submit' onClick={closeLevelUpModal}>
          <img src='/icons/close.svg' alt='Fechar modal' />
        </button>
      </div>
    </div>
  );
};