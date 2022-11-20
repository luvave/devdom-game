import { useState } from 'react';
import { RoundCounter } from './RoundCounter';
import { Timeline } from './Timeline';
import { Card } from './Card';
import { testConnection } from '../../utils/SparqlClient';

export const CardGame = () => {
  const [round, setRound] = useState<number>(0);
  return (
    <>
      <RoundCounter currentRound={round} />
      <Timeline />
      <Card
        title="Dog"
        imgSrc="https://upload.wikimedia.org/wikipedia/commons/1/18/Dog_Breeds.jpg"
        buttonText="hehe"
        description="Best friend to human"
        onBtnClick={() => setRound((prevState) => prevState + 1)}
      />
      <Card
        title="Test"
        imgSrc="https://upload.wikimedia.org/wikipedia/commons/1/18/Dog_Breeds.jpg"
        buttonText="hehe"
        description="Best friend to human"
        onBtnClick={() => testConnection()}
      />
    </>
  );
};
